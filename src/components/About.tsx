
const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6 gradient-text">
                About Me
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I am a passionate automotive software engineer with a strong foundation in embedded systems 
                  and a deep enthusiasm for cutting-edge automotive technologies. My journey in software 
                  development is driven by a commitment to innovation and excellence in the automotive industry.
                </p>
                <p>
                  Currently seeking a Software Engineering role where I can apply my expertise in C++, 
                  Yocto Project, and embedded Linux to enhance infotainment and driver-assistance systems. 
                  I believe in creating robust, efficient software solutions that contribute to safer and 
                  more intelligent automotive experiences.
                </p>
                <p>
                  With a B.S. in Engineering from Mansoura University, I combine academic knowledge with 
                  practical experience in embedded systems development. My focus on continuous learning 
                  keeps me at the forefront of emerging technologies in the automotive software domain.
                </p>
              </div>
            </div>

            {/* Education & Objective */}
            <div className="space-y-6">
              <h3 className="text-2xl font-serif font-semibold text-foreground">Education & Objective</h3>
              <div className="space-y-4">
                <div className="p-4 bg-card/50 rounded-lg border border-border/50">
                  <h4 className="font-semibold text-foreground mb-2">Bachelor of Science in Engineering</h4>
                  <p className="text-muted-foreground">Mansoura University</p>
                </div>
                <div className="p-4 bg-card/50 rounded-lg border border-border/50">
                  <h4 className="font-semibold text-foreground mb-2">Career Objective</h4>
                  <p className="text-muted-foreground">
                    Seeking a Software Engineering role to apply expertise in C++, Yocto, and embedded Linux 
                    to enhance infotainment and driver-assistance systems in the automotive industry.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-8 flex items-center justify-center">
              <div className="w-full h-full rounded-xl bg-card border border-border flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-primary/20 rounded-full mx-auto flex items-center justify-center">
                    <div className="w-16 h-16 bg-primary rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-foreground">
                    Engineering Philosophy
                  </h3>
                  <p className="text-muted-foreground text-sm max-w-xs">
                    "Innovation through robust code. Every system should be reliable, efficient, and scalable."
                  </p>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full animate-pulse animation-delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;