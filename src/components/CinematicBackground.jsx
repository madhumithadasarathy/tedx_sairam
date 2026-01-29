import { motion } from "framer-motion";

export default function CinematicBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* BASE GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-[#120404]" />

      {/* MOVING COLOR WASH */}
      <motion.div
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="
          absolute inset-0
          bg-gradient-to-r
          from-[#E62B1E]/15
          via-[#ff7a18]/10
          to-[#22d3ee]/10
          bg-[length:300%_300%]
        "
      />

      {/* SPOTLIGHT BLOBS */}
      <motion.div
        animate={{ x: [0, 80, 0], y: [0, -60, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[700px] h-[700px] bg-red-600/20 rounded-full blur-[200px] -top-64 -left-64"
      />

      <motion.div
        animate={{ x: [0, -120, 0], y: [0, 100, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[600px] h-[600px] bg-orange-500/20 rounded-full blur-[200px] top-1/4 left-1/3"
      />

      <motion.div
        animate={{ x: [0, 100, 0], y: [0, -80, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[600px] h-[600px] bg-cyan-400/15 rounded-full blur-[220px] bottom-0 right-0"
      />

      {/* DIAGONAL LIGHT BEAMS */}
      <motion.div
        animate={{ opacity: [0.05, 0.12, 0.05] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="
          absolute inset-0
          bg-[linear-gradient(115deg,
            transparent 35%,
            rgba(255,255,255,0.08) 45%,
            transparent 55%)]
          blur-2xl
        "
      />

      {/* LENS FLARE SWEEP */}
      <motion.div
        animate={{ x: ["-60%", "160%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="
          absolute top-1/3 left-0
          w-[60%] h-[2px]
          bg-gradient-to-r
          from-transparent
          via-white/30
          to-transparent
          blur-md
        "
      />

      {/* PARTICLES */}
      {[...Array(18)].map((_, i) => (
        <motion.span
          key={i}
          animate={{ y: ["0%", "-120%"] }}
          transition={{
            duration: 20 + i * 2,
            repeat: Infinity,
            delay: i * 1.2,
            ease: "linear",
          }}
          className="absolute bottom-0 w-[2px] h-[2px] bg-white/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
}
