import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import Contact from "./pages/contact/contact";
import Certificates from "./pages/certificates/certificates";
import Projects from "./pages/projects/projects";
import Nav from "./nav/nav";
import Experience from "./pages/experience/experience";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="contact" element={<Contact />} />
        <Route path="certificates" element={<Certificates />} />
        <Route path="projects" element={<Projects />} />
        <Route path="experience" element={<Experience />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
