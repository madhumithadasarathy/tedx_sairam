import { motion } from "framer-motion";

const images = [
  "/hero1.jpg",
  "/hero2.jpg",
  "/hero3.jpg",
  "/hero4.jpg",
  "/hero5.jpg",
];

export default function Home() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* BACKGROUND STRIPS */}
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

      {/* CINEMATIC OVERLAYS */}
      <div className="absolute inset-0 bg-black/80" />
      <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />

      {/* HERO CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-16 pt-48">

        {/* HEADLINE */}
        <motion.h1
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-[clamp(2.6rem,6vw,5.2rem)] font-extrabold leading-[0.98] max-w-5xl"
        >
          Not one passion.
          <br />
          <span className="text-red-600">Every single one.</span>
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25, duration: 0.8, ease: "easeOut" }}
          className="mt-8 max-w-xl text-white/70 text-base md:text-lg"
        >
          Arts · Sports · Education · Technology · Culture
          <br />
          Different worlds. One stage.
        </motion.p>

        {/* CTA BUTTONS */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
          className="mt-12 flex gap-8"
        >
          <button className="px-10 py-3 bg-red-600 text-sm tracking-widest hover:bg-red-700 transition">
            ENTER EXPERIENCE
          </button>

          <button className="px-10 py-3 border border-white/30 text-sm tracking-widest hover:bg-white/10 transition">
            VIEW SPEAKERS
          </button>
        </motion.div>

      </div>
    </section>
  );
}
