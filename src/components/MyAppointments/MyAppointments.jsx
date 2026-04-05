import { useQuery, useMutation, from } from '@apollo/client';
import { GET_MY_APPOINTMENTS, CANCEL_APPOINTMENT } from '../../utils/graphql';
import { useNavigate } from 'react-router-dom';
import styles from './MyAppointments.module.css';

const STATUS_TAG = {
  confirmed: 'tag-success',
  pending: 'tag-warn',
  cancelled: 'tag-danger',
  completed: 'tag-accent',
};

function CalIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function WrenchIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 11 12 14 22 4" />
      <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
    </svg>
  );
}

export default function MyAppointments() {
  const navigate = useNavigate();

  const { data, loading, error } = useQuery(GET_MY_APPOINTMENTS, {
    fetchPolicy: 'network-only', // always pull fresh from server on mount
  });

  const [cancelAppointment, { loading: cancelling }] = useMutation(CANCEL_APPOINTMENT, {
    refetchQueries: [{ query: GET_MY_APPOINTMENTS }],
    awaitRefetchQueries: true,
  });

  const handleCancel = async (id) => {
    if (!window.confirm('Are you sure you want to cancel this appointment?')) return;
    try {
      await cancelAppointment({ variables: { id } });
    } catch (err) {
      alert(err.message || 'Failed to cancel. Please try again.');
    }
  };

  const appointments = data?.myAppointments || [];
  const active = appointments.filter(a => a.status !== 'cancelled' && a.status !== 'completed');
  const past = appointments.filter(a => a.status === 'cancelled' || a.status === 'completed');

  return (
    <div className={styles.wrap}>
      {/* Header */}
      <div className={styles.header}>
        <div>
          <h1 className={styles.h1}>My Appointments</h1>
          <p className={styles.sub}>View and manage all your scheduled services.</p>
        </div>
        <button className="btn btn-primary" onClick={() => navigate('/book')}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          Book New
        </button>
      </div>

      {/* Loading */}
      {loading && (
        <div className={styles.stateWrap}>
          <div className={styles.spinner} />
          <p className={styles.stateText}>Loading your appointments…</p>
        </div>
      )}

      {/* Error */}
      {error && (
        <div className={styles.stateWrap}>
          <div className={styles.stateIcon} style={{ background: '#fceaea', color: 'var(--danger)' }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </div>
          <p className={styles.stateText}>Failed to load appointments. Please refresh.</p>
        </div>
      )}

      {/* Empty state */}
      {!loading && !error && appointments.length === 0 && (
        <div className={styles.stateWrap}>
          <div className={styles.stateIcon}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          </div>
          <p className={styles.stateTitle}>No appointments yet</p>
          <p className={styles.stateText}>Book your first service and it will appear here.</p>
          <button className="btn btn-primary" onClick={() => navigate('/book')}>
            Book a Service
          </button>
        </div>
      )}

      {/* Active appointments */}
      {!loading && !error && active.length > 0 && (
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Upcoming & Active
            <span className={styles.count}>{active.length}</span>
          </h2>
          <div className={styles.grid}>
            {active.map(appt => (
              <AppointmentCard
                key={appt.id}
                appt={appt}
                onCancel={handleCancel}
                cancelling={cancelling}
              />
            ))}
          </div>
        </div>
      )}

      {/* Past / cancelled */}
      {!loading && !error && past.length > 0 && (
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Past & Cancelled
            <span className={styles.count}>{past.length}</span>
          </h2>
          <div className={styles.grid}>
            {past.map(appt => (
              <AppointmentCard
                key={appt.id}
                appt={appt}
                onCancel={null}   // no cancel button for past
                cancelling={false}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ── Individual appointment card ─────────────────────────────────── */
function AppointmentCard({ appt, onCancel, cancelling }) {
  const tagClass = STATUS_TAG[appt.status] || 'tag-accent';
  const isCancelled = appt.status === 'cancelled';

  return (
    <div className={`${styles.card} ${isCancelled ? styles.cardCancelled : ''}`}>
      {/* Top row: service + status */}
      <div className={styles.cardTop}>
        <h3 className={styles.cardService}>{appt.service}</h3>
        <span className={`tag ${tagClass}`} style={{ textTransform: 'capitalize' }}>
          {appt.status}
        </span>
      </div>

      {/* Details */}
      <div className={styles.cardDetails}>
        <div className={styles.detail}>
          <span className={styles.detailIcon}><CalIcon /></span>
          <span>{appt.date}</span>
        </div>
        <div className={styles.detail}>
          <span className={styles.detailIcon}><ClockIcon /></span>
          <span>{appt.time}</span>
        </div>
        <div className={styles.detail}>
          <span className={styles.detailIcon}><WrenchIcon /></span>
          <span className={styles.confCode}>{appt.confirmation}</span>
        </div>
      </div>

      {/* Cancel button — only for active, non-cancelled */}
      {onCancel && !isCancelled && (
        <div className={styles.cardActions}>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => onCancel(appt.id)}
            disabled={cancelling}
          >
            {cancelling ? 'Cancelling…' : 'Cancel Appointment'}
          </button>
        </div>
      )}
    </div>
  );
}
