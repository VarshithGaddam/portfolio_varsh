import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Math Professor Agent - Agentic RAG',
      category: 'Agentic AI / RAG',
      description: 'Intelligent mathematical tutoring system with multi-layer AI guardrails, intelligent routing, and human-in-the-loop feedback using LangGraph',
      tech: ['LangGraph', 'Claude 3', 'GPT-4', 'Qdrant', 'DSPy', 'FastAPI', 'React'],
      metrics: { questions: '515 JEE', accuracy: 'High' },
      color: '#a55eea',
      features: [
        'Multi-Layer AI Guardrails with Claude 3 Sonnet for input/output filtering',
        'Intelligent routing between knowledge base and web search',
        '515 JEE Advanced questions in Qdrant vector database',
        'Web search via Tavily API using Model Context Protocol',
        'Human-in-the-loop feedback with DSPy optimization',
        'Step-by-step solutions with LaTeX rendering',
        'JEE Bench evaluation system'
      ]
    },
    {
      id: 2,
      title: 'Change Detection in Satellite Imagery',
      category: 'Computer Vision',
      description: 'AI/ML system to automatically identify man-made developments in satellite imagery using U-Net deep learning model',
      tech: ['U-Net', 'PyTorch', 'OpenCV', 'Flask'],
      metrics: { recall: 'High', type: 'Real-time' },
      color: '#7877c6',
      features: [
        'U-Net based deep learning model for high recall detection',
        'Real-time predictions with visual overlays',
        'Pixel-level change maps generation',
        'Text summaries categorizing changes',
        'Web application for image upload',
        'Effective urban growth monitoring'
      ]
    },
    {
      id: 3,
      title: 'FINCEPTOR',
      category: 'Gen AI / NLP',
      description: 'AI-powered financial intelligence platform transforming SEC filings into actionable insights for Gen Z investors',
      tech: ['RAG', 'Pinecone', 'Gemini', 'React'],
      metrics: { focus: 'Gen Z', type: 'Real-time' },
      color: '#48dbfb',
      features: [
        'Interactive web interface for financial analysis',
        'Persona-driven investment guidance',
        'Real-time chat with AI financial advisor',
        'RAG pipeline using Pinecone vector DB',
        'SEC filings analysis with LLM APIs',
        'Special handling for large-cap companies',
        'Personalized recommendations for young investors'
      ]
    },
    {
      id: 4,
      title: 'SpeechScore AI',
      category: 'Audio Analysis',
      description: 'Full-stack audio analysis platform for vocal evaluation with pitch, tempo, jitter, shimmer analysis and comparative scoring',
      tech: ['FastAPI', 'React', 'PostgreSQL', 'Supabase'],
      metrics: { features: '6+', auth: 'Secure' },
      color: '#ff6b6b',
      features: [
        'Upload or direct audio recording',
        'Pitch, tempo, jitter, shimmer extraction',
        'Melody similarity analysis',
        'Dynamic interface with real-time recording',
        'Secure user authentication',
        'Comparative analysis module',
        'Performance scoring against reference tracks'
      ]
    }
  ];

  return (
    <motion.div 
      className="projects-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.h2 
        className="projects-title"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Featured Projects
      </motion.h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            onClick={() => setSelectedProject(project)}
            style={{ '--accent-color': project.color }}
          >
            <div className="project-header">
              <span className="project-category">{project.category}</span>
              <div className="project-icon" style={{ background: project.color }}>◆</div>
            </div>
            
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            
            <div className="project-tech">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
            
            <div className="project-metrics">
              {Object.entries(project.metrics).map(([key, value]) => (
                <div key={key} className="metric">
                  <span className="metric-label">{key}</span>
                  <span className="metric-value">{value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="project-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="project-modal"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{ '--accent-color': selectedProject.color }}
            >
              <button className="modal-close" onClick={() => setSelectedProject(null)}>×</button>
              <h2>{selectedProject.title}</h2>
              <p className="modal-category">{selectedProject.category}</p>
              <p className="modal-description">{selectedProject.description}</p>
              <div className="modal-details">
                {selectedProject.features && (
                  <>
                    <h4>Key Features:</h4>
                    <ul className="modal-features">
                      {selectedProject.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </>
                )}
                <h4>Technologies Used:</h4>
                <div className="modal-tech">
                  {selectedProject.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <h4>Performance Metrics:</h4>
                <div className="modal-metrics">
                  {Object.entries(selectedProject.metrics).map(([key, value]) => (
                    <div key={key} className="metric-item">
                      <strong>{key}:</strong> {value}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Projects;
