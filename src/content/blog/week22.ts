import { BlogPostData } from '@/types/blog';

export const week22: BlogPostData = {
  week: 22,
  title: "Week 22: The Journey of Fixing the Flatpak Plugin—A Developer's Tale",
  date: "November 2025",
  author: "Ahmed Adel Wafdy",
  tags: ['GSoC 2025', 'Toyota Connected', 'IVI', 'Flutter', 'C++', 'libflatpak', 'Debugging', 'Threading', 'Deadlock', 'GLib', 'ASIO', 'BLoC', 'UI/UX'],
  published: true,
  excerpt: "This week was a deep dive into debugging the Flatpak plugin. What started as a silent EventChannel led to untangling a web of threading deadlocks, timing issues, and synchronous code in an async world.",
  content: `
    <h2>The Journey of Fixing the Flatpak Plugin: A Developer's Tale</h2>
    
    <h3>Chapter 1: The Mystery of the Silent EventChannel</h3>
    <p>It all started with a simple question: "Why isn't my Flutter app receiving any events from the native Flatpak plugin?" The logs showed something puzzling - the EventChannel was being created, but the event sink was always null. Messages were being sent into the void, and Flutter had no idea what was happening with application installations, updates, or launches.</p>
    
    <div style="margin: 24px 0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1); background: #222;">
      <video controls width="100%" poster="/images/week22-poster-placeholder.jpg" style="display: block;">
        <source src="/media/final_submition.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <p style="text-align: center; padding: 12px 0 4px 0; color: #ccc; background: #222; margin: 0; font-style: italic;">Demo: The fully functional plugin, streaming progress with a new BLoC-powered UI.</p>
    </div>

    <h4>The First Discovery: Missing GLIB Integration</h4>
    <p>Coming from a working video player plugin implementation, I noticed something crucial missing - the <strong>GLIB main loop initialization</strong>. The Flatpak plugin was built on top of GLib (through libflatpak), but it wasn't actually starting the event loop that would process all those asynchronous callbacks.</p>
    <p>It's like building a sophisticated radio receiver but forgetting to plug it into the power socket. The hardware was all there, beautifully constructed, but without power, it simply couldn't work.</p>
    <p>The Fix: Adding a single line in the constructor made all the difference:</p>
    <pre style="background: #282c34; color: #abb2bf; padding: 16px; border-radius: 8px; overflow-x: auto;"><code>
plugin_common_glib::MainLoop::GetInstance();
    </code></pre>
    <p>This singleton pattern ensures the GLIB event loop runs throughout the application's lifetime, processing all the asynchronous events from Flatpak operations.</p>

    <h4>The Second Discovery: Timing is Everything</h4>
    <p>The EventChannel was being set up too early - right in the constructor, before Flutter's messenger was fully initialized. It's like trying to send a letter before the post office opens for business. The letter is written perfectly, addressed correctly, but there's no one to receive it yet.</p>
    <p><strong>The Solution:</strong> Split the initialization into two phases:</p>
    <ul>
        <li><strong>Constructor:</strong> Set up the basic structure, create the shim, but don't touch the EventChannel yet.</li>
        <li><strong>Init() method:</strong> Called after Flutter's messenger is ready, this is where we actually create the EventChannel.</li>
    </ul>
    <p>This mirrors the proven pattern from the video player plugin, where initialization happens in stages, respecting the lifecycle of Flutter's infrastructure.</p>

    <hr style="margin: 32px 0;">

    <h3>Chapter 2: The Threading Labyrinth</h3>
    <p>With the EventChannel finally working, a new problem emerged: the application start functionality worked perfectly in native code but <strong>hung indefinitely when called from Flutter</strong>. The logs would show "No extensions needed" and then... silence. No error, no crash, just an eternal wait.</p>

    <h4>The Third Discovery: The Strand Recursion Trap</h4>
    <p>The culprit was subtle but deadly: callback functions were using <code>asio::post</code> when they should have been using <code>asio::dispatch</code>. But what's the difference, and why does it matter?</p>
    <p>Think of it this way: You're at a restaurant (the strand thread), and you need to tell the waiter something (execute a callback).</p>
    <ul>
        <li><strong><code>asio::post</code></strong> is like writing a note and putting it in the waiter's inbox, even if the waiter is standing right in front of you. You wait for them to finish their current task, check their inbox, and read your note.</li>
        <li><strong><code>asio::dispatch</code></strong> is like just talking to the waiter directly if they're already there. If they're busy elsewhere, <em>then</em> you leave a note.</li>
    </ul>
    <p>The problem? We were already on the strand thread (the waiter was right there), but we were leaving notes for ourselves in our own inbox. Then we'd wait for ourselves to check that inbox... but we were busy waiting! <strong>Classic deadlock.</strong></p>
    <p>The Fix: Changed all immediate callback returns to use <code>asio::dispatch</code>:</p>
    <pre style="background: #282c34; color: #abb2bf; padding: 16px; border-radius: 8px; overflow-x: auto;"><code>
// When we have a result immediately available
if (extensions.empty()) {
  asio::dispatch(strand, [callback]() {
    callback(ErrorOr<bool>(true));  // Executes immediately if on strand
  });
  return;
}
    </code></pre>
    <p>This simple change eliminated the strand recursion deadlock. If we're already on the strand, the callback executes immediately. If we're on a different thread, it gets queued properly.</p>

    <hr style="margin: 32px 0;">

    <h3>Chapter 3: The Promise That Couldn't Be Kept</h3>
    <p>Even with the strand issues fixed, there was one final boss battle: <code>ApplicationStart</code> still hung when called from Flutter, though it worked perfectly in native tests. The investigation revealed the most insidious bug of all.</p>

    <h4>The Fourth Discovery: Blocking the Blocker</h4>
    <p>The <code>ApplicationStart</code> function was using a <code>std::promise / std::future</code> pattern - a synchronous blocking pattern. In native code, this worked fine because it was called from the main thread. But in Flutter, the call came through the strand via <code>asio::dispatch</code>:</p>
    <ol>
        <li>Flutter code dispatches to strand.</li>
        <li>Strand thread calls <code>ApplicationStart</code>.</li>
        <li>Strand thread <strong>blocks</strong> at <code>future.get()</code>.</li>
        <li>Async callback tries to set promise... but needs the strand.</li>
        <li>Strand is blocked waiting for itself.</li>
        <li><strong>Eternal deadlock 💀</strong></li>
    </ol>
    <p>It's like asking someone to text you their phone number while you're talking to them on the phone. They can't text you because they're using their phone to talk to you. You won't hang up until they text you. They can't text you until you hang up. Nobody wins.</p>

    <h4>The Solution: Embracing True Asynchrony</h4>
    <p>The fix required a fundamental shift in thinking - from synchronous blocking to fully asynchronous callbacks:</p>
    <pre style="background: #282c34; color: #abb2bf; padding: 16px; border-radius: 8px; overflow-x: auto;"><code>
// Before (Synchronous):
ErrorOr<bool> ApplicationStart(...) {
  std::promise<ErrorOr<bool>> promise;
  auto future = promise.get_future();
  
  check_runtime(..., [&promise](result) {
    promise.set_value(result);
  });
  
  return future.get();  // Blocks here!
}

// After (Asynchronous):
void ApplicationStart(..., std::function<void(ErrorOr<bool>)> callback) {
  check_runtime(..., [callback](result) {
    // Chain continues without blocking
    create_sandbox(..., [callback](sandbox_result) {
      // Launch app and call final callback
      callback(final_result);
    });
  });
  // Returns immediately, no blocking!
}
    </code></pre>
    <p>This transformation meant rewriting the entire <code>ApplicationStart</code> flow to use callback chains instead of blocking on futures. It's more code, but it's fundamentally more correct for an async environment.</p>

    <hr style="margin: 32px 0;">

    <h3>Chapter 4: The Event Stream Flows</h3>
    <p>With all these fixes in place, the EventChannel implementation needed proper thread safety. The Flatpak transaction callbacks come from GLib's thread, but they need to safely communicate with Flutter's messenger.</p>

    <h4>The Fifth Discovery: Every Thread Has Its Place</h4>
    <p>The pattern that emerged was beautifully simple:</p>
    <ul>
        <li><strong>GLib callbacks:</strong> Capture data, then immediately post to strand.</li>
        <li><strong>Strand thread:</strong> Safe to call Flutter messenger, send events.</li>
        <li><strong>Flutter side:</strong> Receives events on its own thread through EventChannel.</li>
    </ul>
    <p>The Implementation:</p>
    <pre style="background: #282c34; color: #abb2bf; padding: 16px; border-radius: 8px; overflow-x: auto;"><code>
void OnProgressChanged(GstProgress* progress, gpointer user_data) {
  // We're on GLIB thread - capture data quickly
  auto percentage = get_progress(progress);
  auto status = get_status(progress);
  
  // Post to strand for Flutter messenger access
  asio::post(*handler->strand_, [handler, percentage, status]() {
    // Now on strand - safe to send to Flutter
    flutter::EncodableMap event;
    event["type"] = "progress";
    event["percentage"] = percentage;
    event["status"] = status;
    
    handler->SendTransactionEvent(event);
  });
}
    </code></pre>

    <h4>The Transformation: Before and After</h4>
    <p><strong>Before: Radio Silence</strong></p>
    <ul>
        <li>[Plugin starts]</li>
        <li>[EventChannel created... but no one home]</li>
        <li>[Events sent to null sink]</li>
        <li>[Flutter waits forever]</li>
        <li>[User sees nothing]</li>
    </ul>
    <p><strong>After: Full Communication</strong></p>
    <ul>
        <li>[Plugin starts]</li>
        <li>[GLIB main loop running]</li>
        <li>[Init() sets up EventChannel]</li>
        <li>[Flutter subscribes]</li>
        <li>[Event sink connected!]</li>
        <li>[Install starts]</li>
        <li>  → "operation_started" event → Flutter updates UI</li>
        <li>  → "progress: 25%" event → Flutter shows progress bar</li>
        <li>  → "progress: 50%" event → Flutter updates progress</li>
        <li>  → "progress: 100%" event → Flutter shows completion</li>
        <li>  → "operation_complete" event → Flutter navigates to success</li>
        <li>[User sees everything in real-time]</li>
    </ul>

    <hr style="margin: 32px 0;">

    <h3>The Lessons Learned</h3>
    <ol>
        <li><strong>Respect Library Lifecycles:</strong> GLib-based libraries need their event loops running. Always initialize the main loop first, before anything else.</li>
        <li><strong>Initialization Order Matters:</strong> Flutter's infrastructure needs to be ready before you try to use it. Split initialization into <code>constructor</code> (structure) and <code>Init()</code> (connections).</li>
        <li><strong>Know Your Threading Model:</strong> <code>asio::post</code> = always queue (good for cross-thread). <code>asio::dispatch</code> = execute now if possible (good for same-thread). Choose wrong, get deadlock.</li>
        <li><strong>Never Block the Event Loop:</strong> If your function is called from an event loop thread (strand, GLIB main loop, etc.), it must NEVER block that thread. Use callbacks, not blocking operations.</li>
        <li><strong>Synchronous and Asynchronous Don't Mix:</strong> <code>std::promise/std::future</code> is a synchronous blocking pattern. It has no place in code running on event loop threads. Embrace callbacks fully or suffer deadlocks.</li>
    </ol>
    
    <hr style="margin: 32px 0;">

    <h3>Chapter 5: A New Face for the Appstore</h3>
    <p>While I was deep in the C++ trenches, I also took the time to completely overhaul the Flutter front-end. The old UI was functional, but now it's powered by a proper <strong>BLoC (Business Logic Component)</strong> state management architecture.</p>
    <p>This means the UI is now fully decoupled from the business logic. It reacts to states (like <code>Loading</code>, <code>Success</code>, <code>InProgress</code>, <code>Error</code>) emitted by the BLoCs, which are, in turn, fed by the real-time events from our newly-fixed plugin. This makes the entire application more robust, testable, and easier to maintain—a perfect front-end for a now bulletproof back-end.</p>
    
    <h3>Conclusion: From Broken to Bulletproof</h3>
    <p>What started as a simple "events not working" bug revealed a cascade of deeper issues: missing GLIB initialization, incorrect setup timing, strand recursion, and synchronous patterns in async contexts. Each fix built upon the previous one, transforming a plugin that couldn't send a single event into one that reliably streams real-time progress updates.</p>
    <p>The journey taught an important lesson: in async programming, especially with multiple threading models (Flutter's isolates, ASIO's strands, GLib's main loop), <strong>how you structure your code is just as important as what your code does</strong>. Get the threading wrong, and even perfect logic will deadlock. Get it right, and complex multi-threaded operations become surprisingly manageable.</p>
  `,
  readTime: "12 min read",
  slug: "week-22"
};