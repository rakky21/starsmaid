import { useState } from 'react';

export default function AccountProfile() {
  const [profile, setProfile] = useState({ name:'', email:'', phone:'', address:'' });
  const handleChange = (e) => setProfile((p)=>({...p,[e.target.name]: e.target.value}));
  const save = (e) => { e.preventDefault(); alert('Profile updated!'); };

  return (
    <main style={{ padding:'72px 0', background:'#FFF5FAFC' }}>
      <div className="container" style={{ maxWidth:'640px' }}>
        <p className="section-label">Profile Settings</p>
        <h1 className="section-h2">Profile & Address</h1>
        <form onSubmit={save} style={{ display:'grid', gap:'12px', background:'#fff', border:'1px solid #d8e4f4', borderRadius:'10px', padding:'18px' }}>
          <input name="name" placeholder="Full Name" value={profile.name} onChange={handleChange} required />
          <input name="email" placeholder="Email" type="email" value={profile.email} onChange={handleChange} required />
          <input name="phone" placeholder="Phone" value={profile.phone} onChange={handleChange} required />
          <textarea name="address" placeholder="Address" rows={3} value={profile.address} onChange={handleChange} required />
          <button className="btn btn-primary" type="submit">Save Profile</button>
        </form>
      </div>
    </main>
  );
}
