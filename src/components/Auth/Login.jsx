import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../utils/graphql.js';
import Auth from '../../utils/auth.js';
import styles from './Auth.module.css';

export default function Login({ onSwitch }) {
  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});

  const [login, { loading }] = useMutation(LOGIN);

  const validate = () => {
    const e = {};
    if (!form.email) e.email = 'Email is required';
    if (!form.password) e.password = 'Password is required';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    try {
      const { data } = await login({ variables: form });
      Auth.login(data.login.token);
    } catch (err) {
      setErrors({ server: err.message || 'Invalid email or password.' });
    }
  };

  return (
    <div className={styles.formWrap}>
      <h2 className={styles.title}>Welcome back</h2>
      <p className={styles.sub}>
        No account?{' '}
        <button type="button" className={styles.switch} onClick={onSwitch}>
          Sign up free
        </button>
      </p>

      <form onSubmit={handleSubmit} noValidate>
        <div className={styles.field}>
          <label htmlFor="li-email">Email address</label>
          <input
            id="li-email"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={handleChange}
            className={errors.email ? styles.inputErr : ''}
          />
          {errors.email && <span className={styles.errMsg}>{errors.email}</span>}
        </div>

        <div className={styles.field}>
          <label htmlFor="li-password">Password</label>
          <input
            id="li-password"
            name="password"
            type="password"
            placeholder="Your password"
            value={form.password}
            onChange={handleChange}
            className={errors.password ? styles.inputErr : ''}
          />
          {errors.password && <span className={styles.errMsg}>{errors.password}</span>}
        </div>

        {errors.server && (
          <div className="form-err">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
              <circle cx="12" cy="16" r="1" fill="#fff" />
            </svg>
            {errors.server}
          </div>
        )}

        <button className="btn btn-primary btn-full" type="submit" disabled={loading}>
          {loading ? 'Logging in…' : 'Log In'}
        </button>
      </form>
    </div>
  );
}
