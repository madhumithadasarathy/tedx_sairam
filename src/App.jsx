import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Header from "./components/Header";
import PageTransition from "./components/PageTransition";

import Experience from "./pages/Experience";
import Speakers from "./pages/Speakers";
import Program from "./pages/Program";
import Attend from "./pages/Attend";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Experience />
            </PageTransition>
          }
        />

        <Route
          path="/speakers"
          element={
            <PageTransition>
              <Speakers />
            </PageTransition>
          }
        />

        <Route
          path="/program"
          element={
            <PageTransition>
              <Program />
            </PageTransition>
          }
        />

        <Route
          path="/attend"
          element={
            <PageTransition>
              <Attend />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}
