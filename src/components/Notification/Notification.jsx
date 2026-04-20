import { useState, useEffect } from 'react';
import styles from './Notification.module.css';

export default function Notification({ title, body, duration = 5500 }) {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const hideTimer = setTimeout(() => {
      setLeaving(true);
      setTimeout(() => setVisible(false), 400);
    }, duration);

    return () => clearTimeout(hideTimer);
  }, [duration]);

  const dismiss = () => {
    setLeaving(true);
    setTimeout(() => setVisible(false), 400);
  };

  if (!visible) return null;

  return (
    <div className={`${styles.notif} ${leaving ? styles.leaving : ''}`}>
      <div className={styles.icon}>
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.body}>{body}</div>
      </div>
      <button className={styles.close} onClick={dismiss} aria-label="Dismiss">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>
  );
}
