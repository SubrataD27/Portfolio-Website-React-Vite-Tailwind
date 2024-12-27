import React from 'react';
import { Award, Star, Trophy } from 'lucide-react';

const AchievementCard = ({ icon: Icon, title, description }) => (
  <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 transition-transform hover:-translate-y-2">
    <Icon className="text-purple-500 mb-4" size={32} />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: 'SIH 2024 Participant',
      description: 'Currently participating in Smart India Hackathon 2024 with an innovative IoT-based project for accident detection.'
    },
    {
      icon: Star,
      title: 'Multiple Innovative Projects',
      description: 'Successfully built and deployed various projects combining hardware and software solutions.'
    },
    {
      icon: Award,
      title: 'Technical Certifications',
      description: 'Achieved certifications in Cloud Computing, Machine Learning, and IoT technologies from leading platforms.'
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Achievements
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <AchievementCard key={index} {...achievement} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;