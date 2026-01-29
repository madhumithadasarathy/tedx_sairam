import { motion } from "framer-motion";
import VerifiedIcon from "@mui/icons-material/Verified";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import SchoolIcon from "@mui/icons-material/School";
import TimelineIcon from "@mui/icons-material/Timeline";

export default function AboutSairam() {
  const chips = [
    { label: "NAAC A+ Accredited", icon: <VerifiedIcon fontSize="small" /> },
    { label: "NBA Accredited (All Depts.)", icon: <WorkspacePremiumIcon fontSize="small" /> },
    { label: "ISO 9001:2015", icon: <MilitaryTechIcon fontSize="small" /> },
    { label: "Affiliated to Anna University", icon: <SchoolIcon fontSize="small" /> },
    { label: "AICTE Approved", icon: <VerifiedIcon fontSize="small" /> },
  ];

  const glance = [
    { k: "Founded", v: "1995" },
    { k: "Campus", v: "300+ Acres" },
    { k: "Location", v: "Chennai, TN" },
    { k: "Programs", v: "UG • PG • MBA" },
  ];

  const timeline = [
    {
      year: "1995",
      title: "Institution Established",
      body:
        "Founded by MJF. Ln. Leo Muthu under Sapthagiri Educational Trust — a non-profit institution built on vision and values.",
    },
    {
      year: "1997",
      title: "Management Education",
      body:
        "Launch of Sri Sairam Institute of Management expanding professional education.",
    },
    {
      year: "2000–2010",
      title: "Campus Expansion",
      body:
        "Advanced laboratories, digital libraries, auditoriums, hostels and sports complexes across 300+ acres.",
    },
    {
      year: "Recent Years",
      title: "Accreditations & Rankings",
      body:
        "NAAC A+, NBA across departments, ISO certification and national recognition.",
    },
    {
      year: "Community Impact",
      title: "Beyond Academics",
      body:
        "Strong social initiatives including healthcare, blind academy and outreach.",
    },
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden text-white py-20 sm:py-24">
      {/* background */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-[1.05]"
        style={{ backgroundImage: "url(/sairam_main.jpg)" }}
      />

      {/* overlays */}
      <div className="absolute inset-0 bg-black/75" />
      <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-transparent to-black/85" />

      {/* content */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-7xl mx-auto px-5 sm:px-10"
      >
        {/* chips */}
        <div className="flex flex-wrap gap-2 mb-8">
          {chips.map((c) => (
            <span
              key={c.label}
              className="
                inline-flex items-center gap-2
                rounded-full px-3 py-1
                text-[11px]
                border border-white/20
                bg-white/[0.07]
                backdrop-blur-xl
                text-white/85
              "
            >
              {c.icon}
              {c.label}
            </span>
          ))}
        </div>

        {/* layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-start">
          {/* LEFT */}
          <div className="lg:col-span-2">
            <p className="text-[10px] tracking-[0.4em] text-white/55">
              HOST INSTITUTION
            </p>

            <h2 className="mt-3 text-[clamp(2rem,6vw,3.4rem)] font-extrabold leading-[1]">
              Sri Sairam
              <br />
              <span className="text-red-600">Engineering College</span>
            </h2>

            <p className="mt-4 text-white/80 text-[13px] leading-relaxed max-w-xl">
              Established in 1995, Sri Sairam Engineering College stands as a
              center of academic excellence, innovation and technological
              advancement.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3 max-w-md">
              {glance.map((g) => (
                <div
                  key={g.k}
                  className="rounded-xl border border-white/15 bg-white/[0.06] backdrop-blur-xl px-3 py-2.5"
                >
                  <div className="text-[9px] tracking-widest text-white/55">
                    {g.k}
                  </div>
                  <div className="text-sm font-semibold">{g.v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-3 mt-10 lg:mt-0">
            <div className="flex items-center gap-2 mb-4">
              <TimelineIcon fontSize="small" />
              <h4 className="tracking-widest text-xs uppercase">
                Institutional Journey
              </h4>
            </div>

            <ol className="relative border-l border-white/20 pl-5">
              {timeline.map((t, i) => (
                <motion.li
                  key={t.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ delay: i * 0.06, duration: 0.45 }}
                  className="mb-6"
                >
                  <span className="absolute -left-[6px] mt-1 h-2.5 w-2.5 rounded-full bg-red-600" />

                  <div className="flex flex-wrap items-baseline gap-2">
                    <span className="text-[10px] tracking-widest text-red-500">
                      {t.year}
                    </span>
                    <h5 className="text-sm font-semibold">{t.title}</h5>
                  </div>

                  <p className="mt-1.5 text-white/70 text-[13px] leading-relaxed">
                    {t.body}
                  </p>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
