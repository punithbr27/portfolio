import React, { useState, useEffect } from 'react';
import developerImg from '../assets/images/developer.jpg';

// Animation Data
const GREETINGS = [ "Hello !","ನಮಸ್ಕಾರ","नमस्ते", "నమస్కారం","வணக்கம்","നമസ്‌തേ "];
const TYPING_TEXTS = ["ML Enthusiast ", "Linux User ", "Plan B Guy", "Reverse Engineer", "Loves solving problems, but gets bored while solving"]; // Shortened for better look

const Hero = () => {
  // --- STATE MANAGEMENT ---
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [typingIndex, setTypingIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // --- ANIMATION EFFECTS ---

  // Effect for changing greetings
  useEffect(() => {
    const greetingTimer = setInterval(() => {
      setGreetingIndex(prevIndex => (prevIndex + 1) % GREETINGS.length);
    }, 3000);
    return () => clearInterval(greetingTimer);
  }, []);

  // Effect for the typing animation
  useEffect(() => {
    const handleTyping = () => {
      const currentWord = TYPING_TEXTS[typingIndex];
      
      if (isDeleting) {
        // Deleting text
        setText(currentWord.substring(0, text.length - 1));
      } else {
        // Typing text
        setText(currentWord.substring(0, text.length + 1));
      }
      
      // Check if word is fully typed or deleted
      if (!isDeleting && text === currentWord) {
        // Pause at the end of the word
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        // Move to next word
        setTypingIndex((prevIndex) => (prevIndex + 1) % TYPING_TEXTS.length);
      }
    };

    const typingSpeed = isDeleting ? 50 : 150;
    const typingTimer = setTimeout(handleTyping, typingSpeed);
    
    return () => clearTimeout(typingTimer);
  }, [text, isDeleting, typingIndex]);


  return (
      <section className="hero main container">
          <div className="hero__text-content">
              <p className="hero__greeting">{GREETINGS[greetingIndex]}</p>
              <h1 className="hero__name">I'm Punith</h1>
              <h2 className="hero__subtitle"> Engineering today, innovating tomorrow.</h2>
              <p className="hero__typing-text">
                  <span id="typing-effect">{text}</span>
                  <span className="typing-cursor"></span> {/* CSS will handle the cursor */}
              </p>
              <p> </p>
              <a href="#projects" className="button">
                  View My Work <i className="fa-solid fa-arrow-right"></i>
              </a>
          </div>
          <div className="hero__image-content">
              <div className="hero__image-wrapper">
                  <img src={developerImg} alt="Illustration of the developer" />
              </div>
          </div>
      </section>
  );
};

export default Hero;