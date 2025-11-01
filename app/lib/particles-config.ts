import type { ISourceOptions } from "@tsparticles/engine";

export const particlesConfig: ISourceOptions = {
  fpsLimit: 60,
  background: {
    color: { value: "transparent" },
  },
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        width: 800, // ✅ replaced "area" → "width" (new property name)
      },
    },
    color: { value: "#ef4444" },
    shape: { type: "circle" },
    opacity: { value: { min: 0.1, max: 0.5 } },
    size: { value: { min: 1, max: 3 } },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      outModes: { default: "out" },
    },
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: "repulse" },
      onClick: { enable: true, mode: "push" },
      resize: { enable: true }, // must be object
    },
    modes: {
      repulse: { distance: 100 },
      push: { quantity: 4 },
    },
  },
  detectRetina: true,
};
