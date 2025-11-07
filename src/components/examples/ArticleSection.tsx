import ArticleSection from '../ArticleSection';

export default function ArticleSectionExample() {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-background">
      <ArticleSection
        id="example"
        title="The Blueprint"
        subtitle="Weeks 1-3"
      >
        <p>
          The project kicked off with a clear vision: a mobile-grade app store experience for Automotive Grade Linux. 
          Week 1 was all about design. I lived in Figma, translating that vision into a tangible UI/UX.
        </p>
        <p>
          We established the dark theme, the AGL branding, and the responsive layouts—all backed by a clean Flutter BLoC architecture.
        </p>
      </ArticleSection>
    </div>
  );
}