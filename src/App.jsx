import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import Contact from "./pages/contact/contact";
import Certificates from "./pages/certificates/certificates";
import Projects from "./pages/projects/projects";
import Nav from "./nav/nav";
import Experience from "./pages/experience/experience";
import { DarkModeProvider } from "./darkmode/DarkModeContext";
import PageNotFound from "./pages/notFound/pagenotfound";
import { useEffect, useState } from "react";
import Spinner from "./spinner/spinner";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    // Jeśli strona już się załadowała (np. z cache)
    if (document.readyState === "complete") {
      setIsLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (isLoading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  return (
    <DarkModeProvider>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="certificates" element={<Certificates />} />
          <Route path="projects" element={<Projects />} />
          <Route path="experience" element={<Experience />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;
