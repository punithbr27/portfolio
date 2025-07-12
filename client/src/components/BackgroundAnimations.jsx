import React, { useEffect, useRef } from 'react';
import soulImg from '../assets/images/soul.png';
import spacecraftImg from '../assets/images/space_craft.png';

const BackgroundAnimations = () => {
  const soulRef = useRef(null);
  const spacecraftRef = useRef(null);

  useEffect(() => {
    const soul = soulRef.current;
    const spacecraft = spacecraftRef.current;

    const roam = (element) => {
      if (!element) return;
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const newY = Math.random() * (viewportHeight - element.offsetHeight);
      const newX = Math.random() * (viewportWidth - element.offsetWidth);
      element.style.top = `${newY}px`;
      element.style.left = `${newX}px`;
    };

    const soulInterval = setInterval(() => roam(soul), 5000);
    const spacecraftInterval = setInterval(() => roam(spacecraft), 8000);
    
    roam(soul);
    roam(spacecraft);

    return () => {
      clearInterval(soulInterval);
      clearInterval(spacecraftInterval);
    };
  }, []);

  return (
    <>
      <img src={soulImg} alt="Haunting Soul" id="haunting-soul" ref={soulRef} />
      <img src={spacecraftImg} alt="Roaming Spacecraft" id="roaming-spacecraft" ref={spacecraftRef} />
    </>
  );
};

export default BackgroundAnimations;