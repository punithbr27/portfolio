import React, { useState } from 'react';

// Import project images
import smartAttendanceImg from '../assets/images/project-smart-attendance.png';
import blindAssistImg from '../assets/images/project-blind-assistance.png';
import portfolioImg from '../assets/images/protfolio.png';
import copdImg from '../assets/images/copd.png';
import sunImg from '../assets/images/sun.png';

const projectData = [
    { id: '1', img: smartAttendanceImg, title: 'Smart Attendance', desc: 'An automated attendance system using Python and OpenCV.', link: 'https://github.com/punithbr27/Smart-attendance-managment-system-using-Face-recognition' },
    { id: '2', img: blindAssistImg, title: 'Blind Assistance', desc: 'Real-time object detection with text-to-speech.', link: 'https://github.com/punithbr27/blind-assistant' },
    { id: '3', img: portfolioImg, title: 'Portfolio', desc: 'This interactive portfolio, designed and built with React.', link: 'https://github.com/punithbr27/portfolio' },
    { id: '4', img: copdImg, title: 'COPD Detection', desc: 'An AI model to detect COPD from audio recordings.', link: 'https://github.com/punithbr27/COPD-Audio-Progression' }
];

const Projects = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [pausedRotator, setPausedRotator] = useState(null);

  return (
    <section id="projects" className="section container">
      <h2 className="section__title">Projects</h2>
      
      {/* The main container now only has the dynamic class, not the event handlers */}
      <div className={`solar-system-container ${isExpanded ? 'is-expanded' : ''}`}>
        
        {/* === THIS IS THE FIX === */}
        {/* The hover events are now ONLY on the sun div itself */}
        <div 
          className="sun"
          onMouseEnter={() => setIsExpanded(true)}
          onMouseLeave={() => setIsExpanded(false)}
        >
            <img src={sunImg} alt="My Skills" className="sun__image" /> 
             <div className="skills-content">
                <h3>My Skills</h3>
                <div className="skills-grid">
                    <ul className="skills-list"><li>Python</li><li>C</li><li>C++</li></ul>
                    <ul className="skills-list"><li>OpenCV</li><li>TensorFlow</li><li>Scikit-learn</li></ul>
                    <ul className="skills-list"><li>Linux</li><li>Docker</li><li>Git & GitHub</li></ul>
                </div>
            </div>
        </div>
        
        {projectData.map(proj => (
            <div key={proj.id} className="orbit" id={`orbit-${proj.id}`}>
                {/* The rotator now handles the hover for pausing planets */}
                <div 
                  className={`rotator ${pausedRotator === proj.id ? 'is-paused' : ''}`}
                  onMouseEnter={() => setPausedRotator(proj.id)}
                  onMouseLeave={() => setPausedRotator(null)}
                >
                    <div className="planet" id={`planet-${proj.id}`}>
                        <img src={proj.img} className="planet__image" alt={proj.title} />
                        <div className="project-info">
                            <div className="project-info-header">
                                <h4>{proj.title}</h4>
                                <a href={proj.link} target="_blank" rel="noopener noreferrer" className="project-info__link"><i className="fa-brands fa-github"></i></a>
                            </div>
                            <p>{proj.desc}</p>
                        </div>
                    </div>
                </div>
            </div>
        ))}
      </div>

      {/* === 2. MOBILE-ONLY SIMPLE CARD LIST === */}
      <div className="mobile-projects-container">
        {projectData.map(proj => (
          <div key={`mobile-${proj.id}`} className="mobile-project-card">
            <div className="mobile-card__image-container">
                <img src={proj.img} alt={proj.title} className="mobile-card__image" />
            </div>
            <div className="mobile-card__content">
                <div className="mobile-card__text">
                    <h4>{proj.title}</h4>
                    <p>{proj.desc}</p>
                </div>
                <div className="mobile-card__actions">
                    <a href={proj.link} target="_blank" rel="noopener noreferrer" className="mobile-card__icon-link">
                       <i className="fa-brands fa-github"></i>
                    </a>
                </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Projects;