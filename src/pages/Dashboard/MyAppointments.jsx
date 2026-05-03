import { useQuery, useMutation, gql, createHttpLink } from "@apollo/client";
import { useEffect, useMemo } from 'react';
import { GET_APPOINTMENT } from '../../utils/graphql';

const GET_APPOINTMENTS = gql`
  query {
    myAppointments {
      id
      date
      time
      service
      status
      confirmation
      technician
    }
  }
`;
const CANCEL_APPOINTMENT = gql`
  mutation cancelAppointment($id: ID!) {
    cancelAppointment(id: $id) {
      id
      status
    }
  }
`;

console.log("token:", localStorage.getItem("id_token"));

export default function MyAppointments() {
  const { loading, error, data, refetch } = useQuery(GET_APPOINTMENTS);
  const [cancelAppointment] = useMutation(CANCEL_APPOINTMENT);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  const now = new Date();
  const parseDateTime = (date, time) => {
    const [timePart, modifier] = time.split(" ");
    let [hours, minutes] = timePart.split(":");
    if (modifier === "PM" && hours !== "12") hours = String(+hours + 12);
    if (modifier === "AM" && hours === "12") hours = "00";
    return new Date(`${date}T${hours}:${minutes}:00`);
  };
  const isPast = (a) => parseDateTime(a.date, a.time) < now;
  const handleCancel = async (id) => {
    try {

      await cancelAppointment({ variables: { id } });
      await refetch();
    } catch (err) {
      alert(err.message || "Failed to cancel. Please try again.");
    }
  };
  const sortedAppointments = data?.myAppointments
    ? [...data.myAppointments].sort((a, b) => {
      const aPast = isPast(a);
      const bPast = isPast(b);

      if (aPast && !bPast) return 1;
      if (!aPast && bPast) return -1;

      if (!aPast && !bPast) {
        return parseDateTime(a.date, a.time) - parseDateTime(b.date, b.time);
      }

      return parseDateTime(b.date, b.time) - parseDateTime(a.date, a.time);
    })
    : [];
  return (
    <main style={{ padding: "72px 0", background: "#F8FAFC" }}>
      <div className="container">
        <h1>My Appointments</h1>
        {sortedAppointments.map((a) => {
          const past = isPast(a);
          return (
            <article key={a.id}>
              <h3>{a.service}</h3>
              <p>{a.date} · {a.time}</p>
              {!past && a.status !== "cancelled" && (
                <button onClick={() => handleCancel(a.id)}>
                  Cancel
                </button>
              )}
            </article>
          );
        })}
      </div>
    </main>
  );
}
