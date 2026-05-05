import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Nav from './components/Nav/Nav.jsx';
import Home from './pages/Home.jsx';
import Lobby from './pages/Lobby.jsx';
import Booking from './pages/Booking.jsx';
import MyAppointments from './pages/Dashboard/MyAppointments.jsx';
import NoMatch from './pages/NoMatch.jsx';
import Auth from './utils/auth.js';
import TermsPolicies from './pages/TermsPolicies.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import Confirmation from './components/Confirmation/Confirmation.jsx';

function PrivateRoute({ children }) {
  return Auth.loggedIn() ? children : <Navigate to="/login" replace />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Lobby />} />
        <Route path="/terms" element={<TermsPolicies />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />

        <Route
          path="/appointments"
          element={
            <PrivateRoute>
              <MyAppointments />
            </PrivateRoute>
          }
        />

        <Route
          path="/book"
          element={
            <PrivateRoute>
              <Booking />
            </PrivateRoute>
          }
        />

        <Route
          path="/confirmation/:id"
          element={
            <PrivateRoute>
              <Confirmation
                onReset={() => {
                  window.location.href = '/book';
                }}
              />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
}

// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import Nav from './components/Nav/Nav.jsx';
// import Home from './pages/Home.jsx';
// import Lobby from './pages/Lobby.jsx';
// import Booking from './pages/Booking.jsx';
// import MyAppointments from './pages/Dashboard/MyAppointments.jsx';
// import NoMatch from './pages/NoMatch.jsx';
// import Auth from './utils/auth.js';
// import TermsPolicies from './pages/TermsPolicies.jsx';
// import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
// import Confirmation from './components/Confirmation/Confirmation.jsx';

// function PrivateRoute({ children }) {
//   return Auth.loggedIn() ? children : <Navigate to="/login" replace />;
// }

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Nav />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Lobby />} />
//         <Route path="/terms" element={<TermsPolicies />} />
//         <Route path="/privacy" element={<PrivacyPolicy />} />
//         <Route path="/appointments" element={<MyAppointments />} />
//         <Route
//           path="/book"
//           element={
//             <PrivateRoute>
//               <Booking />
//             </PrivateRoute>
//           }
//         />

//         {/* ✅ :id param matches navigate('/confirmation/abc123') from Booking */}
//         <Route
//           path="/confirmation/:id"
//           element={
//             <PrivateRoute>
//               {/* ✅ onReset uses window.location — navigate() is not available here in App scope */}
//               <Confirmation onReset={() => { window.location.href = '/book'; }} />
//             </PrivateRoute>
//           }
//         />

//         <Route
//           path="/appointments"
//           element={
//             <PrivateRoute>
//               <MyAppointments />
//             </PrivateRoute>
//           }
//         />

//         {/* ✅ Single catch-all at the bottom */}
//         <Route path="*" element={<NoMatch />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }
