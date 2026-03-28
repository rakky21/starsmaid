import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Nav from './components/Nav/Nav.jsx';
import Home from './pages/Home.jsx';
import Lobby from './pages/Lobby.jsx';
import Booking from './pages/Booking.jsx';
import NoMatch from './pages/NoMatch.jsx';
import Auth from './utils/auth.js';

// Guard: redirect to /login if not authenticated
function PrivateRoute({ children }) {
  return Auth.loggedIn() ? children : <Navigate to="/login" replace />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/"       element={<Home />} />
        <Route path="/login"  element={<Lobby />} />
        <Route
          path="/book"
          element={
            <PrivateRoute>
              <Booking />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
}
