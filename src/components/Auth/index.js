import { useState } from "react";
import { gqlRequest } from "../../api/graphql.js";
import { useApp } from "../../utils/AppProvider.js";

export default function Auth() {
  const { setUser, setView } = useApp();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const data = await gqlRequest(
        `mutation($email:String!, $password:String!){
          login(email:$email,password:$password){
            token
            user { id name lastName }
          }
        }`,
        { email, password }
      );

      const { token, user } = data.login;

      localStorage.setItem("token", token);

      setUser({
        id: user.id,
        name: `${user.name} ${user.lastName}`,
        initials: (user.name[0] + user.lastName[0]).toUpperCase(),
      });

      setView("scheduler");
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input onChange={(e) => setEmail(e.target.value)} />
      <input type="password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={login}>Login</button>
    </div>
  );
}