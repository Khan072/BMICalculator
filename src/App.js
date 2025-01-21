import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Feedback from "./Components/Feedback";
import Footer from "./Components/Footer"; // Import Footer component

const App = () => {
  return (
    <Router>
      <Header />
      <div style={{ minHeight: "calc(100vh - 100px)" }}>
        {/* Ensures main content occupies space above the footer */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feedback" element={<Feedback />} />
          {/* Add other routes here */}
        </Routes>
      </div>
      <Footer /> {/* Footer included here */}
    </Router>
  );
};

export default App;
