import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <main style={{ padding:'72px 0', background:'#f8fbff' }}>
      <div className="container">
        <p className="section-label">My Account</p>
        <h1 className="section-h2">Dashboard</h1>
        <p className="section-sub">Track appointments, update your profile, and contact your assigned representative.</p>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(190px,1fr))', gap:'14px', marginTop:'24px' }}>
          <Link className="btn btn-outline" to="/dashboard/appointments">My Appointments</Link>
          <Link className="btn btn-outline" to="/dashboard/history">Service History</Link>
          <Link className="btn btn-outline" to="/account/profile">Profile & Address</Link>
          <Link className="btn btn-outline" to="/account/team">Team Settings</Link>
          <Link className="btn btn-outline" to="/account/rep-contact">Representative Contact</Link>
        </div>
      </div>
    </main>
  );
}
