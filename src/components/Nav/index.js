import { useApp } from "../../utils/AppProvider.js";

export default function Nav() {
  const { user, setUser, setView } = useApp();

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setView("home");
  };

  return (
    <div className="nav">
      {user ? (
        <>
          <span>{user.initials}</span>
          <button onClick={() => setView("scheduler")}>Book</button>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <button onClick={() => setView("auth")}>Login</button>
          <button onClick={() => setView("auth")}>Signup</button>
        </>
      )}
    </div>
  );
}