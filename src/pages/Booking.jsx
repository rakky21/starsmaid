import Scheduler    from '../components/Scheduler/Scheduler.jsx';
import Confirmation from '../components/Confirmation/Confirmation.jsx';
import { useState } from 'react';

export default function Booking() {
  const [confirmed, setConfirmed]     = useState(false);
  const [appointment, setAppointment] = useState(null);

  const handleConfirmed = (appt) => {
    setAppointment(appt);
    setConfirmed(true);
  };

  const handleReset = () => {
    setAppointment(null);
    setConfirmed(false);
  };

  return confirmed && appointment
    ? <Confirmation appointment={appointment} onReset={handleReset} />
    : <Scheduler onConfirmed={handleConfirmed} />;
}