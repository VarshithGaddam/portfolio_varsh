# AI/ML Engineer Portfolio

A modern, interactive portfolio website built with React featuring a unique terminal-inspired design with glassmorphism effects.

## Features

- 🎨 Unique design with glassmorphism and gradient effects
- 💻 Interactive terminal interface
- 🚀 Smooth animations with Framer Motion
- 📱 Fully responsive design
- ⚡ Fast and lightweight
- 🎯 Project showcase with detailed modals
- 📊 Skills visualization with animated progress bars
- 📬 Contact form with social links

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Build for production:
```bash
npm run build
```

## Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.js`):
   - Update stats (ML Models, Projects, Accuracy)
   - Modify the subtitle text

2. **Terminal** (`src/components/Terminal.js`):
   - Edit the `commands` object to update your info
   - Customize about, skills, experience, education sections
   - Update GitHub and LinkedIn URLs

3. **Projects** (`src/components/Projects.js`):
   - Replace the `projects` array with your own projects
   - Update titles, descriptions, technologies, and metrics

4. **Skills** (`src/components/Skills.js`):
   - Modify `skillCategories` array with your skills
   - Adjust skill levels (0-100)

5. **Contact** (`src/components/Contact.js`):
   - Update `contactInfo` array with your social links
   - Customize email and other contact details

## Technologies Used

- React 18
- Framer Motion (animations)
- CSS3 (glassmorphism, gradients)
- JetBrains Mono & Inter fonts

## Project Structure

```
src/
├── components/
│   ├── Hero.js/css          # Landing page
│   ├── Terminal.js/css      # Interactive terminal
│   ├── Projects.js/css      # Project showcase
│   ├── Skills.js/css        # Skills visualization
│   ├── Contact.js/css       # Contact form
│   └── Navigation.js/css    # Side navigation
├── App.js                   # Main app component
├── App.css                  # Global styles
└── index.js                 # Entry point
```

## License

MIT License - feel free to use this for your own portfolio!
