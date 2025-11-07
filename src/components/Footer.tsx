const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-serif font-bold gradient-text mb-2">
              Ahmed Adel Wafdy
            </h3>
            <p className="text-muted-foreground text-sm">
              Automotive Software Engineer specializing in embedded systems and Linux development.
            </p>
          </div>
          
          <div className="text-center">
            <p className="text-muted-foreground text-sm">
              © 2025 Ahmed Adel Wafdy. All rights reserved.
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm">
              Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;