import React, { useState, useEffect } from 'react';
import { LockKeyhole, ChevronLeft, ChevronRight, ArrowUp, ExternalLink, Mail, Github, Linkedin, Moon, Sun, Send } from 'lucide-react';
import fotoFarras from './assets/Farras.jpg';
import logoFarras from './assets/logo_farras.png';


const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [darkMode, setDarkMode] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState({});

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
      id: 0,
      title: 'Subur',
      category: 'mobile',
      tech: ['Kotlin', 'Firestore', 'Retrofit'],
      github: 'https://github.com/Farrasagogo/subur',
      demo: 'https://youtube.com/shorts/8Nr7qW2GpMg?feature=share',
      images: [
        '/subur/21.png',
        '/subur/22.png'
      ],
      description: 'Mobile application for detecting and managing rice crop diseases.'
    },
    {
      id: 1,
      title: 'Udaraku',
      category: 'mobile',
      tech: ['Flutter', 'Firebase', 'Firestore'],
      github: 'https://github.com/Farrasagogo/subur',
      demo: 'https://youtube.com/shorts/8Nr7qW2GpMg?feature=share',
      images: [
        '/udaraku/wiring.png',
        '/udaraku/udaraku.png',
        '/udaraku/udaraku3.png',
        '/udaraku/udaraku4.png',
        '/udaraku/diagram.png',
        '/udaraku/udaraku1.png'
      ],
      description: 'Mobile application and IoT system for detecting air quality and providing health tips.'
    },
    {
      id: 2,
      title: 'PakarTani',
      category: 'web',
      tech: ['PHP', 'Laravel', 'RestApi','MySQL;'],
      github: 'https://github.com/Farrasagogo/PakarTani',
      demo: 'https://youtu.be/jygfmQo3dY0',
      images: [
       '/pakartani/pakar1.png',
        '/pakartani/pakar2.png',
        '/pakartani/pakar3.png',
        '/pakartani/pakar4.png',
        '/pakartani/pakar5.png',
        '/pakartani/pakar6.png'
      ],
      description: 'A comprehensive community agriculture website that provides tips and tricks for farming, along with information about agricultural product prices.'
    },
    {
      id: 3,
      title: 'Gradian',
      category: 'web',
      tech: ['PHP', 'Laravel', 'Firebase'],
      github: 'https://github.com/Farrasagogo/gradian',
      images: [
        '/gradian/Penyinaran.png',
        '/gradian/Penyiraman.png',
        '/gradian/PenyiramanObat.png',
        '/gradian/Login.png',
        '/gradian/Profil.png'
      ],
      description: 'An IoT-based web platform for monitoring grape crops, including humidity, temperature, and light levels. The system also features automation for irrigation, customizable watering schedules, and a manual control option, ensuring optimal growth conditions for the grapes.'
    },
    {
      id: 4,
      title: 'Crop Recomendation',
      category: 'aI',
      tech: ['Python', 'TensorFlow', 'OpenCV'],
      github: 'https://github.com/username/visionary-ai',
      demo: 'https://youtu.be/448gBbJid0g',
      images: [
        '/croprecommendation/croprec1.png',
        '/croprecommendation/croprec2.png',
      ],
      description: 'A crop recommendation system that utilizes a Random Forest Classifier to predict the most suitable crops based on soil and climatic factors such as nitrogen levels, pH, temperature, and rainfall.'
    },
    {
      id: 5,
      title: 'GradianIoT',
      category: 'ioT',
      tech: ['C++', 'ESP8266', 'Firebase',],
      github: 'https://github.com/Farrasagogo/GraDianIOT',
      images: [
        '/gradianiot/gradianiot (3).jpeg',
        '/gradianiot/gradianiot.png',
        '/gradianiot/gradianiot (2).jpeg',
        '/gradianiot/gradianiot.jpeg'

      ],
      description: 'An IoT configuration for monitoring grape crops, including humidity, temperature, and light levels. The system also includes automated irrigation, customizable watering schedules, and a manual control option to ensure optimal growth conditions for the grapes.'
    },
    {
      id: 6,
      title: 'ESTTANI',
      category: 'web',
      tech: ['PHP Native', 'Javascript', 'MySQL',],
      github: 'https://github.com/username/ecommerce-platform',
      images: [
        '/EST/EST1.png',
        '/EST/EST3.png',
        '/EST/EST4.png',
        '/EST/EST5.png',
        '/EST/EST6.jpg',
        '/EST/EST7.jpg',
        '/EST/EST8.jpg',
        '/EST/EST9.jpg',
        '/EST/EST10.jpg',
        '/EST/EST11.jpg',
        '/EST/EST12.jpg'
      ],
      description: 'An agriculture community forum combined with an e-commerce platform for agricultural tools and supplies.'
    },
  ];
  
  

  const skills = {
    programming: [
      'JavaScript', 'Laravel', 'Python', 'PHP', 'C#', 'Dart', 'Kotlin', 'C++'
    ],
    frameworks_libs: [
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

  const nextImage = (projectId) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % projects.find(p => p.id === projectId).images.length
    }));
  };

  const prevImage = (projectId) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + projects.find(p => p.id === projectId).images.length) % projects.find(p => p.id === projectId).images.length
    }));
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

        <div className="grid grid-cols-1 gap-16">
          {projects
            .filter((project) => activeFilter === 'all' || project.category === activeFilter)
            .map((project) => (
              <div 
                key={project.id}
                className={`group ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} rounded-xl p-6 hover:shadow-xl transition-all duration-300`}
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-2/3 relative">
                    <div className="relative aspect-video rounded-lg overflow-hidden">
                      <img
                        src={project.images[currentImageIndex[project.id] || 0]}
                        alt={`${project.title} screenshot ${currentImageIndex[project.id] || 0 + 1}`}
                        className="w-full h-full object-cover"
                      />
                      
                      {project.images.length > 1 && (
                        <>
                          <button 
                            onClick={(e) => {
                              e.preventDefault();
                              prevImage(project.id);
                            }}
                            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white"
                          >
                            <ChevronLeft size={24} />
                          </button>
                          <button 
                            onClick={(e) => {
                              e.preventDefault();
                              nextImage(project.id);
                            }}
                            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white"
                          >
                            <ChevronRight size={24} />
                          </button>
                        </>
                      )}
                      
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                        {project.images.map((_, idx) => (
                          <div
                            key={idx}
                            className={`w-2 h-2 rounded-full ${
                              (currentImageIndex[project.id] || 0) === idx 
                                ? 'bg-white' 
                                : 'bg-white/50'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-1/3 flex flex-col justify-between">
                    <div>
                      <h3 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-black'}`}>
                        {project.title}
                      </h3>
                      <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech) => (
                          <span 
                            key={tech} 
                            className={`text-sm px-3 py-1 rounded-full ${
                              darkMode 
                                ? 'bg-gray-700 text-gray-200' 
                                : 'bg-gray-200 text-gray-700'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      {project.demo ? (
                        <a 
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-300"
                        >
                          Live Demo <ExternalLink size={16} className="ml-2" />
                        </a>
                      ) : (
                        <button 
                          disabled
                          className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-gray-400 dark:bg-gray-600 text-gray-300 dark:text-gray-400 rounded-lg cursor-not-allowed"
                        >
                          Demo Unavailable <LockKeyhole size={16} className="ml-2" />
                        </button>
                      )}
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
                      >
                        GitHub <Github size={16} className="ml-2" />
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
      
            {/* Style tag */}
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
      
      
            
