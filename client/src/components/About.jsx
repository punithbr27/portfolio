import React, { useState } from 'react';

const educationData = [
  {
    id: 1,
    institution: 'PES University (RR Campus), Bengaluru',
    date: '2024 - Present',
    details: 'B.Tech in Computer Science and Engg',
    cgpa: '7.83',
    achievements: 'Qualified for CIE Ignite Stage 2',
  },
  {
    id: 2,
    institution: 'Sri Jayachamarajendra [Govt.] Polytechnic',
    date: '2021 - 2024',
    details: 'Diploma in Computer Science',
    cgpa: '9.83',
    achievements: ['Cricket Tournament 🏏 | 2× Runners-up @ SJP.', '    DCET Rank : 24']

  },
  {
    id: 3,
    institution: 'St. Lawrence High School, Bengaluru',
    date: '2009 - 2021',
    details: 'SSLC (State board)',
    score: '94.88% (COVID 19 Batch)',
    achievements: '',
  },
];

const About = () => {
  const [flippedCard, setFlippedCard] = useState(null);

  const handleCardClick = (id) => {
    if (flippedCard) return;
    setFlippedCard(id);

    setTimeout(() => {
      setFlippedCard(null);
    }, 3000);
  };

  return (
    <section id="about" className="section container">
      <h2 className="section__title">About Me</h2>

      <div className="about__container">
        {/* Personal description */}
        <div className="about__description">
          <p>
            I'm a lazy learner but love exploring how AI works and using it in creative ways. I enjoy
            learning, experimenting with new tools, and diving into anything that challenges how I think.
          </p>
          <p>
            I have a habit of taking things apart just to see how they work — reverse engineering is
            something I genuinely enjoy. Whether it’s breaking down systems or ideas, I’m always chasing
            that deeper understanding.
          </p>
          <p>
            I've worked on various AI and ML projects, learning by experimenting, building useful tools, and
            exploring new ideas.
          </p>
        </div>

        {/* Desktop timeline view */}
        <div className="about__education">
          {educationData.map((edu) => (
            <div key={edu.id} className="education__card">
              <div className="education-card__inner">
                <div className="education-card__front">
                  <h3>{edu.institution}</h3>
                  <span className="education__date">{edu.date}</span>
                  <p className="education__details">{edu.details}</p>
                </div>
                <div className="education-card__back">
                  <p>
                    <strong>{edu.cgpa ? 'CGPA:' : 'Score:'}</strong> {edu.cgpa || edu.score}
                  </p>
                  {edu.achievements && (
                    <p>
                      <strong>Achievements:</strong> {edu.achievements}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile flippable card view */}
        <div className="mobile-education-container">
          {educationData.map((edu) => (
            <div
              key={`mobile-edu-${edu.id}`}
              className="mobile-edu-card"
              onClick={() => handleCardClick(edu.id)}
            >
              <div className={`mobile-edu-flipper ${flippedCard === edu.id ? 'is-flipped' : ''}`}>
                <div className="mobile-edu-front">
                  <h4>{edu.institution}</h4>
                  <span className="mobile-edu-date">{edu.date}</span>
                  <p>{edu.details}</p>
                </div>
                <div className="mobile-edu-back">
                  <p>
                    <strong>{edu.cgpa ? 'CGPA:' : 'Score:'}</strong> {edu.cgpa || edu.score}
                  </p>
                  {edu.achievements && (
                    <p>
                      <strong>Achievements:</strong> {edu.achievements}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
