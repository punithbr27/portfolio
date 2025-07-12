import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    // This initializes the particles engine
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // This function is called when the particles are loaded
  }, []);

  // This is your original configuration, now in the correct format
  const particleOptions = {
    background: {
        color: {
            value: "var(--bg-color)", // Use your theme's background color
        },
    },
    fpsLimit: 120,
    interactivity: {
        events: {
            onClick: { enable: false },
            onHover: { enable: false },
            resize: true,
        },
    },
    particles: {
        color: { value: "#ffffff" },
        links: { enable: false },
        move: {
            direction: "none",
            enable: true,
            outModes: { default: "out" },
            random: true,
            speed: 0.5,
            straight: false,
        },
        number: {
            density: { enable: true, area: 800 },
            value: 80,
        },
        opacity: {
            value: 0.5,
            random: true,
        },
        shape: { type: "circle" },
        size: {
            value: 5,
            random: true
        },
    },
    detectRetina: true,
  };

  return (
    <Particles
      id="tsparticles" /* Don't confuse this with particles-js */
      init={particlesInit}
      loaded={particlesLoaded}
      options={particleOptions}
      style={{ position: 'fixed', zIndex: -1, top: 0, left: 0, width: '100%', height: '100%' }}
    />
  );
};

export default ParticleBackground;