
import { Cpu, Radio, Code, TrendingUp, MessageSquare, Users, Lightbulb, RefreshCw } from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    {
      category: "Embedded Systems Expertise",
      skills: ["C/C++", "OOP", "RTOS", "Yocto", "CMake"],
      icon: <Cpu className="w-6 h-6" />
    },
    {
      category: "Communication Protocols",
      skills: ["UART", "SPI", "I2C", "CAN", "VSomeIP", "D-Bus"],
      icon: <Radio className="w-6 h-6" />
    },
    {
      category: "Software Development & Scripting",
      skills: ["Bash", "MISRA-C"],
      icon: <Code className="w-6 h-6" />
    }
  ];

  const softSkills = [
    { name: "Growth-Oriented", icon: <TrendingUp className="w-5 h-5" /> },
    { name: "Effective Communication", icon: <MessageSquare className="w-5 h-5" /> },
    { name: "Teamwork", icon: <Users className="w-5 h-5" /> },
    { name: "Innovative Thinking", icon: <Lightbulb className="w-5 h-5" /> },
    { name: "Adaptable", icon: <RefreshCw className="w-5 h-5" /> }
  ];

  return (
    <section id="skills" className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6 gradient-text">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive skill set spanning embedded systems development, automotive protocols, 
            and collaborative software engineering practices.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Technical Skills */}
          <div className="space-y-8">
            <h3 className="text-3xl font-serif font-semibold text-foreground mb-8">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skillGroup, index) => (
                <div key={index} className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 hover-lift">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-primary">{skillGroup.icon}</div>
                    <h4 className="text-lg font-semibold text-foreground">{skillGroup.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="space-y-8">
            <h3 className="text-3xl font-serif font-semibold text-foreground mb-8">Soft Skills</h3>
            <div className="grid gap-4">
              {softSkills.map((skill, index) => (
                <div key={index} className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 hover-lift">
                  <div className="flex items-center gap-3">
                    <div className="text-primary">{skill.icon}</div>
                    <span className="text-lg font-medium text-foreground">{skill.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
