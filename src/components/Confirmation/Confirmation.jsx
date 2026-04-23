import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPortal } from 'react-dom';
import Notification from '../Notification/Notification.jsx';
import styles from './Confirmation.module.css';

export default function Confirmation({ appointment, onReset }) {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(true); // ← opens automatically on mount

  // ✅ Guard
  if (!appointment) {
    return (
      <p style={{ textAlign: 'center', marginTop: '2rem' }}>
        No appointment data.
      </p>
    );
  }

  useEffect(() => {
    if (!("Notification" in window)) return;

    const showNotification = () => {
      new window.Notification("StarsMaid — Booking Confirmed!", {
        body: `${appointment.service} on ${appointment.date} at ${appointment.time}`,
        icon: "/favicon.ico",
      });
    };

    if (Notification.permission === "granted") {
      showNotification();
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then((perm) => {
        if (perm === "granted") showNotification();
      });
    }
  }, [appointment]);

  const rows = useMemo(() => [
    { label: 'Service', value: appointment.service || '-' },
    { label: 'Date', value: appointment.date || '-' },
    { label: 'Time', value: appointment.time || '-' },
    { label: 'Technician', value: appointment.technician || 'Assigned later' },
    { label: 'Status', value: appointment.status || '-', tag: true },
    { label: 'Confirmation #', value: appointment.confirmation || '-', code: true },
  ], [appointment]);

  return (
    <>
      {/* ── Modal ── renders in document.body to avoid any clipping/z-index issues */}
      {showModal && createPortal(
        <div className={styles.modalOverlay} onClick={() => setShowModal(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <h2 className={styles.modalTitle}>Appointment Booked!</h2>

            <div className={styles.modalRows}>
              <div className={styles.modalRow}>
                <span className={styles.modalLabel}>Service</span>
                <span className={styles.modalValue}>{appointment.service}</span>
              </div>
              <div className={styles.modalRow}>
                <span className={styles.modalLabel}>Date</span>
                <span className={styles.modalValue}>{appointment.date}</span>
              </div>
              <div className={styles.modalRow}>
                <span className={styles.modalLabel}>Time</span>
                <span className={styles.modalValue}>{appointment.time}</span>
              </div>
              <div className={styles.modalRow}>
                <span className={styles.modalLabel}>Confirmation #</span>
                <span className={styles.modalCode}>{appointment.confirmation}</span>
              </div>
            </div>

            <button className={styles.modalBtn} onClick={() => setShowModal(false)}>
              Got it
            </button>
          </div>
        </div>,
        document.body
      )}

      <Notification
        title="Booking Confirmed!"
        body={`${appointment.service} · ${appointment.time} · ${appointment.date}`}
      />

      <div className={styles.wrap}>
        <h1 className={styles.h1}>Booking Confirmed!</h1>

        <div className={styles.card}>
          <div className={styles.rows}>
            {rows.map((row, i) => (
              <div key={row.label}>
                <div className={styles.row}>
                  <span className={styles.rowLabel}>{row.label}</span>
                  {row.code ? (
                    <span className={styles.code}>{row.value}</span>
                  ) : row.tag ? (
                    <span className="tag tag-success">{row.value}</span>
                  ) : (
                    <span className={styles.rowValue}>{row.value}</span>
                  )}
                </div>
                {i < rows.length - 1 && <div className={styles.sep} />}
              </div>
            ))}
          </div>
        </div>

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