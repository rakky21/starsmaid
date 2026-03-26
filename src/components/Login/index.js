import { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import Auth from "../../utils/auth.js";


const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        name
      }
    }
  }
`;

export default function Login() {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN_USER);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await login({
        variables: {
          email: formState.email,
          password: formState.password,
        },
      });
      // extract the token from the data object
      const token = data.login.token;

      Auth.login(token);
    } catch (e) {
      console.error(e);
    }
  };
  return (
      <form onSubmit={handleFormSubmit} className="login_Form">
        <h1 className="login_Title">
          Welcome Back
        </h1>
        <label> Login </label>
        <input
          name="email"
          type="email"
          placeholder="Email Address"
          value={formState.email}
          onChange={handleChange}
        />
        <label> Password </label>
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={formState.password}
          onChange={handleChange}
        />
        <button type="submit" className="btn">
          {" "}
          Login
        </button>
        {error && <p> Login Failed</p>}
      </form>
  );
}
