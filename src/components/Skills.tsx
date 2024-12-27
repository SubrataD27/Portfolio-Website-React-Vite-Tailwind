import React from 'react';
import GradientText from './shared/GradientText';
import TechIcon from './shared/TechIcon';
import { Code, Cloud, Database, Brain, Cpu } from './shared/icons';

const SkillCategory = ({ title, skills, icon: Icon }) => (
  <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover-lift">
    <div className="flex items-center mb-6">
      <Icon className="text-purple-500 mr-3" size={28} />
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <div className="space-y-4">
      {skills.map((skill, index) => (
        <div key={index} className="group">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <TechIcon name={skill.icon} className="text-gray-400 mr-2 group-hover:text-purple-500 transition-colors" />
              <span className="text-gray-300 group-hover:text-white transition-colors">{skill.name}</span>
            </div>
            <span className="text-gray-400">{skill.level}%</span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-purple-500 to-pink-500 h-full rounded-full transition-all duration-500 ease-out group-hover:scale-x-105"
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code,
      skills: [
        { name: 'Python', level: 90, icon: 'FileCode' },
        { name: 'Java', level: 85, icon: 'FileCode' },
        { name: 'C', level: 80, icon: 'FileCode' },
      ],
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      skills: [
        { name: 'AWS', level: 85, icon: 'AWS' },
        { name: 'Firebase', level: 80, icon: 'Firebase' },
        { name: 'Docker', level: 75, icon: 'Docker' },
      ],
    },
    {
      title: 'Databases',
      icon: Database,
      skills: [
        { name: 'MongoDB', level: 85, icon: 'Database' },
        { name: 'MySQL', level: 80, icon: 'Database' },
        { name: 'PostgreSQL', level: 75, icon: 'Database' },
      ],
    },
    {
      title: 'Frameworks',
      icon: Brain,
      skills: [
        { name: 'React', level: 85, icon: 'Code' },
        { name: 'Django', level: 80, icon: 'FileCode' },
        { name: 'Flask', level: 75, icon: 'FileCode' },
      ],
    },
    {
      title: 'ML & IoT',
      icon: Cpu,
      skills: [
        { name: 'TensorFlow', level: 85, icon: 'Brain' },
        { name: 'Raspberry Pi', level: 80, icon: 'RaspberryPi' },
        { name: 'Arduino', level: 75, icon: 'Cpu' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black pointer-events-none" />
      <div className="container mx-auto px-4 relative">
        <h2 className="text-4xl font-bold text-center mb-12">
          <GradientText>Technical Skills</GradientText>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;