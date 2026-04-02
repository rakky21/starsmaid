import { useParams } from 'react-router-dom';

const DUMMY = {
  1: {
    service:'Deep Cleaning', date:'2026-04-15', time:'2:00 PM', progress:[
      {step:'Assigned', status:'done', info:'Assigned to Luis R.'},
      {step:'Arriving', status:'active', info:'Arriving in 10 min'},
      {step:'In Progress', status:'pending', info:'Starting soon'},
      {step:'Completed', status:'pending', info:'Pending'},
      {step:'Departed', status:'pending', info:'Pending'}
    ]
  }
};

export default function ServiceTimeline() {
  const { appointmentId } = useParams();
  const appt = DUMMY[appointmentId] || DUMMY[1];

  return (
    <main style={{ padding:'72px 0', background:'#F8FAFC' }}>
      <div className="container">
        <p className="section-label">Service Timeline</p>
        <h1 className="section-h2">{appt.service}</h1>
        <p className="section-sub">{appt.date} · {appt.time}</p>

        <div style={{ marginTop:'24px', borderLeft:'3px solid var(--accent)', paddingLeft:'16px' }}>
          {appt.progress.map((item) => (
            <div key={item.step} style={{ marginBottom:'18px', opacity: item.status === 'pending' ? 0.72 : 1 }}>
              <div style={{ display:'flex', alignItems:'center', gap:'10px' }}>
                <span style={{ width:'16px', height:'16px', borderRadius:'50%', background: item.status === 'done' ? '#10B981' : item.status === 'active' ? '#0EA5E9' : '#d8e4f4' }} />
                <strong>{item.step}</strong>
              </div>
              <p style={{ margin:'4px 0 0', color:'#475569' }}>{item.info}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
