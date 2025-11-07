import CommunityTimeline from '../CommunityTimeline';

export default function CommunityTimelineExample() {
  const entries = [
    {
      title: "GSoC Week 1: Project Kickoff and Initial Design",
      date: "Week 1",
      url: "https://lists.automotivelinux.org/g/agl-dev-community/message/11534"
    },
    {
      title: "GSoC Week 5: Deep Dive into libflatpak API",
      date: "Week 5",
      url: "https://lists.automotivelinux.org/g/agl-dev-community/message/11547"
    },
    {
      title: "GSoC Week 10: CurlClient and CacheManager Implementation",
      date: "Week 10",
      url: "https://lists.automotivelinux.org/g/agl-dev-community/message/11559"
    }
  ];

  return (
    <div className="max-w-2xl p-6 bg-background">
      <CommunityTimeline entries={entries} />
    </div>
  );
}