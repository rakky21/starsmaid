import { useState } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";
import Auth from "../../utils/auth";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CREATE_APPOINTMENT = gql`
  mutation CreateAppointment(
    $userId: ID!
    $date: String!
    $time: String!
    $service: String!
  ) {
    createAppointment(
      userId: $userId
      date: $date
      time: $time
      service: $service
    ) {
      id
      date
      time
      service
      confirmation
    }
  }
`;
const GET_BOOKED_TIMES = gql`
  query GetBookedTimes($date: String!) {
    bookedTimes(date: $date)
  }
`;

export default function BookingApp() {
  const [confirmed, setConfirmed] = useState(false);
  const [appointment, setAppointment] = useState(null);
  const [formState, setFormState] = useState({
    date: "",
    time: "",
    service: "",
  });
  const { data } = useQuery(GET_BOOKED_TIMES, {
    variables: { date: formState.date },
    skip: !formState.date,
  });
  const [createAppointment, { loading, error }] =
    useMutation(CREATE_APPOINTMENT);
  const services = [
    "Standard Cleaning",
    "Deep Cleaning",
    "Carpet Cleaning",
    "Window Cleaning",
    "Minor Repairs",
    "Plumbing Repair",
    "Electrical Repair",
  ];
  const generateTimes = () => {
    const times = [];
    for (let hour = 9; hour <= 18; hour++) {
      const period = hour > 12 ? "PM" : "AM";
      const displayHour = hour > 12 ? hour - 12 : hour;

      times.push(`${displayHour}:00 ${period}`);
      times.push(`${displayHour}:30 ${period}`);
    }
    return times;
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setConfirmed(false);
    setAppointment(null);
    // Quick validation
    if (!Auth.loggedIn()) {
      return alert("You Must Login First");
    }
    // Confirms there are no blank fields
    if (!formState.date || !formState.time || !formState.service) {
      alert("Please complete all fields");
      return;
    }
    try {
      // Decode the token to get the user ID
      const profile = Auth.getProfile();
      const userId = profile.data.id;
      // SPLITE DATE HERE, returns M/D/Y
      const [year, month, day] = formState.date.split("-");
      const formattedDate = `${month}/${day}/${year}`;
      // Pass the dynamic userId to the mutation
      const { data } = await createAppointment({
        variables: {
          userId: userId,
          time: formState.time,
          service: formState.service,
          date: formattedDate,
        },
      });
      if (data) {
        setAppointment(data.createAppointment);
        setConfirmed(true);
        setFormState({ date: "", time: "", service: "" });
      }
    } catch (err) {
      console.log("Mutation Error: ", err.message);
    }
  };
  const bookedTimes = data?.bookedTimes || [];
  const handleReset = () => {
    setConfirmed(false);
    setAppointment(null);
    setFormState({ date: "", time: "", service: "" });
  };
  return (
    <section className="scheduler_section">
      <form className="scheduler_body" onSubmit={handleSubmit}>
        <h1 className="scheduler_title">Book a Service</h1>
        {/* Date Picker */}
        <label>Select a date</label>
        <DatePicker
          selected={formState.date ? new Date(formState.date) : null}
          onChange={(date) =>
            setFormState({
              ...formState,
              date: date.toISOString().split("T")[0],
            })
          }
          minDate={new Date()}
          dayClassName={(date) => {
            const y = date.getFullYear();
            const m = String(date.getMonth() + 1).padStart(2, "0");
            const d = String(date.getDate()).padStart(2, "0");

            const formatted = `${m}/${d}/${y}`;

            return bookedTimes.includes(formatted) ? "booked-day" : "";
          }}
        />
        {/* Time Picker */}
        <label>Select a time</label>
        <select name="time" value={formState.time} onChange={handleChange}>
          <option value="">-- Choose a time --</option>
          {generateTimes().map((t) => {
            const isBooked = bookedTimes.includes(t);
            const isSelected = formState.includes === t && !isBooked;
            return (
              <option
                key={t}
                value={t}
                disabled={isBooked}
                style={
                  isBooked
                    ? { color: "white", backgroundColor: "#ff4d4d" }
                    : isSelected
                      ? {
                          backgroundColor: "#2ecc71",
                          color: "white",
                        }
                      : {}
                }
              >
                {t} {isBooked ? "(Already Booked)" : ""}
              </option>
            );
          })}
        </select>
        {/* Service Dropdown */}
        <label>Select a service</label>
        <select
          name="service"
          value={formState.service}
          onChange={handleChange}
          disabled={confirmed}
        >
          <option value="">-- Choose a service --</option>
          {services.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        <br />
        <button className="btn" type="submit" disabled={loading || confirmed}>
          {loading ? "Booking... " : "Confirm"}
        </button>
        {error && (<p className="error_message"> {error.message}</p>)}
      </form>
      {confirmed && appointment && (
        <div className="schedule_confirmed">
          <h2>Booking Confirmed!</h2>
          <p>
            <strong>Date:</strong> {appointment.date}
          </p>
          <p>
            <strong>Time:</strong> {appointment.time}
          </p>
          <p>
            <strong>Service:</strong> {appointment.service}
          </p>
          <p>
            <strong>Confirmation Code:</strong> {appointment.confirmation}
          </p>

          <button className="btn reset_btn" onClick={handleReset}>
            {" "}
            Schedule Another Appointment
          </button>
        </div>
      )}
    </section>
  );
}
