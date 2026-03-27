import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [user, setUser] = useState(null);
  const [view, setView] = useState("home");

  const [booking, setBooking] = useState({
    date: null,
    time: null,
    service: null,
  });

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        view,
        setView,
        booking,
        setBooking,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);