import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import Contact from "./pages/contact/contact";
import Certificates from "./pages/certificates/certificates";
import Projects from "./pages/projects/projects";
import Nav from "./nav/nav";
import Experience from "./pages/experience/experience";
import { DarkModeProvider } from "./darkmode/DarkModeContext";
import PageNotFound from "./pages/notFound/pagenotfound";
import { AnimatePresence, motion } from "framer-motion";

function AppContent() {
  const location = useLocation();
  const pageAnimation = {
    initial: {opacity: 0},
    animate: {opacity: 1},
    exit: {opacity:0},
    transition: {duration:0.3}
  }

  return (<>
       <Nav />
        <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Homepage />} />
          <Route path="contact" element={
            <motion.div {...pageAnimation}>
              <Contact />
            </motion.div>
            } />
          <Route path="certificates" element={
                   <motion.div {...pageAnimation}>
              
                     <Certificates />
                   </motion.div>
            } />
          <Route path="projects" element={
                   <motion.div {...pageAnimation}>
              
                     <Projects />
                   </motion.div>
            } />
          <Route path="experience" element={
                   <motion.div {...pageAnimation}>
              
                     <Experience />
                   </motion.div>
            } />
          <Route path="*" element={
                   <motion.div {...pageAnimation}>
              
                     <PageNotFound />
                   </motion.div>
            } />
        </Routes>
        </AnimatePresence>
  </>)


}

function App() {
  return (
    <DarkModeProvider>
      <BrowserRouter>
      <AppContent/>
      </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;
