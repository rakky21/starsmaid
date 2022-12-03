import React from "react";

import 'react-calendar/dist/Calendar.css';

import Nav from "./components/Nav/Nav";
import Schedule from "./components/Schedule/Schedule";
import Footer from "./components/Footer/Footer";  

function App() {
  return (
    <main className="section_app">
      <Nav />
      <Schedule/>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}

export default App;
