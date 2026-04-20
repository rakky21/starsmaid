import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Notification from '../Notification/Notification.jsx';
import styles from './Confirmation.module.css';

export default function Confirmation({ appointment, onReset }) {
  const navigate = useNavigate();

  // Show browser notification if permission granted
  useEffect(() => {
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification('StarsMaid — Booking Confirmed!', {
        body: `${appointment.service} on ${appointment.date} at ${appointment.time}`,
        icon: '/favicon.ico',
      });
    }
  }, [appointment]);

  const rows = [
    { label: 'Service', value: appointment.service },
    { label: 'Date', value: appointment.date },
    { label: 'Time', value: appointment.time },
    { label: 'Status', value: appointment.status, tag: true },
    { label: 'Confirmation #', value: appointment.confirmation, code: true },
  ];

  return (
    <>
      {/* Toast notification */}
      <Notification
        title="Booking Confirmed!"
        body={`${appointment.service} · ${appointment.time} · ${appointment.date}`}
      />

      <div className={styles.wrap}>
        {/* Success icon */}
        <div className={styles.iconWrap}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        <h1 className={styles.h1}>Booking Confirmed!</h1>
        <p className={styles.sub}>
          Your appointment has been scheduled. A confirmation has been sent
          to your email and phone number.
        </p>

        {/* Details card */}
        <div className={styles.card}>
          <div className={styles.rows}>
            {rows.map((row, i) => (
              <div key={row.label}>
                <div className={styles.row}>
                  <span className={styles.rowLabel}>{row.label}</span>
                  {row.code ? (
                    <span className={styles.code}>{row.value}</span>
                  ) : row.tag ? (
                    <span className="tag tag-success" style={{ textTransform: 'capitalize' }}>
                      {row.value}
                    </span>
                  ) : (
                    <span className={styles.rowValue}>{row.value}</span>
                  )}
                </div>
                {i < rows.length - 1 && <div className={styles.sep} />}
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className={styles.actions}>
          <button className="btn btn-primary" onClick={() => navigate('/')}>
            Back to Home
          </button>
          <button className="btn btn-outline" onClick={onReset}>
            Book Another
          </button>
        </div>
      </div>
    </>
  );
}
