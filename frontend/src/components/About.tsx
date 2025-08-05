import React from 'react';
import { Code, PenTool, TrendingUp, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
  { number: '50+', label: 'Projects Completed' },
  { number: '5+', label: 'Years Experience' },
  { number: '30+', label: 'Happy Clients' },
  { number: '99%', label: 'Success Rate' },
];

const skills = [
  { name: 'React/Next.js', level: 95, color: 'from-cyan-400 to-blue-500' },
  { name: 'Content Strategy', level: 90, color: 'from-green-400 to-emerald-500' },
  { name: 'Digital Marketing', level: 88, color: 'from-purple-400 to-pink-500' },
  { name: 'Brand Design', level: 85, color: 'from-orange-400 to-red-500' },
  { name: 'Social Media', level: 92, color: 'from-yellow-400 to-orange-500' },
  { name: 'SEO/Analytics', level: 87, color: 'from-indigo-400 to-purple-500' },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-950 relative overflow-hidden z-10">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mt-6">
            A passionate digital creative with expertise spanning development, content, marketing, and branding.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left Column */}
          <div className="space-y-8">
            {[{
              icon: <Code className="w-6 h-6 text-white" />,
              title: 'Development Expertise',
              desc: 'Building responsive, performant web applications using modern technologies like React, TypeScript, and Node.js.',
              color: 'from-cyan-500 to-blue-600'
            }, {
              icon: <PenTool className="w-6 h-6 text-white" />,
              title: 'Content Creation',
              desc: 'Crafting compelling narratives and engaging content that drives audience engagement and conversions.',
              color: 'from-green-500 to-emerald-600'
            }, {
              icon: <TrendingUp className="w-6 h-6 text-white" />,
              title: 'Digital Marketing',
              desc: 'Developing data-driven marketing strategies that maximize ROI and accelerate business growth.',
              color: 'from-purple-500 to-pink-600'
            }, {
              icon: <Users className="w-6 h-6 text-white" />,
              title: 'Brand Strategy',
              desc: 'Creating cohesive brand identities that resonate with target audiences and build lasting connections.',
              color: 'from-orange-500 to-red-600'
            }].map((item, i) => (
              <motion.div
                key={i}
                className="flex items-start space-x-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
              >
                <div className={`p-3 rounded-lg bg-gradient-to-br ${item.color}`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.1 } }
              }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 bg-gray-800/40 rounded-xl border border-gray-700 hover:shadow-lg hover:scale-105 transition-all duration-300"
                  variants={{
                    hidden: { opacity: 0, scale: 0.95 },
                    visible: { opacity: 1, scale: 1 }
                  }}
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-1">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Skills */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">Core Skills</h3>
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-gray-400 text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.2, delay: index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
