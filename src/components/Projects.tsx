import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ title, description, technologies, githubUrl, image }) => (
  <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 transition-transform hover:-translate-y-2">
    <div className="h-48 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 text-sm bg-purple-500/20 text-purple-400 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-purple-400 hover:text-purple-300"
      >
        <Github size={20} className="mr-2" />
        View Source
      </a>
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: 'Wearable Fall Detection System',
      description: 'IoT-based system for detecting and alerting accidental falls using sensors and machine learning.',
      technologies: ['Python', 'TensorFlow', 'Raspberry Pi', 'MQTT'],
      githubUrl: 'https://github.com/SubrataD27/SIH_2024-PSID-1580.git',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80'
    },
    {
      title: 'Crop Recommendation System',
      description: 'Smart system for farmers to identify optimal crops based on environmental parameters.',
      technologies: ['Python', 'scikit-learn', 'Streamlit'],
      githubUrl: 'https://github.com/SubrataD27/CROP-DOCTOR.git',
      image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80'
    },
    {
      title: 'Health Care System',
      description: 'AI-powered system for disease prediction and treatment recommendations.',
      technologies: ['Flask', 'TensorFlow', 'HTML/CSS'],
      githubUrl: 'https://github.com/SubrataD27/Health-Care-Centre-diease-prediction-medical-recommendation-system.git',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80'
    },
    {
      title: 'AI-based CHATBOTZZ',
      description: 'Intelligent chatbot assistant powered by OpenAI and COHERE.',
      technologies: ['Flask', 'Python', 'TensorFlow', 'Keras'],
      githubUrl: 'https://github.com/SubrataD27',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;