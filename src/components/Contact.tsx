import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import GradientText from './shared/GradientText';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:dhibarsubrata18@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}`;
  };

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/SubrataD27',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/subrata-dhibar',
      label: 'LinkedIn'
    },
    {
      icon: Twitter,
      href: 'https://twitter.com/subratadhibar17',
      label: 'Twitter'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black pointer-events-none" />
      <div className="container mx-auto px-4 relative">
        <h2 className="text-4xl font-bold text-center mb-12">
          <GradientText>Get In Touch</GradientText>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center group">
                  <Mail className="text-purple-500 mr-4 group-hover:scale-110 transition-transform" size={24} />
                  <div>
                    <p className="text-gray-400">Email</p>
                    <a href="mailto:dhibarsubrata18@gmail.com" className="text-white hover:text-purple-400 transition-colors">
                      dhibarsubrata18@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center group">
                  <Phone className="text-purple-500 mr-4 group-hover:scale-110 transition-transform" size={24} />
                  <div>
                    <p className="text-gray-400">Phone</p>
                    <a href="tel:+918116814546" className="text-white hover:text-purple-400 transition-colors">
                      +91 8116814546
                    </a>
                  </div>
                </div>
                <div className="flex items-center group">
                  <MapPin className="text-purple-500 mr-4 group-hover:scale-110 transition-transform" size={24} />
                  <div>
                    <p className="text-gray-400">Location</p>
                    <p className="text-white">GIET Gunupur, Odisha, India</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex space-x-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-purple-500 transform hover:scale-110 transition-all"
                    aria-label={link.label}
                  >
                    <link.icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-400 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-400 mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="Your message..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg hover:opacity-90 transition-all transform hover:scale-[1.02] flex items-center justify-center group"
                >
                  Send Message
                  <Send size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;