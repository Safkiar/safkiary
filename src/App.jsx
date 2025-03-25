import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage";
import Contact from "./pages/contact";
import Certificates from "./pages/certificates";
import Projects from "./pages/projects/projects";
import Nav from "./nav/nav";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="contact" element={<Contact />} />
        <Route path="certificates" element={<Certificates />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
