"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";
import { particlesConfig } from "./lib/particles-config";

import Hero from "./components/Hero";
import About from "./components/About";
import Characters from "./components/Characters";
import Footer from "./components/Footer";
import ComingSoon from "./components/ComingSoon";
import Changelogs from "./components/Changelogs";

export default function Home() {
  const [init, setInit] = useState(false);

  // initialize ONCE
  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return <div className="text-center text-white py-20">Loading...</div>;

  return (
    <div className="relative overflow-hidden">
      {/* Particle Background */}
      <div className="fixed inset-0 z-0">
        <Particles id="tsparticles" options={particlesConfig} />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Characters />
        <Changelogs/>
        <ComingSoon />
        <Footer />
      </div>
    </div>
  );
}
