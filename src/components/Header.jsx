import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "../index.css";

const navItems = [
  { name: "Experience", path: "/" },
  { name: "Speakers", path: "/speakers" },
  { name: "Program", path: "/program" },
  { name: "Attend", path: "/attend", cta: true }
];

export default function Header() {
  return (
    <header className="hud-header">

      {/* Top waveform */}
      <div className="hud-wave" />

      <div className="hud-shell">

        {/* Logo */}
        <div className="hud-logo">
          TED<span>x</span>
          <small>SSEC</small>
        </div>

        {/* Navigation */}
        <nav className="hud-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              end
              className={({ isActive }) =>
                `hud-link 
                ${item.cta ? "hud-cta" : ""} 
                ${isActive ? "active" : ""}`
              }
            >
              {({ isActive }) => (
                <div style={{ position: "relative" }}>
                  <span>{item.name}</span>

                  {isActive && (
                    <motion.div
                      layoutId="hud-active"
                      className="hud-active-glow"
                    />
                  )}
                </div>
              )}
            </NavLink>
          ))}
        </nav>

      </div>
    </header>
  );
}
