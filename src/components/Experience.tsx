
const Experience = () => {
  const experiences = [
    {
      year: "May 2025 - Present",
      title: "Contributor at The Linux Foundation",
      organization: "Google Summer of Code",
      type: "Part-time",
      description: [
        "Contributing to The Linux Foundation open source projects",
        "Working on kernel-level improvements and system optimization",
        "Collaborating with global developers on critical Linux infrastructure"
      ]
    },
    {
      year: "Nov 2024 - Present",
      title: "Chairperson",
      organization: "IEEE Mansoura Computer Society Chapter",
      type: "Leadership Role",
      description: [
        "Leading the computer society chapter with strategic vision and direction",
        "Organizing technical events and educational programs for members",
        "Managing cross-functional teams and fostering innovation initiatives"
      ]
    },
    {
      year: "Nov 2023 - Nov 2024",
      title: "Head of Embedded Systems Committee",
      organization: "IEEE Mansoura Computer Society Chapter",
      type: "Leadership Role",
      description: [
        "Led embedded systems committee for 1 year and 1 month",
        "Developed and delivered curriculum for embedded systems training",
        "Supervised technical projects and mentored committee members"
      ]
    },
    {
      year: "Jul 2023 - Nov 2023",
      title: "Embedded Systems Supervisor",
      organization: "IEEE Mansoura Computer Society Chapter",
      type: "Leadership Role",
      description: [
        "Supervised embedded systems projects and initiatives",
        "Provided technical guidance and mentorship to team members",
        "Coordinated project delivery and quality assurance processes"
      ]
    },
    {
      year: "Jun 2024 - Sep 2024",
      title: "Linux Kernel Fundamentals",
      organization: "STMicroelectronics",
      type: "Internship",
      description: [
        "Specialized in Linux kernel fundamentals and driver development",
        "Gained expertise in POSIX threads and kernel-level programming",
        "Applied knowledge to real-world embedded Linux environments",
        "Location: Cairo, Egypt (On-site)"
      ]
    },
    {
      year: "Jan 2024 - May 2024",
      title: "Linux System Programming Trainee",
      organization: "STMicroelectronics",
      type: "Internship",
      description: [
        "Comprehensive training in Linux system programming concepts",
        "Mastered GNU/Linux tools and GNU Debugger",
        "Developed proficiency in 18+ technical skills including system optimization",
        "Location: Cairo, Egypt (On-site)"
      ]
    },
    {
      year: "Oct 2023 - Sep 2024",
      title: "Hardware Engineer - PCB Layout",
      organization: "Metanoia",
      type: "Full-time",
      description: [
        "Designed and developed PCB layouts using Altium Designer",
        "Specialized in Printed Circuit Board (PCB) Design and layout optimization",
        "Applied hardware engineering principles to real-world projects",
        "Location: Cairo, Egypt"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 lg:py-32">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6 gradient-text">
            Experience & Training
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A journey of continuous learning and leadership in automotive software engineering 
            and embedded systems development.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-20">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                
                <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 hover-lift">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-serif font-semibold text-foreground mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-primary font-medium">{exp.organization}</p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
                        {exp.type}
                      </span>
                      <span className="block md:inline-block md:ml-3 text-muted-foreground text-sm mt-1 md:mt-0">
                        {exp.year}
                      </span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-muted-foreground flex items-start">
                        <span className="text-primary mr-2 mt-1.5">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;