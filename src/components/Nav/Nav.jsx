import { Link, useNavigate, useLocation } from 'react-router-dom';
import Auth from '../../utils/auth.js';
import styles from './Nav.module.css';

export default function Nav() {
  const navigate = useNavigate();
  const location = useLocation();
  const loggedIn = Auth.loggedIn();
  const initials = loggedIn ? Auth.getInitials() : null;

  const handleLogout = () => {
    Auth.logout();
    navigate('/');
  };

  const scrollTo = (id) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 150);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const isActive = (path) => location.pathname === path;

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        {/* Logo */}
        <Link to="/" className={styles.logo} >
          <div className={styles.logoMark}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              <polyline points="9,22 9,12 15,12 15,22" />
            </svg>
          </div>
          StarsMaid
        </Link>

        {/* Centre links */}
        <div className={styles.links}>
          <button className="btn btn-ghost btn-sm" onClick={() => scrollTo('section-about')}>About</button>
          <button className="btn btn-ghost btn-sm" onClick={() => scrollTo('section-how')}>How To</button>
          <button className="btn btn-ghost btn-sm" onClick={() => scrollTo('section-why-us')}>Why Us</button>
          <button className="btn btn-ghost btn-sm" onClick={() => scrollTo('section-services')}>Services</button>
          {/* <button className="btn btn-ghost btn-sm" onClick={() => scrollTo('section-book')}>Book</button> */}
          {/* <button className="btn btn-ghost btn-sm" onClick={() => scrollTo('section-areas')}>Locations</button> */}
        </div>

        {/* Right actions */}
        <div className={styles.actions}>
          {loggedIn ? (
            <>
              <div className={styles.avatar} title="Logged in">{initials}</div>

              <Link
                to="/appointments"
                className={`btn btn-ghost btn-sm ${isActive('/appointments') ? styles.navLinkActive : ''}`}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                My Appointments
              </Link>

              <Link
                to="/book"
                className={`btn btn-outline btn-sm ${isActive('/book') ? styles.navLinkActive : ''}`}
              >
                Book
              </Link>

              <button className="btn btn-ghost btn-sm" onClick={handleLogout}>
                Log Out
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-outline btn-sm">Log In</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
