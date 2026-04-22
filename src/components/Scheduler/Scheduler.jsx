import { useState, useMemo } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { CREATE_APPOINTMENT, GET_BOOKED_TIMES, GET_APPOINTMENT } from '../../utils/graphql.js';
import styles from './Scheduler.module.css';

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];
const DOWS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

const SERVICES = [
  { name: 'Standard Cleaning', cat: 'Cleaning', price: 'From $89' },
  { name: 'Deep Cleaning', cat: 'Cleaning', price: 'From $149' },
  { name: 'Carpet Cleaning', cat: 'Cleaning', price: 'From $99' },
  { name: 'Window Cleaning', cat: 'Cleaning', price: 'From $65' },
  { name: 'Minor Repairs', cat: 'Renovation', price: 'From $75' },
  { name: 'Plumbing Repair', cat: 'Renovation', price: 'From $95' },
  { name: 'Electrical Repair', cat: 'Renovation', price: 'From $110' },
];

function generateTimes() {
  const times = [];
  for (let h = 9; h <= 18; h++) {
    const period = h >= 12 ? 'PM' : 'AM';
    const dh = h > 12 ? h - 12 : h;
    times.push(`${dh}:00 ${period}`);
    if (h < 18) times.push(`${dh}:30 ${period}`);
  }
  return times;
}

function formatDate(date) {
  if (!date) return '';
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  const y = date.getFullYear();
  return `${m}/${d}/${y}`;
}

// Defined OUTSIDE — prevents input remount bug
function SumRow({ icon, label, value }) {
  return (
    <div className={styles.sumRow}>
      <div className={styles.sumRowIcon}>{icon}</div>
      <div>
        <div className={styles.sumRowLabel}>{label}</div>
        <div className={styles.sumRowValue}>{value}</div>
      </div>
    </div>
  );
}

const TIMES = generateTimes();

