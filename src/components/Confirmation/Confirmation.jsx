import { useEffect, useMemo } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Notification from '../Notification/Notification.jsx';
import styles from './Confirmation.module.css';
import { useQuery } from '@apollo/client';
import { GET_APPOINTMENT } from '../../utils/graphql';

export default function Confirmation({ onReset }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { id: appointmentId } = useParams();

  // PRIMARY: appointment object passed via navigate state from Booking page.
  // Always populated on the normal booking flow — zero extra network calls needed.
  const navAppointment = location.state?.appointment;

  // FALLBACK: if the user refreshes the confirmation page, state is lost.
  // Re-fetch from server using the :id URL param.
  const { data, loading } = useQuery(GET_APPOINTMENT, {
    variables: { id: appointmentId },
    skip: !!navAppointment || !appointmentId,
  });

  // Single source of truth
  const appointment = navAppointment || data?.appointment || {};

  // Browser push notification (fires once data is ready)
  useEffect(() => {
    if (!appointment.service) return;
    if ('Notification' in window && Notification.permission === 'granted') {
      new window.Notification('StarsMaid — Booking Confirmed!', {
        body: `${appointment.service} on ${appointment.date} at ${appointment.time}`,
        icon: '/favicon.ico',
      });
    }
  }, [appointment]);

  const rows = useMemo(() => [
    { label: 'Service', value: appointment.service },
    { label: 'Date', value: appointment.date },
    { label: 'Time', value: appointment.time },
    { label: 'Status', value: appointment.status, tag: true },
    { label: 'Confirmation #', value: appointment.confirmation, code: true },
  ], [appointment]);

  if (loading) {
    return <p style={{ textAlign: 'center', marginTop: '2rem' }}>Loading your appointment…</p>;
  }

  return (
    <>
      <Notification
        title="Booking Confirmed!"
        body={`${appointment.service} · ${appointment.time} · ${appointment.date}`}
      />

      <div className={styles.wrap}>
        <div className={styles.iconWrap}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        <h1 className={styles.h1}>Booking Confirmed!</h1>
        <p className={styles.sub}>
          Your appointment has been scheduled. A confirmation has been sent
          to your email and phone number.
        </p>

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
