import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './Terminal.css';

const Terminal = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'output', text: 'Welcome to Varshith Gaddam\'s Portfolio Terminal v1.0.0' },
    { type: 'output', text: 'Type "help" for available commands' },
    { type: 'output', text: '' }
  ]);
  const terminalRef = useRef(null);

  const commands = {
    help: () => [
      'Available commands:',
      '  about      - Learn about me',
      '  skills     - View technical skills',
      '  experience - Achievements & certifications',
      '  education  - Educational background',
      '  github     - GitHub profile',
      '  linkedin   - LinkedIn profile',
      '  email      - Email address',
      '  phone      - Phone number',
      '  clear      - Clear terminal',
      ''
    ],
    about: () => [
      'Varshith Gaddam',
      'AI & ML Engineer',
      '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
      '• Building AI-powered applications for real-world challenges',
      '• Strong foundation in ML, DL, and data-driven solutions',
      '• 380+ LeetCode problems solved with 365+ day streak',
      '• Hackathon Winner - AI-driven environmental cleanup',
      '• Passionate about leveraging AI for measurable impact',
      ''
    ],
    skills: () => [
      'Technical Stack:',
      '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
      'Languages:    Python, C, Java',
      'ML/DL:        PyTorch, TensorFlow, Scikit-learn, OpenCV',
      'Data:         NumPy, Pandas, Transformers, LLMs',
      'Web:          FastAPI, Flask, React, TailwindCSS',
      'Database:     PostgreSQL, Supabase, Pinecone',
      'AI Tools:     OpenAI API, Google Gemini, LangChain',
      'Cloud:        GCP',
      'DSA:          Arrays, Trees, Graphs, Dynamic Programming',
      ''
    ],
    experience: () => [
      'Achievements & Experience:',
      '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
      '🏆 Hackathon Winner',
      '  • Developed AI-driven environmental cleanup system',
      '',
      '💻 LeetCode Champion',
      '  • 380+ problems solved',
      '  • 365+ day consistency streak',
      '',
      '🎓 Certifications',
      '  • Python with Machine Learning - Coursera',
      '  • Generative AI - Microsoft & LinkedIn',
      '  • Software Engineering - JPMorgan (Forage)',
      '  • Image Processing & CV - Coursera',
      ''
    ],
    education: () => [
      'Education:',
      '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
      'B.Tech in AI & Machine Learning',
      'Vignan Institute of Technology and Science',
      '2023-2026 | CGPA: 8.3',
      '',
      'Diploma in Mechanical Engineering',
      'Government Polytechnic College, Kothagudem',
      '2020-2023 | CGPA: 9.83',
      '',
      'Memberships:',
      '• Associate Member - ACM Student Chapter',
      ''
    ],
    github: () => ['Opening GitHub: https://github.com/varshithgaddam', ''],
    linkedin: () => ['Opening LinkedIn: https://linkedin.com/in/varshithgaddam', ''],
    email: () => ['Email: varshithg2004@gmail.com', ''],
    phone: () => ['Phone: +91 9502492139', ''],
    clear: () => null
  };

  const handleCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    if (trimmedCmd === 'clear') {
      setHistory([]);
      return;
    }

    const newHistory = [...history, { type: 'input', text: `$ ${cmd}` }];

    if (commands[trimmedCmd]) {
      const output = commands[trimmedCmd]();
      if (output) {
        output.forEach(line => {
          newHistory.push({ type: 'output', text: line });
        });
      }
    } else if (trimmedCmd === '') {
      newHistory.push({ type: 'output', text: '' });
    } else {
      newHistory.push({ 
        type: 'error', 
        text: `Command not found: ${cmd}. Type "help" for available commands.` 
      });
      newHistory.push({ type: 'output', text: '' });
    }

    setHistory(newHistory);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input);
      setInput('');
    }
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <motion.div 
      className="terminal-container"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-buttons">
            <span className="btn close"></span>
            <span className="btn minimize"></span>
            <span className="btn maximize"></span>
          </div>
          <div className="terminal-title">portfolio@terminal:~</div>
        </div>
        
        <div className="terminal-body" ref={terminalRef}>
          {history.map((item, index) => (
            <div key={index} className={`terminal-line ${item.type}`}>
              {item.text}
            </div>
          ))}
          
          <form onSubmit={handleSubmit} className="terminal-input-line">
            <span className="prompt">$</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="terminal-input"
              autoFocus
              spellCheck="false"
            />
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Terminal;
