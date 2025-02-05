import React from "react";
import Home from "./pages/Home/Home";
import AboutMe from "./pages/AboutMe/AboutMe";
import Contact from "./pages/Contact/Contact";
import SkillsCertification from "./pages/SkillsCertification/SkillsCertification";
import Project from "./pages/Project/Project";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/aboutme" element={<AboutMe />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/project" element={<Project />} />
        <Route exact path="/skillscertification" element={<SkillsCertification />} />

        <>Not found</>
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </Router>
  )
  
}

export default App;
