import BlogHero from '../BlogHero';

export default function BlogHeroExample() {
  return (
    <BlogHero
      title="From Blueprint to Bulletproof: A 22-Week GSoC Journey"
      subtitle="What began as a set of blueprints and a vision for an in-car app store has evolved into a bulletproof, complex, and fully functional system."
      date="Google Summer of Code 2025"
      author="The Linux Foundation • Automotive Grade Linux"
      metrics={[
        { label: "Duration", value: "22 Weeks" },
        { label: "Pull Requests", value: "16 PRs" },
        { label: "Status Updates", value: "23 Posts" }
      ]}
      onScrollToContent={() => console.log('Scroll to content')}
    />
  );
}