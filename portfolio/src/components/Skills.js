import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming',
      icon: '💻',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'C', level: 85 },
        { name: 'Java', level: 80 },
        { name: 'SQL', level: 85 }
      ]
    },
    {
      title: 'AI & Machine Learning',
      icon: '🧠',
      skills: [
        { name: 'PyTorch', level: 90 },
        { name: 'TensorFlow', level: 88 },
        { name: 'Scikit-learn', level: 92 },
        { name: 'OpenCV', level: 87 }
      ]
    },
    {
      title: 'Data Science',
      icon: '📊',
      skills: [
        { name: 'NumPy', level: 93 },
        { name: 'Pandas', level: 92 },
        { name: 'Transformers', level: 85 },
        { name: 'LLMs', level: 88 }
      ]
    },
    {
      title: 'Web Development',
      icon: '🌐',
      skills: [
        { name: 'FastAPI', level: 87 },
        { name: 'Flask', level: 85 },
        { name: 'React', level: 82 },
        { name: 'TailwindCSS', level: 80 }
      ]
    },
    {
      title: 'Databases & AI Tools',
      icon: '🗄️',
      skills: [
        { name: 'PostgreSQL', level: 85 },
        { name: 'Supabase', level: 83 },
        { name: 'Pinecone', level: 87 },
        { name: 'LangChain', level: 85 }
      ]
    },
    {
      title: 'DSA & Problem Solving',
      icon: '🎯',
      skills: [
        { name: 'LeetCode (380+)', level: 95 },
        { name: 'Dynamic Programming', level: 88 },
        { name: 'Graphs & Trees', level: 90 },
        { name: 'Algorithms', level: 92 }
      ]
    }
  ];

  return (
    <motion.div 
      className="skills-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.h2 
        className="skills-title"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Technical Skills
      </motion.h2>

      <div className="skills-grid">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={catIndex}
            className="skill-category"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: catIndex * 0.1 }}
          >
            <div className="category-header">
              <span className="category-icon">{category.icon}</span>
              <h3 className="category-title">{category.title}</h3>
            </div>
            
            <div className="skills-list">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  className="skill-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: catIndex * 0.1 + skillIndex * 0.05 }}
                >
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-progress"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: catIndex * 0.1 + skillIndex * 0.05 + 0.3 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
