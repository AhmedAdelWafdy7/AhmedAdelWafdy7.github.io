
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "ahmedadelwafdy782@gmail.com",
      href: "mailto:ahmedadelwafdy782@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+201096514812",
      href: "tel:+201096514812"
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ahmed-wafdy-094567242/",
      icon: <Linkedin className="w-6 h-6" />
    },
    {
      name: "GitHub",
      url: "https://github.com/AhmedAdelWafdy7",
      icon: <Github className="w-6 h-6" />
    }
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-32 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4 sm:mb-6 gradient-text">
          Let's Connect
        </h2>
        <p className="text-lg sm:text-xl text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto px-4 sm:px-0">
          Ready to discuss automotive software engineering opportunities? 
          I'm always excited to explore new challenges and collaborate on innovative projects.
        </p>

        <Card className="bg-card/50 backdrop-blur-sm border-border/50 mb-12">
          <CardContent className="p-4 sm:p-6 lg:p-8">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
              <div className="text-left space-y-4 lg:space-y-6">
                <h3 className="text-xl sm:text-2xl font-serif font-semibold">Get In Touch</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Whether you have an exciting automotive software project, want to discuss 
                  embedded systems development, or explore collaboration opportunities, I'd love to hear from you.
                </p>
                <div className="space-y-3 lg:space-y-4">
                  {contactInfo.map((contact, index) => (
                    <a
                      key={index}
                      href={contact.href}
                      className="flex items-start sm:items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      <div className="text-primary mt-0.5 sm:mt-0 flex-shrink-0">{contact.icon}</div>
                      <div className="flex flex-col sm:flex-row sm:items-center">
                        <span className="text-primary font-medium">{contact.label}:</span>
                        <span className="sm:ml-2 text-sm sm:text-base break-all">{contact.value}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="space-y-3 lg:space-y-4 mt-6 lg:mt-0">
                <Button 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground hover-lift glow-effect text-sm sm:text-base"
                  onClick={() => window.open('mailto:ahmedadelwafdy782@gmail.com', '_blank')}
                >
                  Send Email
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground hover-lift text-sm sm:text-base"
                  onClick={() => window.open('https://www.linkedin.com/in/ahmed-wafdy-094567242/', '_blank')}
                >
                  Connect on LinkedIn
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Social Links */}
        <div className="space-y-4 lg:space-y-6">
          <h3 className="text-lg sm:text-xl font-serif font-semibold">Connect With Me</h3>
          <div className="flex justify-center gap-4 sm:gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 sm:w-14 sm:h-14 bg-card hover:bg-primary border border-border hover:border-primary text-muted-foreground hover:text-primary-foreground rounded-full flex items-center justify-center transition-all duration-300 hover-lift"
                title={social.name}
              >
                <div className="w-5 h-5 sm:w-6 sm:h-6">
                  {social.icon}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
