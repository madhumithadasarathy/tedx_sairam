import { motion } from "framer-motion";

const images = [
  "/hero1.jpg",
  "/hero2.jpg",
  "/hero3.jpg",
  "/hero4.jpg",
  "/hero5.jpg",
];

const fragments = [
  "Someone practiced in silence for years.",
  "Someone failed loudly before succeeding quietly.",
  "Someone carried an idea no one believed in.",
  "Someone chose curiosity over comfort.",
  "Someone spoke even when their voice shook.",
  "Someone turned fear into fuel.",
  "Someone created without permission.",
];

export default function Home() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-5">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ y: "100vh" }}
              animate={{ y: 0 }}
              transition={{ delay: i * 0.15, duration: 1 }}
              className="bg-cover bg-center scale-[1.08] grayscale contrast-110 brightness-90"
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </div>

        <div className="absolute inset-0 bg-black/80" />
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-16 pt-48">
          <motion.h1
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="text-[clamp(2.6rem,6vw,5.2rem)] font-extrabold leading-[0.98]"
          >
            Not one passion.
            <br />
            <span className="text-red-600">Every single one.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, duration: 0.8 }}
            className="mt-8 max-w-xl text-white/70"
          >
            Arts · Sports · Education · Technology · Culture
            <br />
            Different worlds. One stage.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-12 flex gap-8"
          >
            <button className="px-10 py-3 bg-red-600 text-sm tracking-widest hover:bg-red-700">
              ENTER EXPERIENCE
            </button>
            <button className="px-10 py-3 border border-white/30 text-sm tracking-widest hover:bg-white/10">
              VIEW SPEAKERS
            </button>
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION 2 ================= */}
      <section className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 pointer-events-none">
          {fragments.map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 0.25, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="absolute top-1/2 left-1/2 text-white/40 text-sm md:text-base"
              style={{
                transform: `translate(${(i - 3) * 140}px, ${(i % 2 ? -1 : 1) * 140}px)`
              }}
            >
              {text}
            </motion.p>
          ))}
        </div>

        <div className="relative z-10 text-center px-8">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[clamp(2.4rem,5vw,4.5rem)] font-extrabold"
          >
            Not performers.
            <br />
            Not celebrities.
          </motion.h2>

          <p className="mt-6 text-white/70">
            Just people driven by something deeper.
          </p>
        </div>
      </section>

      {/* ================= SECTION 3 — FUTURISTIC ================= */}
      <section className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center">

        {/* TECH GRID */}
        <div
          className="
            absolute inset-0
            bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),
                linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)]
            bg-[size:90px_90px]
            opacity-20
          "
        />

        {/* GLOWS */}
        <div className="absolute w-[520px] h-[520px] bg-red-600/25 blur-[180px] rounded-full -top-40 -left-40" />
        <div className="absolute w-[480px] h-[480px] bg-orange-500/20 blur-[180px] rounded-full top-1/2 left-1/3" />
        <div className="absolute w-[420px] h-[420px] bg-cyan-400/20 blur-[180px] rounded-full bottom-0 right-0" />

        {/* KINETIC TEXT */}
        <div className="relative z-10 text-center px-8">
          {["CREATE", "MOVE", "QUESTION", "BUILD", "EXPRESS", "EVOLVE"].map(
            (word, i) => (
              <motion.h2
                key={word}
                initial={{ opacity: 0, y: 60, filter: "blur(12px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: i * 0.15, duration: 0.85 }}
                viewport={{ once: true }}
                whileHover={{
                  x: -8 + Math.random() * 16,
                  y: -5 + Math.random() * 10,
                }}
                className="
                  text-[clamp(3.2rem,8vw,6.2rem)]
                  font-black
                  leading-[0.95]
                  tracking-tight
                  cursor-default
                  bg-gradient-to-r
                  from-[#E62B1E]
                  via-[#ff7a18]
                  to-[#22d3ee]
                  bg-[length:300%_300%]
                  animate-gradient
                  text-transparent
                  bg-clip-text
                "
              >
                {word}
              </motion.h2>
            )
          )}

          {/* WAVE LINE */}
          <div className="mx-auto mt-14 h-[3px] w-44 overflow-hidden rounded-full bg-white/10">
            <motion.div
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
              className="h-full w-1/2 bg-gradient-to-r from-transparent via-red-500 to-transparent"
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            viewport={{ once: true }}
            className="mt-10 text-white/70 tracking-[0.35em] text-xs"
          >
            DIFFERENT ENERGIES · ONE PLATFORM
          </motion.p>
        </div>
      </section>
    </>
  );
}
