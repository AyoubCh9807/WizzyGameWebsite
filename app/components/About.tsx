'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section
      className="relative flex items-center justify-center min-h-[80vh] overflow-hidden bg-black"
      id="about"
    >

      <motion.div
        className="absolute inset-0 bg-cover bg-center brightness-[0.35]"
        style={{
          backgroundImage: "url('/banner.png')", 
        }}
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 6, ease: 'easeOut' }}
      ></motion.div>


      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-red-500/30 rounded-full"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              repeat: Infinity,
              duration: 4 + Math.random() * 4,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>


      <div className="relative z-10 text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold mb-6 text-red-500 drop-shadow-[0_0_20px_rgba(239,68,68,0.6)]"
        >
          WIZZY
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Enter a neon-drenched underworld where logic bends, shadows whisper, and every
          move pulses with rhythm and danger. <br />
          Built for speed. Forged in style. Driven by chaos.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="px-8 py-3 text-lg font-semibold text-white bg-red-600/80 rounded-xl shadow-lg hover:bg-red-500 hover:shadow-red-500/40 transition-all duration-300 backdrop-blur-md"
        >
          Start Journey
        </motion.button>
      </div>


      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black pointer-events-none"></div>
    </section>
  );
}
