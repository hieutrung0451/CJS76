import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import About from "./About";
import SamplePost from "./SamplePost";
import Contact from "./Contact";
import Navigation from "./Navigation";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/post" element={<SamplePost />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
