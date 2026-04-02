import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name:'', email:'', phone:'', service:'', message:'' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main style={{ padding:'72px 0', background:'#F8FAFC' }}>
      <div className="container" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'34px' }}>
        <div>
          <p className="section-label">Contact Us</p>
          <h1 style={{ marginBottom:'14px' }}>Need help booking or managing your service?</h1>
          <p style={{ color:'#475569', marginBottom:'24px' }}>
            Reach out to your assigned representative, or send a message to customer service.
          </p>

          {submitted ? (
            <div style={{ padding:'20px', background:'#ffffff', border:'1px solid #d8e4f4', borderRadius:'10px' }}>
              <p>Thanks! Your request has been received. We will contact you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display:'grid', gap:'12px' }}>
              <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name" required />
              <input name="email" value={form.email} onChange={handleChange} placeholder="Email" type="email" required />
              <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" type="tel" required />
              <select name="service" value={form.service} onChange={handleChange} required>
                <option value="">Service of Interest</option>
                <option value="standard-cleaning">Standard Cleaning</option>
                <option value="deep-cleaning">Deep Cleaning</option>
                <option value="handyman">Handyman Repairs</option>
                <option value="other">Other</option>
              </select>
              <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" rows="4" required />
              <button className="btn btn-primary" type="submit">Send Message</button>
            </form>
          )}
        </div>

        <div style={{ padding:'25px', background:'#fff', border:'1px solid #d8e4f4', borderRadius:'12px' }}>
          <h3>Business Info</h3>
          <p>📍 Northern Virginia & Washington D.C.</p>
          <p>📞 (703) 555-0100</p>
          <p>✉️ hello@starsmaid.com</p>
          <h4 style={{ marginTop:'18px' }}>Hours</h4>
          <ul style={{ marginTop:'8px', color:'#475569', lineHeight:'1.6' }}>
            <li>Mon-Fri: 8:00 AM – 8:00 PM</li>
            <li>Sat: 9:00 AM – 6:00 PM</li>
            <li>Sun: 10:00 AM – 4:00 PM</li>
          </ul>
          <div style={{ marginTop:'20px' }}>
            <strong>Representative Contact</strong>
            <p style={{ marginTop:'8px' }}>Reach your assigned representative or get instant customer service through the dashboard.</p>
            <button className="btn btn-outline" onClick={() => window.location.replace('/account/rep-contact')}>
              Go to Rep Contact
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
