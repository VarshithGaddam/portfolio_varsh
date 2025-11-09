import React from 'react';
import { motion } from 'framer-motion';
import './Education.css';

const Education = () => {
  const education = [
    {
      degree: 'B.Tech in Artificial Intelligence and Machine Learning',
      institution: 'Vignan Institute of Technology and Science',
      period: '2023 - 2026',
      cgpa: '8.3',
      icon: '🎓',
      color: '#7877c6'
    },
    {
      degree: 'Diploma in Mechanical Engineering',
      institution: 'Government Polytechnic College, Kothagudem',
      period: '2020 - 2023',
      cgpa: '9.83',
      icon: '📚',
      color: '#48dbfb'
    }
  ];

  const certifications = [
    { name: 'Python with Machine Learning', provider: 'Coursera', icon: '🐍' },
    { name: 'Career Essentials in Generative AI', provider: 'Microsoft & LinkedIn', icon: '🤖' },
    { name: 'Python Certification', provider: 'Moratuwa University, Sri Lanka', icon: '💻' },
    { name: 'Software Engineering Job Simulation', provider: 'JPMorgan via Forage', icon: '💼' },
    { name: 'Image Processing and Computer Vision', provider: 'Coursera', icon: '👁️' }
  ];

  const membership = {
    title: 'Associate Member',
    organization: 'ACM Student Chapter',
    icon: '🏛️'
  };

  return (
    <motion.div 
      className="education-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.h2 
        className="education-title"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Education & Certifications
      </motion.h2>

      <div className="education-content">
        <div className="education-section">
          <h3 className="section-heading">Academic Background</h3>
          <div className="education-cards">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="education-card"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                style={{ '--accent-color': edu.color }}
              >
                <div className="edu-icon">{edu.icon}</div>
                <div className="edu-content">
                  <h4 className="edu-degree">{edu.degree}</h4>
                  <p className="edu-institution">{edu.institution}</p>
                  <div className="edu-footer">
                    <span className="edu-period">{edu.period}</span>
                    <span className="edu-cgpa">CGPA: {edu.cgpa}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="certifications-section">
          <h3 className="section-heading">Certifications</h3>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="cert-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="cert-icon">{cert.icon}</span>
                <div className="cert-info">
                  <h5 className="cert-name">{cert.name}</h5>
                  <p className="cert-provider">{cert.provider}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="membership-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <div className="membership-card">
            <span className="membership-icon">{membership.icon}</span>
            <div className="membership-info">
              <h4>{membership.title}</h4>
              <p>{membership.organization}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Education;
