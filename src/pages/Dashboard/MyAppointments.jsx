const APPOINTMENTS = [
  { id:1, date:'2026-04-15', time:'2:00 PM', service:'Deep Cleaning', status:'Scheduled', technician:'Carlos R.' },
  { id:2, date:'2026-04-22', time:'11:00 AM', service:'Standard Cleaning', status:'Confirmed', technician:'Mara H.' },
];

export default function MyAppointments() {
  return (
    <main style={{ padding:'72px 0', background:'#F8FAFC' }}>
      <div className="container">
        <p className="section-label">My Appointments</p>
        <h1 className="section-h2">Upcoming Services</h1>
        <div style={{ display:'grid', gap:'14px', marginTop:'24px' }}>
          {APPOINTMENTS.map((a) => (
            <article key={a.id} style={{ background:'#fff', border:'1px solid #d8e4f4', borderRadius:'10px', padding:'16px' }}>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                <h3 style={{ margin:0 }}>{a.service}</h3>
                <span style={{ color: a.status === 'Scheduled' ? '#0ea5e9' : '#10b981', fontWeight:'700' }}>{a.status}</span>
              </div>
              <p style={{ margin:'8px 0' }}>{a.date} · {a.time} · Technician: {a.technician}</p>
              <div style={{ display:'flex', gap:'8px' }}>
                <button className="btn btn-outline" onClick={() => window.location.replace(`/dashboard/timeline/${a.id}`)}>Timeline</button>
                <button className="btn btn-ghost" onClick={() => alert('Feature coming soon')}>Reschedule</button>
                <button className="btn btn-danger" onClick={() => alert('Cancel request submitted')}>Cancel</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
