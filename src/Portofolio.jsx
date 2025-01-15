import React, { useState, useEffect } from 'react';
import { ArrowUp, ExternalLink, Mail, Github, Linkedin, Moon, Sun, Send } from 'lucide-react';
import fotoFarras from './assets/Farras.jpg';
import logoFarras from './assets/logo_farras.png';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Gradian',
      category: 'web',
      tech: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com/username/ecommerce-platform',
      demo: 'https://ecommerce-platform-demo.com',
      image: logoFarras,
    },
    {
      id: 2,
      title: 'Subur',
      category: 'mobile',
      tech: ['Kotlin', 'Firebase', 'Retrofit'],
      github: 'https://github.com/Farrasagogo/subur',
      demo: 'https://mobile-app-demo.com',
      image: '/images/mobile-app.png', 
    },
    {
      id: 3,
      title: 'Crop Recommendation',
      category: 'aI',
      tech: ['Python', 'TensorFlow', 'Flask'],
      github: 'https://github.com/username/ai-dashboard',
      demo: 'https://ai-dashboard-demo.com',
      image: '/images/crop-recommendation.png', 
    },
    {
      id: 4,
      title: 'Pakar Tani',
      category: 'web',
      tech: ['React', 'Tailwind CSS'],
      github: 'https://github.com/Farrasagogo/PakarTani',
      demo: 'https://portfolio-demo.com',
      image: '/images/portfolio.png', 
    },
    {
      id: 5,
      title: 'IOT',
      category: 'ioT',
      tech: ['React Native', 'Firebase'],
      github: 'https://github.com/username/mobile-app',
      demo: 'https://mobile-app-demo.com',
      image: '/images/iot.png', 
    },
  ];
  

  const skills = {
    programming: [
      'JavaScript', 'Laravel', 'Python', 'PHP', 'C#', 'Dart', 'Kotlin', 'C++'
    ],
    frameworks_and_libraries: [
      'React', 'Node.js', 'Django', 'Laravel', 'Flutter', 
      'Bootstrap', 'Tailwind CSS'
    ],
    tools_and_platforms: [
      'Git', 'Docker', 'Firebase', 'Figma', 'Postman', 'Swagger', 
      'Trello', 'Excel', 'Microsoft Office', 'Github'
    ],
    databases: ['MySQL', 'PostgreSQL', 'SQLite', 'MongoDB', 'Firebase'],
    cms: ['WordPress'],
    operating_Systems: ['Windows', 'Linux'],
    soft_skills: [
      'Problem Solving', 'Teamwork', 'Adaptation', 'Critical Thinking', 
      'Communication', 'Grit and Perseverance', 'Responsible'
    ]
  };
  
  const experiences = [
    {
      company: 'Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka',
      position: 'Mobile Development Cohort',
      period: 'Sep 2024 - Des 2024',
      description: 'Participating in the Mobile Development Cohort at Bangkit Academy, developing technical expertise in Android development, Kotlin programming, app architecture, API integration, database management, and performance optimization for mobile applications. Selected as one of the cohort members in this highly competitive program.',
    },
    {
      company: '2Menit Photobooth Vendor',
      position: 'Founder & IT Technician',
      period: 'Aug 2022 - Present',
      description: 'Designed and managed the operation of photobooths for more than 50 events. Provided direct technical support, ensuring 98% uptime during events. Innovated with new features to improve the photobooth experience. Oversaw event setup and execution, ensuring a seamless experience for clients and guests. Prepared contingency plans to resolve technical issues quickly.',
    },
  ];
  
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);
  
  const handleEmailClick = () => {
    window.location.href = "mailto:your.farrasagogo@gmail.com";
  };

  const handleLinkedinClick = () => {
    window.open("https://linkedin.com/in/udinalfar", "_blank");
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/0811370283", "_blank");
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-white'} transition-colors duration-300`}>
      {/* Header - Updated */}
      <header className={`fixed w-full ${darkMode ? 'bg-gray-900/80' : 'bg-white/80'} backdrop-blur-sm z-50 transition-colors duration-300`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="#">
              <img src={logoFarras} alt="Logo" className="h-8 md:h-10" />
            </a>
            <div className="flex items-center gap-8">
              <nav className="hidden md:flex space-x-8">
                <a href="#about" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors duration-300`}>About</a>
                <a href="#project" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors duration-300`}>Project</a>
                <a href="#experience" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors duration-300`}>Experience</a>
                <a href="#skills" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors duration-300`}>Skills</a>
                <a href="#contact" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors duration-300`}>Contact</a>
              </nav>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-full ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors duration-300`}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="space-y-2">
                <span className={`block w-8 h-0.5 ${darkMode ? 'bg-white' : 'bg-black'} transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                <span className={`block w-8 h-0.5 ${darkMode ? 'bg-white' : 'bg-black'} transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-8 h-0.5 ${darkMode ? 'bg-white' : 'bg-black'} transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
              </div>
            </button>
          </div>
          {/* Mobile Menu - Updated */}
          <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
            <nav className="py-4 flex flex-col space-y-4">
              <a href="#about" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors duration-300`}>About</a>
              <a href="#project" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors duration-300`}>Project</a>
              <a href="#experience" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors duration-300`}>Experience</a>
              <a href="#skills" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors duration-300`}>Skills</a>
              <a href="#contact" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors duration-300`}>Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section - Updated */}
      <section id="about" className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
        <div className="container mx-auto">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
            <div className="w-full md:flex-1 text-left">
              <h1 className={`text-4xl md:text-6xl font-light mb-6 tracking-tight ${darkMode ? 'text-white' : 'text-black'} transition-colors duration-300`}>
                Muhammad Taqiyuddin Al Farras
              </h1>
              <div className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} space-y-4 mb-8 transition-colors duration-300`}>
                <p className="leading-relaxed">
                  A Full Stack Developer specialized in building exceptional digital experiences, with expertise in developing innovative and user-friendly mobile applications, designing and integrating IoT systems for seamless connectivity, and providing reliable technical support while maintaining robust IT infrastructure to ensure optimal performance.
                </p>
                <p className="leading-relaxed">
                  IT student at the University of Jember and part of the Bangkit Academy 2024 Mobile Development Cohort, with experience as an IT Technician and a passion for building impactful software solutions.
                </p>
              </div>
              <div className="flex space-x-6">
                <a 
                  href="https://github.com/farrasagogo" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors duration-300`}
                >
                  <Github size={24} />
                </a>
                <a 
                  href="https://linkedin.com/in/udinalfar" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors duration-300`}
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="mailto:farrasagogo@gmail.com" 
                  className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors duration-300`}
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
            <div className="w-full md:flex-1 md:max-w-md">
              <div className="relative w-full pb-[100%] md:aspect-square rounded-2xl overflow-hidden">
                <div className={`absolute inset-0 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} transition-colors duration-300`}>
                  <img
                    src={fotoFarras}
                    alt="Farras"
                    className="absolute w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Section - Updated */}
      <section id="project" className="py-24 px-6">
      <div className="container mx-auto">
        <h2 className={`text-2xl font-light mb-12 tracking-wide ${darkMode ? 'text-white' : 'text-black'} transition-colors duration-300`}>
          Selected Projects
        </h2>
        <div className="flex justify-center mb-12 space-x-4">
          {['all', 'web', 'mobile', 'aI', 'ioT'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                activeFilter === filter 
                  ? 'bg-black text-white dark:bg-white dark:text-black' 
                  : `${darkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
  {projects
    .filter((project) => activeFilter === 'all' || project.category === activeFilter)
    .map((project) => (
      <div 
        key={project.id}
        className={`group relative overflow-hidden rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} aspect-video hover:shadow-lg transition-all duration-300`}
      >
        <img
          src={project.image} // Use the project's custom image
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-white text-center p-6">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {project.tech.map((tech) => (
                <span key={tech} className="text-xs px-2 py-1 bg-white/20 rounded">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-center gap-4">
              <a 
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-white text-black rounded hover:bg-gray-200 transition-colors duration-300"
              >
                Live Demo <ExternalLink size={16} className="ml-1" />
              </a>
              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors duration-300"
              >
                GitHub <Github size={16} className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
  ))}
</div>
      </div>
    </section>

      {/* Experience Section - Updated */}
      <section id="experience" className={`py-24 px-6 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} transition-colors duration-300`}>
        <div className="container mx-auto max-w-3xl">
          <h2 className={`text-2xl font-light mb-12 tracking-wide ${darkMode ? 'text-white' : 'text-black'} transition-colors duration-300`}>
            Experience
          </h2>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative pl-8 border-l-2 ${darkMode ? 'border-gray-600' : 'border-gray-200'} transition-colors duration-300`}>
                <div className={`absolute w-4 h-4 ${darkMode ? 'bg-gray-800 border-white' : 'bg-white border-black'} border-2 rounded-full -left-[9px] top-0 transition-colors duration-300`} />
                <h3 className={`text-xl font-medium mb-1 ${darkMode ? 'text-white' : 'text-black'} transition-colors duration-300`}>
                  {exp.position}
                </h3>
                <h4 className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-2 transition-colors duration-300`}>
                  {exp.company}
                </h4>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} mb-4 transition-colors duration-300`}>
                  {exp.period}
                </p>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-300`}>
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section - Updated */}
      <section id="skills" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className={`text-2xl font-light mb-12 tracking-wide ${darkMode ? 'text-white' : 'text-black'} transition-colors duration-300`}>
          Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="mb-8">
              <h3 className={`text-sm uppercase tracking-wider ${darkMode ? 'text-gray-400' : 'text-gray-500'} mb-4 transition-colors duration-300`}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </h3>
              <div className="space-y-3">
                {items.map((skill) => (
                  <div key={skill} className="flex items-center group">
                    <div className={`h-1 w-2 ${darkMode ? 'bg-white' : 'bg-black'} mr-3 transition-colors duration-300 group-hover:w-3`} />
                    <span className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-300 text-sm`}>
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* Contact Section - Updated */}
      <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-xl text-center">
        <h2 className={`text-3xl font-light mb-4 tracking-wide ${
          darkMode ? 'text-white' : 'text-black'
        } transition-colors duration-300`}>
          Let's Connect
        </h2>
        <p className={`${
          darkMode ? 'text-gray-300' : 'text-gray-600'
        } mb-12 text-lg transition-colors duration-300`}>
          Choose your preferred way to get in touch
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Email Card */}
          <button
            onClick={handleEmailClick}
            className={`group p-6 rounded-lg transform transition-all duration-300 hover:-translate-y-2 ${
              darkMode 
                ? 'bg-gray-800 hover:bg-gray-700' 
                : 'bg-white hover:bg-gray-50'
            } shadow-lg`}
          >
            <div className="flex flex-col items-center space-y-4">
              <div className={`p-4 rounded-full ${
                darkMode ? 'bg-gray-700' : 'bg-gray-100'
              } group-hover:bg-blue-500 transition-colors duration-300`}>
                <Mail className={`w-8 h-8 ${
                  darkMode ? 'text-white' : 'text-gray-700'
                } group-hover:text-white`} />
              </div>
              <span className={`font-medium ${
                darkMode ? 'text-white' : 'text-gray-800'
              }`}>Email</span>
            </div>
          </button>

          {/* LinkedIn Card */}
          <button
            onClick={handleLinkedinClick}
            className={`group p-6 rounded-lg transform transition-all duration-300 hover:-translate-y-2 ${
              darkMode 
                ? 'bg-gray-800 hover:bg-gray-700' 
                : 'bg-white hover:bg-gray-50'
            } shadow-lg`}
          >
            <div className="flex flex-col items-center space-y-4">
              <div className={`p-4 rounded-full ${
                darkMode ? 'bg-gray-700' : 'bg-gray-100'
              } group-hover:bg-blue-500 transition-colors duration-300`}>
                <Linkedin className={`w-8 h-8 ${
                  darkMode ? 'text-white' : 'text-gray-700'
                } group-hover:text-white`} />
              </div>
              <span className={`font-medium ${
                darkMode ? 'text-white' : 'text-gray-800'
              }`}>LinkedIn</span>
            </div>
          </button>

          {/* WhatsApp Card */}
          <button
            onClick={handleWhatsAppClick}
            className={`group p-6 rounded-lg transform transition-all duration-300 hover:-translate-y-2 ${
              darkMode 
                ? 'bg-gray-800 hover:bg-gray-700' 
                : 'bg-white hover:bg-gray-50'
            } shadow-lg`}
          >
            <div className="flex flex-col items-center space-y-4">
              <div className={`p-4 rounded-full ${
                darkMode ? 'bg-gray-700' : 'bg-gray-100'
              } group-hover:bg-blue-500 transition-colors duration-300`}>
                <Send className={`w-8 h-8 ${
                  darkMode ? 'text-white' : 'text-gray-700'
                } group-hover:text-white`} />
              </div>
              <span className={`font-medium ${
                darkMode ? 'text-white' : 'text-gray-800'
              }`}>WhatsApp</span>
            </div>
          </button>
        </div>
      </div>
    </section>
    
    {/* Footer - Updated */}
    <footer className={`py-12 px-6 border-t ${
              darkMode 
                ? 'border-gray-800 bg-gray-900' 
                : 'border-gray-200 bg-white'
            } transition-colors duration-300`}>
              <div className="container mx-auto max-w-4xl">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div>
                    <h4 className={`text-sm font-medium mb-4 ${
                      darkMode ? 'text-white' : 'text-black'
                    } transition-colors duration-300`}>Contact</h4>
                    <p className={`text-sm ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    } transition-colors duration-300`}>farrasagogo@gmail.com</p>
                    <p className={`text-sm ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    } transition-colors duration-300`}>+62-811-370-283</p>
                  </div>
                  <div>
                    <h4 className={`text-sm font-medium mb-4 ${
                      darkMode ? 'text-white' : 'text-black'
                    } transition-colors duration-300`}>Social</h4>
                    <div className="flex space-x-4">
                      <a href="https://github.com/Farrasagogo" className={`${
                        darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
                      } transition-colors duration-300`}>
                        <Github size={20} />
                      </a>
                      <a href="https://linkedin.com/in/udinalfar" className={`${
                        darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
                      } transition-colors duration-300`}>
                        <Linkedin size={20} />
                      </a>
                    </div>
                  </div>
                  <div>
                    <h4 className={`text-sm font-medium mb-4 ${
                      darkMode ? 'text-white' : 'text-black'
                    } transition-colors duration-300`}>Location</h4>
                    <p className={`text-sm ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    } transition-colors duration-300`}>Jember, Indonesia</p>
                  </div>
                </div>
                <div className={`text-center text-sm ${
                  darkMode ? 'text-gray-500' : 'text-gray-500'
                } transition-colors duration-300`}>
                  <p>&copy; {new Date().getFullYear()} Farrasagogo. All rights reserved.</p>
                </div>
              </div>
            </footer>
      
            {/* Scroll to Top Button - Updated */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className={`fixed bottom-8 right-8 p-3 rounded-full shadow-lg transition-all duration-300 ${
                showScrollTop ? 'opacity-100' : 'opacity-0 pointer-events-none'
              } ${
                darkMode 
                  ? 'bg-white text-black hover:bg-gray-200' 
                  : 'bg-black text-white hover:bg-gray-800'
              }`}
            >
              <ArrowUp size={20} />
            </button>
      
            {/* Styles tag */}
            <style jsx>{`
              @keyframes float {
                from { transform: translateY(0); }
                to { transform: translateY(-100vh); }
              }
            `}</style>
          </div>
          
        );
      };
      
      export default Portfolio;  
            
