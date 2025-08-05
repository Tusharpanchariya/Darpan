import React from 'react';
import { Monitor, FileText, Target, Users, Zap, Palette } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies',
      features: ['React/Next.js Development', 'Responsive Design', 'Performance Optimization', 'E-commerce Solutions'],
      color: 'from-cyan-500 to-blue-600'
    },
    {
      icon: FileText,
      title: 'Content Writing',
      description: 'Engaging content that drives traffic and converts visitors',
      features: ['Blog Posts & Articles', 'Website Copy', 'Email Campaigns', 'Technical Documentation'],
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Target,
      title: 'Digital Marketing',
      description: 'Data-driven strategies to grow your online presence',
      features: ['SEO Strategy', 'PPC Campaigns', 'Analytics & Reporting', 'Conversion Optimization'],
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Users,
      title: 'Social Media Management',
      description: 'Building engaged communities across all platforms',
      features: ['Content Planning', 'Community Management', 'Social Advertising', 'Influencer Partnerships'],
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: Zap,
      title: 'Growth Hacking',
      description: 'Innovative strategies for rapid business growth',
      features: ['User Acquisition', 'Retention Strategies', 'A/B Testing', 'Product Marketing'],
      color: 'from-yellow-500 to-orange-600'
    },
    {
      icon: Palette,
      title: 'Brand Strategy',
      description: 'Creating memorable brands that stand out',
      features: ['Brand Identity', 'Visual Design', 'Brand Guidelines', 'Market Positioning'],
      color: 'from-indigo-500 to-purple-600'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Services
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive digital solutions to help your business thrive in the modern landscape
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <span aria-hidden="true">
                  <service.icon className="w-8 h-8 text-white" />
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2" aria-label={`${service.title} features`}>
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="mt-6 text-cyan-400 hover:text-cyan-300 font-medium transition-colors group-hover:underline">
                Learn More →
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
