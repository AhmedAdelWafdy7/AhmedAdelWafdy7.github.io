import TechnicalCallout from '../TechnicalCallout';

export default function TechnicalCalloutExample() {
  return (
    <div className="max-w-3xl p-6 bg-background space-y-6">
      <TechnicalCallout type="bug" title="The Missing Power Socket">
        <p>The GLib main loop was never initialized, so libflatpak's async callbacks were never processed.</p>
      </TechnicalCallout>

      <TechnicalCallout type="architecture" title="Major Pivot Decision">
        <p>Scrapped the custom server idea and began designing the C++ HttpClient and a SQLite-based CacheManager that would live inside our plugin.</p>
      </TechnicalCallout>

      <TechnicalCallout type="insight" title="Conditional Extensions Discovery">
        <p>Flatpak checks your hardware (active-gl-driver, have-intel-gpu) before downloading anything. This required a complete rewrite of our installation logic.</p>
      </TechnicalCallout>
    </div>
  );
}