import React from 'react';
import { motion } from 'framer-motion';
import './Timeline.css';

const Timeline = () => {
  const timelineData = [
    {
      year: '2020',
      title: 'Started Diploma',
      category: 'Education',
      description: 'Began Diploma in Mechanical Engineering at Government Polytechnic College, Kothagudem',
      icon: '🎓',
      color: '#7877c6'
    },
    {
      year: '2021',
      title: 'Programming Journey',
      category: 'Learning',
      description: 'Started learning Python and discovered passion for AI/ML',
      icon: '💻',
      color: '#48dbfb'
    },
    {
      year: '2022',
      title: 'First Certifications',
      category: 'Certifications',
      description: 'Completed Python with Machine Learning course on Coursera',
      icon: '📜',
      color: '#26de81'
    },
    {
      year: '2023',
      title: 'Diploma Excellence',
      category: 'Achievement',
      description: 'Graduated with 9.83 CGPA in Mechanical Engineering',
      icon: '🏆',
      color: '#fed330'
    },
    {
      year: '2023',
      title: 'B.Tech Begins',
      category: 'Education',
      description: 'Started B.Tech in AI & Machine Learning at Vignan Institute',
      icon: '🎯',
      color: '#7877c6'
    },
    {
      year: '2024',
      title: 'LeetCode Mastery',
      category: 'Achievement',
      description: 'Solved 380+ problems with 365+ day consistency streak',
      icon: '🔥',
      color: '#ff6b6b'
    },
    {
      year: '2024',
      title: 'Hackathon Winner',
      category: 'Achievement',
      description: 'Won hackathon with AI-driven environmental cleanup system',
      icon: '🥇',
      color: '#fed330'
    },
    {
      year: '2024',
      title: 'Major Projects',
      category: 'Projects',
      description: 'Built FINCEPTOR, SpeechScore AI, and Satellite Change Detection systems',
      icon: '🚀',
      color: '#a55eea'
    },
    {
      year: '2024',
      title: 'Advanced Certifications',
      category: 'Certifications',
      description: 'Completed Generative AI, Computer Vision, and Software Engineering certifications',
      icon: '🎖️',
      color: '#26de81'
    },
    {
      year: '2025',
      title: 'Current Focus',
      category: 'Present',
      description: 'Building AI solutions and seeking opportunities to make impact',
      icon: '⚡',
      color: '#48dbfb'
    }
  ];

  return (
    <motion.div 
      className="timeline-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.h2 
        className="timeline-title"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        My Journey
      </motion.h2>

      <div className="timeline-content">
        <div className="timeline-line" />
        
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <motion.div 
              className="timeline-card"
              whileHover={{ y: -10, scale: 1.02 }}
              style={{ '--accent-color': item.color }}
            >
              <div className="timeline-card-header">
                <span className="timeline-icon">{item.icon}</span>
                <div className="timeline-meta">
                  <span className="timeline-year">{item.year}</span>
                  <span className="timeline-category">{item.category}</span>
                </div>
              </div>
              
              <h3 className="timeline-card-title">{item.title}</h3>
              <p className="timeline-card-description">{item.description}</p>
              
              <div className="timeline-card-accent" />
            </motion.div>

            <motion.div 
              className="timeline-dot"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3 }}
              style={{ background: item.color }}
            >
              <div className="dot-ring" style={{ borderColor: item.color }} />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Timeline;
