import ContributionCard from '../ContributionCard';

export default function ContributionCardExample() {
  return (
    <div className="max-w-md p-6 bg-background">
      <ContributionCard
        type="pr"
        number={124}
        title="feat(common): Enhance CurlClient for generic HTTP requests"
        repo="ivi-homescreen-plugins"
        status="merged"
        date="Jul 11, 2025"
        url="https://github.com/toyota-connected/ivi-homescreen-plugins/pull/124"
        description="Enhanced CurlClient with Bearer auth, GET/POST methods, and proper memory management"
      />
    </div>
  );
}