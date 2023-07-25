import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import About from "./components/About";
import Locations from "./components/Locations";
import Careers from "./components/Careers";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <header className="header">
        <Navbar />
      </header>
      <Routes>
        <Route exact path="/Home" element={<Home />} />
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
