import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState(0);

  const titles = [
    "Web Developer",
    "Content Writer",
    "Digital Marketer",
    "Social Media Expert",
    "Brand Strategist",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/tusharpanchariya',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/tusharpanchariya',
      label: 'LinkedIn',
    },
    {
      icon: Twitter,
      href: 'https://twitter.com/tusharpanchariya',
      label: 'Twitter',
    },
    {
      icon: Mail,
      href: 'mailto:tushar@example.com',
      label: 'Email',
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(0,212,255,0.1),_transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(139,92,246,0.1),_transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(0,255,136,0.1),_transparent_50%)]"></div>
      </div>

      {/* Floating Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Tushar Sharma
            </h1>
            <div className="h-16 flex items-center justify-center">
              <h2 className="text-2xl md:text-3xl text-gray-300 font-light">
                I'm a{' '}
                <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text font-medium">
                  {titles[currentTitle]}
                </span>
              </h2>
            </div>
          </div>

          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transforming ideas into digital experiences through code, content, and creative strategy.
            I build brands that connect, engage, and convert.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="#portfolio"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
            >
              Let's Connect
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-6 mb-16">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800/50 hover:bg-gray-700 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                aria-label={label}
              >
                <Icon className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors" />
              </a>
            ))}
          </div>

          {/* Scroll Down */}
          <button
            onClick={scrollToAbout}
            className="animate-bounce text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            aria-label="Scroll to About"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
