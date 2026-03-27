import { useApp } from "../../utils/AppProvider.js";

export default function Confirm() {
  const { booking } = useApp();

  return (
    <div>
      <h2>Confirmed</h2>
      <p>{booking.service}</p>
      <p>{booking.time}</p>
    </div>
  );
}