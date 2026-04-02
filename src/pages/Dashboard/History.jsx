const HISTORY = [
  { id:1, date:'2026-03-10', service:'Move In / Move Out', status:'Completed', cost:'$239'},
  { id:2, date:'2026-03-22', service:'Window Cleaning', status:'Completed', cost:'$75'},
];

export default function History() {
  return (
    <main style={{ padding:'72px 0', background:'#F8FAFC' }}>
      <div className="container">
        <p className="section-label">Service History</p>
        <h1 className="section-h2">Completed Jobs</h1>
        <ul style={{ marginTop:'20px', listStyle:'none', padding:0, display:'grid', gap:'12px' }}>
          {HISTORY.map((item) => (
            <li key={item.id} style={{ background:'#fff', border:'1px solid #d8e4f4', borderRadius:'10px', padding:'14px' }}>
              <div style={{ display:'flex', justifyContent:'space-between', marginBottom:'6px' }}>
                <span style={{ fontWeight:'600' }}>{item.service}</span>
                <span>{item.date}</span>
              </div>
              <div style={{ display:'flex', justifyContent:'space-between', color:'#475569', fontSize:'.9rem' }}>
                <span>{item.status}</span>
                <span>{item.cost}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}