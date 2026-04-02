export default function AccountRepContact() {
  const rep = { name:'Christian R.', phone:'(703) 555-0123', email:'christian@starsmaid.com', eta:'10 min' };

  return (
    <main style={{ padding:'72px 0', background:'#F8FAFC' }}>
      <div className="container">
        <p className="section-label">Representative Contact</p>
        <h1 className="section-h2">Your Assigned Representative</h1>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'16px', marginTop:'20px' }}>
          <div style={{ background:'#fff', border:'1px solid #d8e4f4', borderRadius:'10px', padding:'16px' }}>
            <h3>{rep.name}</h3>
            <p>Phone: {rep.phone}</p>
            <p>Email: {rep.email}</p>
            <p>ETA: {rep.eta}</p>
            <button className="btn btn-primary" onClick={() => alert('Starting chat with representative...')}>Message Representative</button>
            <button className="btn btn-outline" style={{ marginTop:'8px' }} onClick={() => alert('Calling representative...')}>Call Representative</button>
          </div>
          <div style={{ background:'#fff', border:'1px solid #d8e4f4', borderRadius:'10px', padding:'16px' }}>
            <h3>Customer Service</h3>
            <p>Need help with your booking or technician arrival?</p>
            <p>Phone: (703) 555-0100</p>
            <p>Email: support@starsmaid.com</p>
            <button className="btn btn-primary" onClick={() => alert('Connecting to customer service...')}>Chat with Support</button>
          </div>
        </div>
      </div>
    </main>
  );
}
