import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home.js";
import About from "./pages/About.js";
import NoMatch from "./pages/NoMatch.js";
import Booking from "./pages/Booking.js";
import Lobby from "./pages/Lobby.js";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/starsmaid" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/lobby" element={<Lobby />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};

export default App;
