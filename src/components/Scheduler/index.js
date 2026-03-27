import { useEffect, useState } from "react";
import { useApp } from "../../utils/AppProvider.js";
import { gqlRequest } from "../../api/graphql.js";
import { getDateKey, genTimes } from "../../utils/date.js";

export default function Scheduler() {
  const { booking, setBooking, setView, user } = useApp();
  const [bookedTimes, setBookedTimes] = useState([]);

  useEffect(() => {
    if (!booking.date) return;

    const fetchTimes = async () => {
      const data = await gqlRequest(
        `query($date:String!){
          bookedTimes(date:$date)
        }`,
        { date: getDateKey(booking.date) },
      );

      setBookedTimes(data.bookedTimes);
    };

    fetchTimes();
  }, [booking.date]);

  const confirm = async () => {
    const data = await gqlRequest(
      `mutation($userId:ID!, $date:String!, $time:String!, $service:String!){
        createAppointment(userId:$userId,date:$date,time:$time,service:$service){
          id
        }
      }`,
      {
        userId: user.id,
        date: getDateKey(booking.date),
        time: booking.time,
        service: booking.service,
      },
    );

    setView("confirm");
  };

  return (
    <div>
      <input
        type="date"
        onChange={(e) =>
          setBooking({ ...booking, date: new Date(e.target.value) })
        }
      />

      <div>
        {genTimes().map((t) => (
          <button
            key={t}
            disabled={bookedTimes.includes(t)}
            onClick={() => setBooking({ ...booking, time: t })}
          >
            {t}
          </button>
        ))}
      </div>

      <button onClick={confirm}>Confirm</button>
    </div>
  );
}
