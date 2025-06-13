
const Experience = () => {
  const experiences = [
    {
      year: "2024",
      title: "Linux System Programming and Kernel Fundamentals",
      organization: "STMicroelectronics",
      type: "Training",
      description: [
        "Gained comprehensive understanding of Linux system programming concepts",
        "Learned kernel-level programming and system optimization techniques",
        "Applied knowledge to embedded Linux environments and driver development"
      ]
    },
    {
      year: "2023-2024",
      title: "Curriculum Development & Delivery",
      organization: "IEEE Mansoura Student Branch",
      type: "Leadership Role",
      description: [
        "Designed and delivered technical curriculum for engineering students",
        "Organized workshops and training sessions on embedded systems",
        "Mentored junior members in software development best practices"
      ]
    },
    {
      year: "2023-2024",
      title: "Committee Supervision",
      organization: "IEEE Mansoura Student Branch",
      type: "Leadership Role",
      description: [
        "Supervised technical committees and project development",
        "Coordinated cross-functional teams for successful project delivery",
        "Implemented quality assurance processes for technical initiatives"
      ]
    },
    {
      year: "2023",
      title: "Automotive Embedded Linux",
      organization: "Bullet Guru",
      type: "Training",
      description: [
        "Specialized training in automotive-specific Linux implementations",
        "Learned AUTOSAR and automotive software architecture principles",
        "Developed expertise in automotive communication protocols and safety standards"
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