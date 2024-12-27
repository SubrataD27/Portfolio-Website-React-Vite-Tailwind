import React from 'react';
import { ArrowDown, Code, Brain, Cloud, Database } from 'lucide-react';
import GradientText from './shared/GradientText';
import AnimatedSection from './shared/AnimatedSection';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_50%,#3B0764,transparent)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="slide-left" className="text-left space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              Hi, I'm{' '}
              <GradientText className="font-extrabold">
                Subrata Dhibar
              </GradientText>
            </h1>
            
            <AnimatedSection animation="fade" delay={300} className="space-y-4">
              <p className="text-xl md:text-2xl text-gray-300">
                Computer Science Student & Tech Enthusiast
              </p>
              <p className="text-lg text-gray-400">
                Passionate about creating innovative solutions through technology
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="fade" delay={600} className="flex flex-wrap gap-4">
              {[
                { icon: Code, text: 'Full Stack', color: 'purple' },
                { icon: Brain, text: 'Machine Learning', color: 'pink' },
                { icon: Cloud, text: 'Cloud Computing', color: 'blue' },
                { icon: Database, text: 'IoT', color: 'green' }
              ].map(({ icon: Icon, text, color }) => (
                <div key={text} 
                  className={`flex items-center space-x-2 bg-${color}-500/10 px-4 py-2 rounded-full 
                    hover:bg-${color}-500/20 transition-colors cursor-pointer`}
                >
                  <Icon size={20} className={`text-${color}-400`} />
                  <span className={`text-${color}-400`}>{text}</span>
                </div>
              ))}
            </AnimatedSection>

            <AnimatedSection animation="fade" delay={900} className="flex flex-wrap gap-4">
              <a href="#projects" 
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full 
                  hover:opacity-90 transition-all transform hover:scale-[1.02] hover-glow"
              >
                View Projects
              </a>
              <a href="#contact" 
                className="border border-purple-500 text-white px-8 py-3 rounded-full 
                  hover:bg-purple-500/10 transition-colors hover-lift"
              >
                Contact Me
              </a>
            </AnimatedSection>
          </AnimatedSection>

          <AnimatedSection animation="slide-right" className="relative">
            <div className="relative w-64 h-64 mx-auto lg:w-80 lg:h-80">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full 
                animate-pulse-glow blur-2xl opacity-30"
              />
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 
                border-purple-500/30 p-2 hover-lift hover-glow"
              >
                <img
                  src="https://i.imgur.com/GFLkn3s.jpg"
                  alt="Subrata Dhibar"
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/400x400.png?text=SD";
                  }}
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <ArrowDown className="text-gray-400 hover:text-white transition-colors cursor-pointer" size={24} />
      </div>
    </section>
  );
};

export default Hero;