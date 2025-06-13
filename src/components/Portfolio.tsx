import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Software-Defined Vehicle (SDV)',
      category: 'automotive',
      image: 'https://imgs.search.brave.com/hhUhvtNTED6ZYYeaqN1MvvRGZFndZZH4C9WqhA2W2LE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kMXJ6/NHVpNDY0czZnNy5j/bG91ZGZyb250Lm5l/dC93cC1jb250ZW50/L3VwbG9hZHMvMjAy/Mi8wNS8wMzExMTQy/Ni9lQ29ja3BpdC1h/bmQtQ29ubmVjdGl2/aXR5LTEuanBn',
      description: 'Comprehensive autonomous driving system with multiple ECU components for next-generation vehicle architecture.',
      longDescription: 'This repository contains the OS Unit part of an Autonomous-Driving-System project featuring ECU-HeadUnit for infotainment, ECU-Control for vehicle operations, and a secure OTA update system. Built with Yocto Linux and designed for Raspberry Pi hardware.',
      tags: ['Qt5/QML', 'C++', 'Yocto', 'CAN Bus', 'ROS2', 'OTA'],
      features: [
        'Real-time vehicle status display',
        'CAN bus communication protocol',
        'Secure OTA updates with TLS 1.3',
        'LIDAR and depth camera integration',
        'Autonomous and manual control modes'
      ],
      github: 'https://github.com/AhmedAdelWafdy7/Software-Defined-Vehicle',
      demo: null,
      status: 'Active Development'
    },
    {
      id: 2,
      title: 'AGL App Store (GSoC 2025)',
      category: 'automotive',
      image: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?auto=format&fit=crop&w=600&q=80',
      description: 'Flutter-based application store for Automotive Grade Linux with Flatpak integration and security-first design.',
      longDescription: 'Revolutionary app store experience for In-Vehicle Infotainment systems built as part of Google Summer of Code 2025. Features comprehensive UI/UX design, AppStream metadata parsing, and automotive-grade security.',
      tags: ['Flutter', 'AGL', 'Flatpak', 'AppStream', 'Security', 'UI/UX'],
      features: [
        'Responsive automotive display optimization',
        'AppStream XML metadata integration',
        'Secure app sandboxing with Flatpak',
        'Rating and review system',
        'Root of trust implementation'
      ],
      github: 'https://github.com/AhmedAdelWafdy7/agl-app-store',
      demo: 'https://www.figma.com/design/yFvzFAN6MGC6S1RXWFTVtW/App-Store',
      status: 'GSoC 2025'
    },
    {
      id: 3,
      title: 'Coffee-Dashboard (Yocto Layer)',
      category: 'embedded',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80',
      description: 'Comprehensive dashboard application for managing and monitoring coffee brewing processes, integrated into Yocto Project.',
      longDescription: 'A robust coffee brewing management system built as a custom Yocto layer. Features real-time monitoring, brewing parameter control, and analytics for embedded coffee machines with Qt5-based user interface.',
      tags: ['Yocto', 'Qt5', 'Embedded Linux', 'BitBake', 'Dashboard', 'IoT'],
      features: [
        'Real-time coffee brewing parameter monitoring',
        'Custom Yocto layer with BitBake recipes',
        'Qt5-based user interface',
        'Data logging and brewing analytics',
        'Integration with various coffee machines',
        'Customizable alerts and notifications'
      ],
      github: 'https://github.com/AhmedAdelWafdy7/meta-coffeeDash',
      demo: null,
      status: 'Completed'
    },
    {
      id: 4,
      title: 'In-Vehicle Infotainment System',
      category: 'automotive',
      image: 'https://images.unsplash.com/photo-1482029255085-35a4a48b7084?auto=format&fit=crop&w=600&q=80',
      description: 'Advanced IVI system using Raspberry Pi4 that mimics real vehicle functionalities through Inter-Process Communication mechanisms.',
      longDescription: 'A sophisticated infotainment system built using Qt for embedded GUI and COVESA\'s vsomeip for IPC, adhering to the AUTOSAR standard. Features include head unit application, PDC unit with ultrasonic sensors, and instrument cluster integration.',
      tags: ['Qt', 'Raspberry Pi', 'vsomeip', 'AUTOSAR', 'Yocto', 'CAN Bus'],
      features: [
        'CAN Communication with vehicle\'s bus',
        'IPC Management using vsomeip',
        'Multimedia Control for audio/video playback',
        'Embedded GUI with Qt Compositor',
        'PDC system with ultrasonic sensors'
      ],
      github: 'https://github.com/AhmedAdelWafdy7/Infotainment-System',
      demo: null,
      status: 'Completed'
    },
    {
      id: 5,
      title: 'Master Embedded Systems Course',
      category: 'baremetal',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&q=80',
      description: 'Comprehensive embedded systems course covering ARM Cortex-M4 bare metal programming, peripheral drivers, and real-world projects.',
      longDescription: 'Complete embedded systems mastery course featuring bare metal ARM Cortex-M4 programming, custom HAL drivers development, communication protocols implementation, and practical projects including Smart Vehicle Parking, CAN communication, and RTOS development.',
      tags: ['ARM Cortex-M4', 'STM32', 'HAL Drivers', 'Communication Protocols', 'Assembly', 'Keil µVision'],
      features: [
        'Custom STM32 HAL drivers (GPIO, USART, SPI, I2C, Timers, ADC)',
        'Communication protocols implementation',
        'Interrupt handling and EXTI drivers',
        'Smart Vehicle Parking project with sensors',
        'CAN bus communication system',
        'ARM assembly and inline assembly programming',
        'Memory management and stack operations',
        'Reset sequence and CPU access level control',
        'Real-time embedded projects with hardware integration'
      ],
      github: 'https://github.com/AhmedAdelWafdy7/MasterEmbeddedSystems',
      demo: null,
      status: 'Completed'
    },
    {
      id: 6,
      title: 'Round Robin Priority-based RTOS',
      category: 'embedded',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80',
      description: 'Custom Real-Time Operating System from scratch with Round Robin scheduling, priority support, and Mutex handling for ARM Cortex-M3/4.',
      longDescription: 'Complete RTOS implementation designed for various processors/MCUs featuring Round Robin scheduling with priority support, context switching using MSP/PSP, and priority inversion prevention through Mutex subsystem. Built specifically for ARM Cortex-M3/4 architecture with pre-emptive multitasking capabilities.',
      tags: ['RTOS', 'ARM Cortex-M', 'Scheduling', 'Mutex', 'Context Switching', 'Keil µVision'],
      features: [
        'Round Robin scheduling with priority support',
        'Context switching using MSP and PSP pointers',
        'Mutex handling with priority inversion prevention',
        'Portable architecture for different MCUs',
        'Pre-emptive multitasking for ARM Cortex-M3/4',
        'Essential MCAL libraries integration',
        'Queue data structure implementation',
        'SVC_Handler for efficient task switching'
      ],
      github: 'https://github.com/AhmedAdelWafdy7/MasterEmbeddedSystems/tree/main/Create_My_Own_RTOS',
      demo: 'https://github.com/AhmedAdelWafdy7/MasterEmbeddedSystems/tree/main/Create_My_Own_RTOS',
      status: 'Completed'
    }
  ];

  const categories = ['all', 'automotive', 'embedded', 'baremetal'];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6 gradient-text">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of automotive and embedded systems projects demonstrating 
            expertise in low-level programming and system architecture.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full capitalize transition-all duration-300 ${
                filter === category
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-card text-muted-foreground hover:text-foreground hover:bg-card/80'
              }`}
            >
              {category === 'baremetal' ? 'Bare Metal' : category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card 
              key={project.id} 
              className="group cursor-pointer hover-lift overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 h-full flex flex-col"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="text-xs capitalize">
                    {project.category === 'baremetal' ? 'Bare Metal' : project.category}
                  </Badge>
                </div>
                {project.status && (
                  <div className="absolute top-4 left-4">
                    <Badge variant="outline" className="text-xs bg-background/80">
                      {project.status}
                    </Badge>
                  </div>
                )}
              </div>
              
              <CardContent className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-serif font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 4).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 4 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.tags.length - 4}
                    </Badge>
                  )}
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-4 mt-auto">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      <Github size={16} className="mr-1" />
                      Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      {project.demo.includes('figma') ? 'Design' : 'Demo'}
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Interested in collaborating on automotive or embedded systems projects?
          </p>
          <a
            href="https://github.com/AhmedAdelWafdy7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-300"
          >
            <Github size={20} className="mr-2" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;