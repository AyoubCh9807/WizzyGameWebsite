'use client';

import { motion, Variants } from 'framer-motion';

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 },
  },
};

const item: Variants = {
  hidden: { y: 30, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: ['easeOut'] }, // ✅ fix here
  },
};

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-[90vh] overflow-hidden">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.1)_0%,transparent_70%)]" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_0%,transparent_70%)] blur-3xl"
      />


      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-2 h-2 bg-red-500/40 rounded-full blur-sm animate-ping top-1/3 left-1/4" />
        <div className="absolute w-3 h-3 bg-red-600/30 rounded-full blur animate-pulse top-2/3 right-1/3" />
        <div className="absolute w-1 h-1 bg-red-400/60 rounded-full blur-sm animate-pulse bottom-1/4 left-1/2" />
      </div>


      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 space-y-8 px-4"
      >

        <motion.div variants={item}>
          <img
            src="/logo.png"
            alt="Wizzy Game Logo"
            className="mx-auto h-36 md:h-52 object-contain drop-shadow-[0_0_30px_rgba(239,68,68,0.8)] hover:scale-105 transition-transform duration-500"
          />
        </motion.div>


        <motion.p
          variants={item}
          className="text-2xl md:text-3xl font-light text-gray-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
        >
          <span className="text-red-500 font-semibold">Wizzy</span> - A dark journey through chaos and code.
        </motion.p>


        <motion.div variants={item}>
          <button className="relative px-10 py-4 text-lg font-semibold text-white bg-red-600/80 rounded-xl shadow-lg hover:bg-red-500 hover:shadow-red-500/50 transition-all duration-300 backdrop-blur-sm group">
            <span className="relative z-10">Coming Soon</span>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_80%)] rounded-xl" />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
