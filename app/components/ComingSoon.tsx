'use client';

import { motion } from 'framer-motion';

export default function ComingSoon() {
  return (
    <section className="relative py-24 bg-linear-to-b from-black via-gray-950 to-black text-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.15)_0%,transparent_70%)]" />

      <div className="relative max-w-3xl mx-auto z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-6 text-red-500 drop-shadow-[0_0_20px_rgba(239,68,68,0.5)]"
        >
          Coming Soon
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-gray-300 text-lg md:text-xl mb-10 leading-relaxed"
        >
          Wizzy is still forging its destiny.  
          Join the journey early - be the first to know when the gates open.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="px-8 py-4 text-lg font-semibold text-white bg-red-600/80 rounded-xl shadow-lg hover:bg-red-500 hover:shadow-red-500/40 transition-all duration-300 backdrop-blur-md"
        >
          Follow Development
        </motion.button>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-gray-500 mt-6 text-sm"
        >
          (Stay tuned for the official release)
        </motion.p>
      </div>
    </section>
  );
}
