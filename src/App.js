import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ResumePage from "./pages/ResumePage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutme" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
    </div>
  );
}

export default App;
