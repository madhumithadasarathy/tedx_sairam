import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "../index.css";

const navItems = [
  { name: "Experience", path: "/" },
  { name: "Speakers", path: "/speakers" },
  { name: "Program", path: "/program" },
  { name: "Attend", path: "/attend" }
];

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">

        {/* Logo */}
        <div className="logo">
          TED<span>x</span>
          <small>SSEC</small>
        </div>

        {/* Navigation */}
        <nav className="nav">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              end
              className="nav-link"
            >
              {({ isActive }) => (
                <div style={{ position: "relative" }}>
                  {item.name}

                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="nav-underline"
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
