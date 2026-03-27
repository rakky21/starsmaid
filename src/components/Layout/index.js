import "../../utils/style.css";
import {
  requireLogin,
  switchTab,
  nav,
  scrollTo2,
  heroSelect,
  doLogin,
  demoLogin,
  doSignup,
  calPrev,
  calNext,
  newBooking,
  confirmBooking,
} from "../../utils/functions.js";

const Layout = ({ children }) => {
  return (
    <main className="main_section">
      <nav className="nav">
        <div className="nav-inner">
          <div className="nav-logo" onClick={() => nav("home")}>
            <div className="nav-logo-mark">
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                <polyline points="9,22 9,12 15,12 15,22" />
              </svg>
            </div>
            StarsMaid
          </div>
          <div className="nav-links">
            <button className="nav-link" onClick={() => nav("home")}>
              Home
            </button>
            <button
              className="nav-link"
              onClick={() => scrollTo2("section-services")}
            >
              Services
            </button>
            <button
              className="nav-link"
              onClick={() => scrollTo2("section-about")}
            >
              About
            </button>
          </div>
          <div className="nav-actions" id="nav-actions">
            <button
              className="btn btn-outline btn-sm"
              onClick={() => nav("auth")}
            >
              Log In
            </button>
            <button
              className="btn btn-primary btn-sm"
              onClick={(e) => {
                e.preventDefault();
                nav("auth");
                switchTab("signup");
              }}
            >
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      {/* <!-- ══════════════ HOME ══════════════ --> */}
      <div className="view active" id="view-home">
        <section className="hero">
          <div className="hero-grid-bg"></div>
          <div className="hero-blob"></div>
          <div className="hero-inner">
            <div>
              <div className="hero-eyebrow">
                <span className="tag tag-accent">
                  <svg
                    width="8"
                    height="8"
                    viewBox="0 0 10 10"
                    fill="currentColor"
                  >
                    <circle cx="5" cy="5" r="5" />
                  </svg>
                  DMV Area · Family-Owned
                </span>
              </div>
              <h1 className="hero-h1">
                Spotless spaces,
                <br />
                <em>on your schedule.</em>
              </h1>
              <p className="hero-sub">
                Professional cleaning and renovation services designed around
                your life. Book in minutes, delivered with care.
              </p>
              <div className="hero-cta">
                <button
                  className="btn btn-primary"
                  onClick={() => requireLogin()}
                >
                  Book an Appointment
                </button>
                <button
                  className="btn btn-ghost"
                  onClick={() => scrollTo2("section-services")}
                >
                  View Services
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>
              <div className="hero-trust">
                <div className="hero-trust-avatars">
                  <span>JR</span>
                  <span>ML</span>
                  <span>SK</span>
                  <span>+</span>
                </div>
                <div className="hero-trust-text">
                  <strong>500+ clients</strong> trust StarsMaid
                  <br />
                  across the DMV area
                </div>
              </div>
            </div>
            <div className="hero-card">
              <div className="hero-card-header">
                <div className="hero-card-title">Top Services</div>
                <span className="tag tag-accent">Book Now</span>
              </div>
              <div className="svc-list">
                <div
                  className="svc-item sel"
                  onClick={(e) => heroSelect(e.currentTarget)}
                >
                  <div className="svc-icon">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                      <polyline points="9,22 9,12 15,12 15,22" />
                    </svg>
                  </div>
                  <div>
                    <div className="svc-name">Standard Cleaning</div>
                    <div className="svc-price">From $89 · 2–3 hrs</div>
                  </div>
                </div>
                <div
                  className="svc-item"
                  onClick={(e) => heroSelect(e.currentTarget)}
                >
                  <div className="svc-icon">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                    </svg>
                  </div>
                  <div>
                    <div className="svc-name">Deep Cleaning</div>
                    <div className="svc-price">From $149 · 4–6 hrs</div>
                  </div>
                </div>
                <div
                  className="svc-item"
                  onClick={(e) => heroSelect(e.currentTarget)}
                >
                  <div className="svc-icon">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
                    </svg>
                  </div>
                  <div>
                    <div className="svc-name">Minor Repairs</div>
                    <div className="svc-price">From $75 · 1–2 hrs</div>
                  </div>
                </div>
              </div>
              <button
                className="btn btn-primary btn-full"
                onClick={() => requireLogin()}
              >
                Book Selected Service
              </button>
            </div>
          </div>
        </section>

        {/* <!-- SERVICES --> */}
        <section className="services-section" id="section-services">
          <div className="container">
            <div className="section-header">
              <div className="section-label">What We Offer</div>
              <h2 className="section-h2">Every service your space needs</h2>
              <p className="section-sub">
                From routine upkeep to full renovations — handled with care and
                precision.
              </p>
            </div>
            <div className="cards-grid">
              <div className="pkg-card">
                <div className="pkg-card-img">🧹</div>
                <div className="pkg-card-body">
                  <div className="pkg-card-name">Standard Cleaning</div>
                  <div className="pkg-card-desc">
                    Surfaces, floors, bathrooms and kitchen — a thorough clean
                    for everyday freshness.
                  </div>
                  <div className="pkg-card-footer">
                    <span className="pkg-card-price">From $89</span>
                    <button
                      className="btn btn-outline btn-sm"
                      onClick={() => requireLogin()}
                    >
                      Select
                    </button>
                  </div>
                </div>
              </div>
              <div className="pkg-card">
                <div className="pkg-card-img">✨</div>
                <div className="pkg-card-body">
                  <div className="pkg-card-name">Deep Cleaning</div>
                  <div className="pkg-card-desc">
                    Full detail clean including inside appliances, baseboards
                    and hard-to-reach areas.
                  </div>
                  <div className="pkg-card-footer">
                    <span className="pkg-card-price">From $149</span>
                    <button
                      className="btn btn-outline btn-sm"
                      onClick={() => requireLogin()}
                    >
                      Select
                    </button>
                  </div>
                </div>
              </div>
              <div className="pkg-card">
                <div className="pkg-card-img">🪟</div>
                <div className="pkg-card-body">
                  <div className="pkg-card-name">Window Cleaning</div>
                  <div className="pkg-card-desc">
                    Streak-free interior and exterior window cleaning for homes
                    and offices.
                  </div>
                  <div className="pkg-card-footer">
                    <span className="pkg-card-price">From $65</span>
                    <button
                      className="btn btn-outline btn-sm"
                      onClick={() => requireLogin()}
                    >
                      Select
                    </button>
                  </div>
                </div>
              </div>
              <div className="pkg-card">
                <div className="pkg-card-img">🔧</div>
                <div className="pkg-card-body">
                  <div className="pkg-card-name">Minor Repairs</div>
                  <div className="pkg-card-desc">
                    Patch drywall, fix doors, replace fixtures — small fixes
                    that make a big difference.
                  </div>
                  <div className="pkg-card-footer">
                    <span className="pkg-card-price">From $75</span>
                    <button
                      className="btn btn-outline btn-sm"
                      onClick={() => requireLogin()}
                    >
                      Select
                    </button>
                  </div>
                </div>
              </div>
              <div className="pkg-card">
                <div className="pkg-card-img">🚿</div>
                <div className="pkg-card-body">
                  <div className="pkg-card-name">Plumbing Repair</div>
                  <div className="pkg-card-desc">
                    Leaky faucets, clogged drains, running toilets — fast and
                    reliable solutions.
                  </div>
                  <div className="pkg-card-footer">
                    <span className="pkg-card-price">From $95</span>
                    <button
                      className="btn btn-outline btn-sm"
                      onClick={() => requireLogin()}
                    >
                      Select
                    </button>
                  </div>
                </div>
              </div>
              <div className="pkg-card">
                <div className="pkg-card-img">⚡</div>
                <div className="pkg-card-body">
                  <div className="pkg-card-name">Electrical Repair</div>
                  <div className="pkg-card-desc">
                    Outlets, switches, fixtures — licensed electricians for
                    safe, compliant repairs.
                  </div>
                  <div className="pkg-card-footer">
                    <span className="pkg-card-price">From $110</span>
                    <button
                      className="btn btn-outline btn-sm"
                      onClick={() => requireLogin}
                    >
                      Select
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- ABOUT --> */}
        <section className="about-section" id="section-about">
          <div className="about-inner">
            <div className="about-img">🏡</div>
            <div>
              <div className="about-label">
                <span className="tag tag-accent">About Us</span>
              </div>
              <h2 className="about-h2">Family-owned, DMV proud</h2>
              <p className="about-p">
                As a proudly family-owned business serving the DMV area, we
                provide reliable cleaning and renovation services designed to
                keep your spaces clean, comfortable, and refreshed.
              </p>
              <p className="about-p">
                From deep cleaning to full renovations, every job is delivered
                with exceptional attention to detail and a personal touch that
                larger companies simply can't match.
              </p>
              <div className="about-stats">
                <div>
                  <div className="stat-val">500+</div>
                  <div className="stat-lbl">Happy Clients</div>
                </div>
                <div>
                  <div className="stat-val">8+</div>
                  <div className="stat-lbl">Years Serving DMV</div>
                </div>
                <div>
                  <div className="stat-val">4.9★</div>
                  <div className="stat-lbl">Average Rating</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="footer-inner">
            <div className="footer-logo">
              <div className="nav-logo-mark">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                  <polyline points="9,22 9,12 15,12 15,22" />
                </svg>
              </div>
              StarsMaid
            </div>
            <div className="footer-copy">
              © 2025 StarsMaid. All rights reserved.
            </div>
            <div className="footer-links">
              <a href="/" onClick={(e) => e.preventDefault()}>
                Privacy
              </a>
              <a href="#">Terms</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </footer>
      </div>

      {/* <!-- ══════════════ AUTH ══════════════ --> */}
      <div className="view" id="view-auth">
        <div className="auth-wrap">
          <div className="auth-side">
            <div className="auth-side-dots"></div>
            <div
              className="nav-logo"
              style={{
                color: "#fff",
                marginBottom: "40px",
                fontSize: "1.2rem",
              }}
            >
              <div
                className="nav-logo-mark"
                style={{ background: "rgba(255,255,255,.2)" }}
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                  <polyline points="9,22 9,12 15,12 15,22" />
                </svg>
              </div>
              StarsMaid
            </div>
            <p className="auth-side-h">Your space deserves the best care.</p>
            <p className="auth-side-p">
              Join hundreds of DMV-area clients who trust StarsMaid for
              spotless, reliable results every time.
            </p>
            <div className="auth-side-feats">
              <div className="auth-feat">
                <div className="auth-feat-icon">
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                Easy online booking — anytime
              </div>
              <div className="auth-feat">
                <div className="auth-feat-icon">
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                Instant confirmation & reminders
              </div>
              <div className="auth-feat">
                <div className="auth-feat-icon">
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                Vetted, insured professionals
              </div>
              <div className="auth-feat">
                <div className="auth-feat-icon">
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                Satisfaction guaranteed
              </div>
            </div>
          </div>
          <div className="auth-form-side">
            <div className="auth-form-box">
              <div className="auth-tabs">
                <div
                  className="auth-tab active"
                  id="tab-login"
                  onClick={() => switchTab("login")}
                >
                  Log In
                </div>
                <div
                  className="auth-tab"
                  id="tab-signup"
                  onClick={() => switchTab("signup")}
                >
                  Sign Up
                </div>
              </div>

              {/* <!-- LOGIN --> */}
              <div id="form-login">
                <h2 className="auth-form-title">Welcome back</h2>
                <p className="auth-form-sub">
                  No account?{" "}
                  <span
                    className="auth-switch"
                    onClick={() => switchTab("signup")}
                  >
                    Sign up free
                  </span>
                </p>
                <div className="field">
                  <label>Email address</label>
                  <input
                    type="email"
                    id="li-email"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="field">
                  <label>Password</label>
                  <input
                    type="password"
                    id="li-pass"
                    placeholder="Your password"
                  />
                </div>
                <div
                  className="form-err"
                  id="li-err"
                  style={{ display: "none" }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line
                      x1="12"
                      y1="8"
                      x2="12"
                      y2="12"
                      stroke="#fff"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <circle cx="12" cy="16" r="1" fill="#fff" />
                  </svg>
                  Invalid email or password.
                </div>
                <button
                  className="btn btn-primary btn-full"
                  onClick={() => doLogin()}
                >
                  Log In
                </button>
                <div className="auth-divider">or</div>
                <button
                  className="btn btn-outline btn-full"
                  onClick={() => demoLogin()}
                >
                  Continue as Demo User
                </button>
              </div>

              {/* <!-- SIGNUP --> */}
              <div id="form-signup" style={{ display: "none" }}>
                <h2 className="auth-form-title">Create account</h2>
                <p className="auth-form-sub">
                  Already have one?{" "}
                  <span
                    className="auth-switch"
                    onClick={() => switchTab("login")}
                  >
                    Log in
                  </span>
                </p>
                <div className="field-row">
                  <div className="field">
                    <label>First name</label>
                    <input type="text" id="su-name" placeholder="Jane" />
                  </div>
                  <div className="field">
                    <label>Last name</label>
                    <input type="text" id="su-last" placeholder="Smith" />
                  </div>
                </div>
                <div className="field">
                  <label>Email</label>
                  <input
                    type="email"
                    id="su-email"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="field">
                  <label>Phone</label>
                  <input
                    type="tel"
                    id="su-phone"
                    placeholder="(202) 555-0100"
                  />
                </div>
                <div className="field">
                  <label>Password</label>
                  <input
                    type="password"
                    id="su-pass"
                    placeholder="Min. 8 characters"
                  />
                </div>
                <div
                  className="form-err"
                  id="su-err"
                  style={{ display: "none" }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line
                      x1="12"
                      y1="8"
                      x2="12"
                      y2="12"
                      stroke="#fff"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <circle cx="12" cy="16" r="1" fill="#fff" />
                  </svg>
                  <span id="su-err-msg">Please complete all fields.</span>
                </div>
                <button
                  className="btn btn-primary btn-full"
                  onClick={() => doSignup()}
                >
                  Create Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- ══════════════ SCHEDULER ══════════════ --> */}
      <div className="view" id="view-scheduler">
        <div className="scheduler-wrap">
          <div className="scheduler-main">
            <h1>Book a Service</h1>
            <p className="sub">
              Choose your date, time, and service — we'll handle the rest.
            </p>

            <div className="sched-steps">
              <div className="sched-step done" id="step1">
                <div className="sched-step-num">
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                Logged In
              </div>
              <div className="sched-step-sep"></div>
              <div className="sched-step active" id="step2">
                <div className="sched-step-num">2</div>Pick Date
              </div>
              <div className="sched-step-sep"></div>
              <div className="sched-step" id="step3">
                <div className="sched-step-num">3</div>Pick Time
              </div>
              <div className="sched-step-sep"></div>
              <div className="sched-step" id="step4">
                <div className="sched-step-num">4</div>Service
              </div>
              <div className="sched-step-sep"></div>
              <div className="sched-step" id="step5">
                <div className="sched-step-num">5</div>Confirm
              </div>
            </div>

            {/* <!-- Date --> */}
            <div className="sched-card">
              <div className="sched-card-title">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Select a Date
              </div>
              <div className="cal-nav">
                <button className="cal-nav-btn" onClick={() => calPrev()}>
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
                <div className="cal-month" id="cal-month-label"></div>
                <button className="cal-nav-btn" onClick={() => calNext()}>
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>
              <div className="cal-grid" id="cal-grid"></div>
            </div>

            {/* <!-- Time --> */}
            <div className="sched-card">
              <div className="sched-card-title">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                Select a Time
                <span
                  className="tag tag-accent"
                  style={{ marginLeft: "auto", fontSize: ".7rem" }}
                >
                  9 AM – 6 PM
                </span>
              </div>
              <div className="time-grid" id="time-grid"></div>
            </div>

            {/* <!-- Service --> */}
            <div className="sched-card">
              <div className="sched-card-title">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 11 12 14 22 4" />
                  <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
                </svg>
                Select a Service
              </div>
              <div className="pill-list" id="pill-list"></div>
            </div>

            <div
              className="form-err"
              id="sched-err"
              style={{ display: "none" }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <circle cx="12" cy="12" r="10" />
                <line
                  x1="12"
                  y1="8"
                  x2="12"
                  y2="12"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="12" cy="16" r="1" fill="#fff" />
              </svg>
              Please select a date, time, and service before confirming.
            </div>
            <button
              className="btn btn-primary"
              style={{ minWidth: "200px" }}
              onClick={() => confirmBooking()}
            >
              Confirm Appointment
            </button>
          </div>

          {/* <!-- Sidebar --> */}
          <div className="booking-sidebar">
            <h3>Your Booking</h3>
            <div className="sum-rows">
              <div className="sum-row">
                <div className="sum-row-icon">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </div>
                <div>
                  <div className="sum-row-lbl">Date</div>
                  <div className="sum-row-val" id="sum-date">
                    Not selected
                  </div>
                </div>
              </div>
              <div className="sum-row">
                <div className="sum-row-icon">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <div className="sum-row-lbl">Time</div>
                  <div className="sum-row-val" id="sum-time">
                    Not selected
                  </div>
                </div>
              </div>
              <div className="sum-row">
                <div className="sum-row-icon">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
                  </svg>
                </div>
                <div>
                  <div className="sum-row-lbl">Service</div>
                  <div className="sum-row-val" id="sum-service">
                    Not selected
                  </div>
                </div>
              </div>
            </div>
            <div className="sum-divider"></div>
            <div className="sum-placeholder" id="sum-placeholder">
              Fill in your details to see your booking summary.
            </div>
            <div id="sum-ready" style={{ display: "none" }}>
              <p
                style={{
                  fontSize: ".8rem",
                  color: "var(--ink-2)",
                  lineHeight: "1.6",
                  marginBottom: "16px",
                }}
              >
                You'll receive a confirmation email and SMS after booking.
              </p>
              <button
                className="btn btn-primary btn-full"
                onClick={() => confirmBooking()}
              >
                Confirm & Book
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- ══════════════ CONFIRMATION ══════════════ --> */}
      <div className="view" id="view-confirm">
        <div className="confirm-wrap">
          <div className="confirm-icon">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h1 className="confirm-h1">Booking Confirmed!</h1>
          <p className="confirm-sub">
            Your appointment has been scheduled. A confirmation has been sent to
            your email and phone number.
          </p>
          <div className="confirm-card">
            <div className="conf-rows">
              <div className="conf-row">
                <span className="conf-row-lbl">Name</span>
                <span className="conf-row-val" id="conf-name">
                  —
                </span>
              </div>
              <div className="conf-sep"></div>
              <div className="conf-row">
                <span className="conf-row-lbl">Service</span>
                <span className="conf-row-val" id="conf-service">
                  —
                </span>
              </div>
              <div className="conf-sep"></div>
              <div className="conf-row">
                <span className="conf-row-lbl">Date</span>
                <span className="conf-row-val" id="conf-date">
                  —
                </span>
              </div>
              <div className="conf-sep"></div>
              <div className="conf-row">
                <span className="conf-row-lbl">Time</span>
                <span className="conf-row-val" id="conf-time">
                  —
                </span>
              </div>
              <div className="conf-sep"></div>
              <div className="conf-row">
                <span className="conf-row-lbl">Confirmation #</span>
                <span className="conf-row-val">
                  <span className="conf-code" id="conf-code">
                    —
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="confirm-actions">
            <button className="btn btn-primary" onClick={() => nav("home")}>
              Back to Home
            </button>
            <button className="btn btn-outline" onClick={() => newBooking()}>
              Book Another
            </button>
          </div>
        </div>
      </div>

      {/* <!-- NOTIF --> */}
      <div className="notif hidden" id="notif">
        <div className="notif-icon">
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <div>
          <div className="notif-title" id="notif-title">
            Appointment Confirmed!
          </div>
          <div className="notif-body" id="notif-body">
            Your booking has been saved.
          </div>
        </div>
      </div>
    </main>
  );
};

export default Layout;