export default function Scheduler({ onConfirmed }) {
  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  const [calY, setCalY] = useState(today.getFullYear());
  const [calM, setCalM] = useState(today.getMonth());
  const [selDate, setSelDate] = useState(null);
  const [selTime, setSelTime] = useState(null);
  const [selService, setSelService] = useState(null);
  const [formErr, setFormErr] = useState('');

  // Fetch booked times for the selected date — always fresh from server
  const formattedDate = selDate ? formatDate(selDate) : '';
  const { data: bookedData } = useQuery(GET_BOOKED_TIMES, {
    variables: { date: formattedDate },
    skip: !selDate,
    fetchPolicy: 'network-only',
  });
  const bookedTimes = bookedData?.bookedTimes || [];

  // After booking: refetch both the appointments list AND booked times
  const [createAppointment, { loading }] = useMutation(CREATE_APPOINTMENT, {
    refetchQueries: [
      { query: GET_APPOINTMENT },
      ...(selDate
        ? [{ query: GET_BOOKED_TIMES, variables: { date: formattedDate } }]
        : []
      ),
    ],
    awaitRefetchQueries: true,
  });

  /* ── Step tracking ── */
  const stepDone = (n) => [selDate, selTime, selService].slice(0, n - 2).every(Boolean);
  const stepActive = (n) => {
    if (n === 2) return !selDate;
    if (n === 3) return !!selDate && !selTime;
    if (n === 4) return !!selDate && !!selTime && !selService;
    if (n === 5) return !!selDate && !!selTime && !!selService;
    return false;
  };

  /* ── Calendar ── */
  const calPrev = () => {
    if (calM === 0) { setCalM(11); setCalY(y => y - 1); }
    else setCalM(m => m - 1);
  };
  const calNext = () => {
    if (calM === 11) { setCalM(0); setCalY(y => y + 1); }
    else setCalM(m => m + 1);
  };

  const calDays = useMemo(() => {
    const firstDay = new Date(calY, calM, 1).getDay();
    const daysInMonth = new Date(calY, calM + 1, 0).getDate();
    return [
      ...Array(firstDay).fill(null),
      ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
    ];
  }, [calY, calM]);

  const selectDay = (day) => {
    if (!day) return;
    const d = new Date(calY, calM, day);
    if (d < today) return;
    setSelDate(d);
    setSelTime(null);
  };

  const isToday = (day) => day && new Date(calY, calM, day).getTime() === today.getTime();
  const isPast = (day) => day && new Date(calY, calM, day) < today;
  const isSel = (day) => day && selDate &&
    selDate.getFullYear() === calY &&
    selDate.getMonth() === calM &&
    selDate.getDate() === day;

  /* ── Submit ── */
  const handleSubmit = async () => {
    if (!selDate || !selTime || !selService) {
      setFormErr('Please select a date, time, and service before confirming.');
      return;
    }
    setFormErr('');
    try {
      const { data } = await createAppointment({
        variables: {
          date: formatDate(selDate),
          time: selTime,
          service: selService,
        },
      });
      onConfirmed(data.createAppointment);
    } catch (err) {
      setFormErr(err.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.main}>
        <h1 className={styles.h1}>Book a Service</h1>
        <p className={styles.sub}>Choose your date, time, and service — we'll handle the rest.</p>

        {/* Steps */}
        <div className={styles.steps}>
          {[
            { n: 1, label: 'Logged In', done: true },
            { n: 2, label: 'Pick Date' },
            { n: 3, label: 'Pick Time' },
            { n: 4, label: 'Service' },
            { n: 5, label: 'Confirm' },
          ].map((s, i, arr) => (
            <div key={s.n} className={styles.stepGroup}>
              <div className={[
                styles.step,
                s.done || stepDone(s.n) ? styles.stepDone : '',
                stepActive(s.n) ? styles.stepActive : '',
              ].join(' ')}>
                <div className={styles.stepNum}>
                  {s.done || stepDone(s.n)
                    ? <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    : s.n}
                </div>
                <span>{s.label}</span>
              </div>
              {i < arr.length - 1 && <div className={styles.stepSep} />}
            </div>
          ))}
        </div>

        {/* ── Date Card ── */}
        <div className={styles.card}>
          <div className={styles.cardTitle}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Select a Date
          </div>
          <div className={styles.calNav}>
            <button className={styles.calBtn} onClick={calPrev} aria-label="Previous month">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
            </button>
            <span className={styles.calMonth}>{MONTHS[calM]} {calY}</span>
            <button className={styles.calBtn} onClick={calNext} aria-label="Next month">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
            </button>
          </div>
          <div className={styles.calGrid}>
            {DOWS.map(d => <div key={d} className={styles.calDow}>{d}</div>)}
            {calDays.map((day, i) => (
              <div
                key={i}
                onClick={() => selectDay(day)}
                className={[
                  styles.calDay,
                  !day ? styles.calEmpty : '',
                  isPast(day) ? styles.calPast : '',
                  isToday(day) ? styles.calToday : '',
                  isSel(day) ? styles.calSelected : '',
                ].join(' ')}
              >
                {day}
              </div>
            ))}
          </div>
        </div>

        {/* ── Time Card ── */}
        <div className={styles.card}>
          <div className={styles.cardTitle}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            Select a Time
            <span className="tag tag-accent" style={{ marginLeft: 'auto', fontSize: '.7rem' }}>
              9 AM – 6 PM
            </span>
          </div>

          {!selDate ? (
            <p className={styles.hint}>Select a date above to see available times.</p>
          ) : (
            <div className={styles.timeGrid}>
              {TIMES.map((t) => {
                const booked = bookedTimes.includes(t);
                const sel = selTime === t;
                return (
                  <button
                    key={t}
                    disabled={booked}
                    onClick={() => setSelTime(t)}
                    className={[
                      styles.timeSlot,
                      booked ? styles.timeBooked : '',
                      sel ? styles.timeSelected : '',
                    ].join(' ')}
                    aria-label={booked ? `${t} — already booked` : t}
                  >
                    {/* Time label — gets red + strikethrough when booked */}
                    <span className={styles.timeLabel}>{t}</span>
                    {booked && <span className={styles.timeTakenBadge}>Taken</span>}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* ── Service Card ── */}
        <div className={styles.card}>
          <div className={styles.cardTitle}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 11 12 14 22 4" />
              <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
            </svg>
            Select a Service
          </div>
          <div className={styles.pillList}>
            {SERVICES.map((s) => {
              const sel = selService === s.name;
              return (
                <div
                  key={s.name}
                  className={`${styles.pill} ${sel ? styles.pillSel : ''}`}
                  onClick={() => setSelService(s.name)}
                >
                  <div>
                    <div className={styles.pillName}>{s.name}</div>
                    <div className={styles.pillSub}>{s.cat} · {s.price}</div>
                  </div>
                  <div className={`${styles.pillCheck} ${sel ? styles.pillCheckSel : ''}`}>
                    {sel && (
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {formErr && (
          <div className="form-err" style={{ marginBottom: 16 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
              <circle cx="12" cy="16" r="1" fill="#fff" />
            </svg>
            {formErr}
          </div>
        )}

        <button
          className="btn btn-primary"
          style={{ minWidth: 200 }}
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? 'Booking…' : 'Confirm Appointment'}
        </button>
      </div>

      {/* ── Sidebar ── */}
      <aside className={styles.sidebar}>
        <h3 className={styles.sidebarTitle}>Your Booking</h3>
        <div className={styles.sumRows}>
          <SumRow
            icon={<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>}
            label="Date"
            value={selDate ? selDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' }) : 'Not selected'}
          />
          <SumRow
            icon={<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>}
            label="Time"
            value={selTime || 'Not selected'}
          />
          <SumRow
            icon={<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" /></svg>}
            label="Service"
            value={selService || 'Not selected'}
          />
        </div>
        <div className={styles.sumDivider} />
        {selDate && selTime && selService ? (
          <div>
            <p className={styles.sumNote}>You'll receive a confirmation after booking.</p>
            <button className="btn btn-primary btn-full" onClick={handleSubmit} disabled={loading}>
              {loading ? 'Booking…' : 'Confirm & Book'}
            </button>
          </div>
        ) : (
          <p className={styles.sumPlaceholder}>Fill in your details to see your booking summary.</p>
        )}
      </aside>
    </div>
  );
}
