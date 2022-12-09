import React from "react";

import "react-calendar/dist/Calendar.css";

import Specials from "./components/Specials/Specials";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Schedule from "./components/Schedule/Schedule";

function App() {
  return (
    <main className="section_app">
      <Nav />
      <About />
      <Specials />
      <Schedule />
      <footer>
        <Footer />
      </footer>
    </main>
  );
}

export default App;
