import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Login from '../components/Auth/Login.jsx';
import SignUp from '../components/Auth/SignUp.jsx';
import Auth from '../utils/auth.js';
import styles from './Lobby.module.css';

export default function Lobby() {
  const [tab, setTab] = useState('login');

  // Already logged in → go home
  if (Auth.loggedIn()) return <Navigate to="/" replace />;

  return (
    <div className={styles.wrap}>
      {/* ── Decorative side panel ── */}
      <div className={styles.side}>
        <div className={styles.sideDots} />
        <div className={styles.sideLogoRow}>
          <div className={styles.sideLogoMark}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              <polyline points="9,22 9,12 15,12 15,22" />
            </svg>
          </div>
          <span className={styles.sideLogoText}>StarsMaid</span>
        </div>
        <h2 className={styles.sideH}>Your space deserves the best care.</h2>
        <p className={styles.sideP}>
          Join hundreds of DMV-area clients who trust StarsMaid for spotless,
          reliable results every time.
        </p>
        <ul className={styles.feats}>
          {[
            'Easy online booking — anytime',
            'Instant confirmation & reminders',
            'Vetted, insured professionals',
            'Satisfaction guaranteed',
          ].map((f) => (
            <li key={f} className={styles.feat}>
              <span className={styles.featIcon}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              {f}
            </li>
          ))}
        </ul>
      </div>

      {/* ── Form side ── */}
      <div className={styles.formSide}>
        <div className={styles.formBox}>
          {/* Tabs */}
          <div className={styles.tabs}>
            <button
              className={`${styles.tab} ${tab === 'login' ? styles.tabActive : ''}`}
              onClick={() => setTab('login')}
            >Log In</button>
            <button
              className={`${styles.tab} ${tab === 'signup' ? styles.tabActive : ''}`}
              onClick={() => setTab('signup')}
            >Sign Up</button>
          </div>

          {tab === 'login'
            ? <Login onSwitch={() => setTab('signup')} />
            : <SignUp onSwitch={() => setTab('login')} />
          }
        </div>
      </div>
    </div>
  );
}
