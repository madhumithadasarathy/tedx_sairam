import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const navItems = [
  { name: "Experience", path: "/" },
  { name: "Speakers", path: "/speakers" },
  { name: "Program", path: "/program" },
  { name: "Attend", path: "/attend" }
];

export default function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.container}>

        {/* Logo */}
        <div style={styles.logo}>
          TED<span style={{ color: "#e10600" }}>x</span>
          <span style={styles.college}>SSEC</span>
        </div>

        {/* Navigation */}
        <nav style={styles.nav}>
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              end
              style={styles.link}
            >
              {({ isActive }) => (
                <div style={{ position: "relative" }}>
                  <span style={{
                    color: isActive ? "#ffffff" : "#888"
                  }}>
                    {item.name}
                  </span>

                  {isActive && (
                    <motion.div
                      layoutId="underline"
                      style={styles.underline}
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
