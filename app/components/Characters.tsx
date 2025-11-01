"use client";

import { motion } from "framer-motion";

const characters = [
  {
    name: "Astera",
    img: "/astrea.png",
    description:
      "The fearless heroine of Wizzy - bold, sharp-witted, and unafraid to face darkness with a savage grin.",
  },
  {
    name: "Victor",
    img: "/victor.png",
    description:
      "The game's main villain. Charming and seemingly innocent, yet driven by arrogance and cold ambition.",
  },
  {
    name: "Raskhul",
    img: "/raskhul.png",
    description:
      "Victor's loyal yet hesitant ally. A doubtful accomplice who hides guilt behind a calm smile.",
  },
  {
    name: "Sylra",
    img: "/sylra.png",
    description:
      "A mysterious girl born from the shadows of the forest, whispering secrets to the trees she commands.",
  },
  {
    name: "Grief",
    img: "/grief.png",
    description:
      "A massive, eerie bear that prowls through nightmares - feared for his silent rage and haunting eyes.",
  },
  {
    name: "Megamox",
    img: "/megamox.png",
    description:
      "A rogue experiment gone wrong, twisted by unstable energy but powerful beyond imagination.",
  },
  {
    name: "Nightcoil",
    img: "/nightcoil.png",
    description:
      "A sleek, venomous serpent cloaked in deep violet scales, gliding through shadows with hypnotic grace.",
  },
];

export default function Characters() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-red-500"
        >
          Meet the Cast
        </motion.h2>
        <p className="text-gray-300 mt-2">
          Discover the heroes and villains of Wizzy.
        </p>
      </div>


      <div className="overflow-hidden relative py-2">
        <div className="scroll-wrapper flex w-max animate-scroll gap-12 px-6">
          {[...characters, ...characters].map((char, i) => (
            <div
              key={`${char.name}-${i}`}
              className="group relative min-w-[250px] h-[350px] perspective-[1000px]"
            >
              <div className="relative w-full h-full transition-transform duration-700 transform-3d group-hover:transform-[rotateY(180deg)]">

                <div className="absolute inset-0 bg-black/40 border border-red-700/40 rounded-2xl p-6 flex flex-col items-center justify-center backface-hidden">
                  <img
                    src={char.img}
                    alt={char.name}
                    className="w-40 h-40 object-contain mb-4 drop-shadow-[0_0_20px_rgba(239,68,68,0.5)]"
                  />
                  <h3 className="text-2xl font-bold text-red-400">{char.name}</h3>
                </div>


                <div className="absolute inset-0 bg-black/70 border border-red-700/40 rounded-2xl p-6 flex flex-col justify-center items-center text-center transform-[rotateY(180deg)] backface-hidden">
                  <p className="text-gray-300 text-sm">{char.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pointer-events-none absolute top-0 left-0 h-full w-32 bg-linear-to-r from-black via-black/60 to-transparent"></div>
        <div className="pointer-events-none absolute top-0 right-0 h-full w-32 bg-linear-to-l from-black via-black/60 to-transparent"></div>
      </div>

      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 15s linear infinite;
        }
      `}</style>
    </section>
  );
}
