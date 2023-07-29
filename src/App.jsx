import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import About from "./components/About";
import Locations from "./components/Locations";
import Careers from "./components/Careers";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  const navItems = [
    { link: "/", label: "Home" },
    { link: "/About", label: "About" },
    { link: "/Locations", label: "Location" },
    { link: "/Careers", label: "Careers" },
  ];
  return (
    <BrowserRouter>
      <header className="header">
        <Navbar items={navItems} />
      </header>
      <Routes>
        <Route exact path="*" element={<Home />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Locations" element={<Locations />} />
        <Route exact path="/Careers" element={<Careers />} />
      </Routes>

      <footer className="footer">
        <Footer />
      </footer>
    </BrowserRouter>
  );
}

export default App;
