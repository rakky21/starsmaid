import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../../utils/graphql.js';
import Auth from '../../utils/auth.js';
import styles from './Auth.module.css';

function Field({ id, label, name, type = 'text', placeholder, value, onChange, error}) {
  return (
    <div className={styles.field}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={error ? styles.inputErr : ''}
      />
      {error && <span className={styles.errMsg}>{error}</span>}
    </div>
  )
};
export default function SignUp({ onSwitch }) {
  const [form, setForm] = useState({
    name: '', lastName: '', email: '', phone: '', password: '', confirm: '',
  });
  const [errors, setErrors] = useState({});

  const [createUser, { loading }] = useMutation(CREATE_USER);

  const validate = () => {
    const e = {};
    if (!form.name) e.name = 'First name is required';
    if (!form.lastName) e.lastName = 'Last name is required';
    if (!form.email) e.email = 'Email is required';
    if (!form.password) e.password = 'Password is required';
    else if (form.password.length < 8) e.password = 'Password must be at least 8 characters';
    if (form.password !== form.confirm) e.confirm = 'Passwords do not match';
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
      const { data } = await createUser({
        variables: {
          name: form.name,
          lastName: form.lastName,
          email: form.email,
          password: form.password,
          phone: form.phone || undefined,
        },
      });
      Auth.login(data.createUser.token);
    } catch (err) {
      setErrors({ server: err.message || 'Error creating account. Please try again.' });
    }
  };

  return (
    <div className={styles.formWrap}>
      <h2 className={styles.title}>Create account</h2>
      <p className={styles.sub}>
        Already have one?{' '}
        <button type="button" className={styles.switch} onClick={onSwitch}>
          Log in
        </button>
      </p>

      <form onSubmit={handleSubmit} noValidate>
        <div className={styles.row}>
          <Field id="su-name" label="First name" name="name" placeholder="Jane" onChange={handleChange} />
          <Field id="su-last" label="Last name" name="lastName" placeholder="Smith" onChange={handleChange}/>
        </div>
        <Field id="su-email" label="Email address" name="email" type="email" placeholder="you@example.com" onChange={handleChange}/>
        <Field id="su-phone" label="Phone (optional)" name="phone" type="tel" placeholder="(202) 555-0100" onChange={handleChange}/>
        <Field id="su-password" label="Password" name="password" type="password" placeholder="Min. 8 characters" onChange={handleChange}/>
        <Field id="su-confirm" label="Confirm password" name="confirm" type="password" placeholder="Repeat password" onChange={handleChange}/>

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
          {loading ? 'Creating account…' : 'Create Account'}
        </button>
      </form>
    </div>
  );
}
