import { useEffect, useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_ME, UPDATE_PROFILE } from '../utils/graphql.js';
import Auth from '../utils/auth.js';

export default function AccountProfile() {
  const [form, setForm] = useState({
    fullName: '',
    name: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
  });
  const [status, setStatus] = useState('');

  const { loading, error, data } = useQuery(GET_ME);
  const [updateProfile, { loading: saving }] = useMutation(UPDATE_PROFILE);

  useEffect(() => {
    if (!data?.me) return;
    setForm({
      fullName: `${data.me.name || ''} ${data.me.lastName || ''}`.trim(),
      name: data.me.name || '',
      lastName: data.me.lastName || '',
      email: data.me.email || '',
      phone: data.me.phone || '',
      address: data.me.address || '',
    });
  }, [data]);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setStatus('');
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const fullName = form.fullName.trim();
    const [first, ...rest] = fullName.split(' ');
    const name = first || form.name || '';
    const lastName = rest.join(' ') || form.lastName || '';

    try {
      const { data: result } = await updateProfile({
        variables: {
          name,
          lastName,
          email: form.email,
          phone: form.phone,
          address: form.address,
        },
      });

      const token = result?.updateProfile?.token;
      if (token) {
        Auth.login(token, false);
      }

      setStatus('Profile updated successfully.');
    } catch (err) {
      setStatus(err.message || 'Unable to save profile.');
    }
  };

  if (loading) {
    return (
      <main style={{ padding: '72px 0', background: '#FFF5FAFC' }}>
        <div className="container" style={{ maxWidth: '640px' }}>
          <p className="section-label">Profile Settings</p>
          <h1 className="section-h2">Profile & Address</h1>
          <p>Loading profile...</p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main style={{ padding: '72px 0', background: '#FFF5FAFC' }}>
        <div className="container" style={{ maxWidth: '640px' }}>
          <p className="section-label">Profile Settings</p>
          <h1 className="section-h2">Profile & Address</h1>
          <p>Unable to load profile. Please refresh and try again.</p>
        </div>
      </main>
    );
  }

  return (
    <main style={{ padding: '72px 0', background: '#FFF5FAFC' }}>
      <div className="container" style={{ maxWidth: '640px' }}>
        <p className="section-label">Profile Settings</p>
        <h1 className="section-h2">Profile & Address</h1>
        <form
          onSubmit={handleSave}
          style={{
            display: 'grid',
            gap: '12px',
            background: '#fff',
            border: '1px solid #d8e4f4',
            borderRadius: '10px',
            padding: '18px',
          }}
        >
          <input
            name="fullName"
            placeholder="Full Name"
            value={form.fullName}
            onChange={handleChange}
            required
          />
          <input
            name="email"
            placeholder="Email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
            required
          />
          <textarea
            name="address"
            placeholder="Address"
            rows={3}
            value={form.address}
            onChange={handleChange}
            required
          />
          <button className="btn btn-primary" type="submit" disabled={saving}>
            {saving ? 'Saving…' : 'Save Profile'}
          </button>
          {status && (
            <div className="form-status" style={{ color: saving ? '#0f172a' : '#0f5132' }}>
              {status}
            </div>
          )}
        </form>
      </div>
    </main>
  );
}
