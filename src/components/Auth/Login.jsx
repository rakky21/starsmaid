import { useState } from "react";
import { useMutation } from "@apollo/client";

import { LOGIN, CREATE_USER } from "../../utils/graphql.js";

import Auth from "../../utils/auth.js";

import styles from "./Auth.module.css";

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  const [errors, setErrors] = useState({});

  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
  });

  const [login, { loading: loginLoading }] = useMutation(LOGIN);

  const [createUser, { loading: signupLoading }] = useMutation(CREATE_USER);

  const loading = loginLoading || signupLoading;

  /* =========================
     VALIDATION
  ========================= */

  const validate = () => {
    const e = {};

    if (!isLogin) {
      if (!form.name.trim()) {
        e.name = "First name is required";
      }

      if (!form.lastName.trim()) {
        e.lastName = "Last name is required";
      }
    }

    if (!form.email.trim()) {
      e.email = "Email is required";
    }

    if (!form.password.trim()) {
      e.password = "Password is required";
    }

    if (form.password.length < 8) {
      e.password = "Password must be at least 8 characters";
    }

    return e;
  };

  /* =========================
     HANDLE CHANGE
  ========================= */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  /* =========================
     SUBMIT
  ========================= */

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    try {
      if (isLogin) {
        const { data } = await login({
          variables: {
            email: form.email,
            password: form.password,
          },
        });
        const token = data?.login?.token;
        if (!token) {
          setErrors({ server: "Login failed: no token returned from server." });
          return;
        }
        Auth.login(token);
      } else {
        const { data } = await createUser({
          variables: {
            name: form.name,
            lastName: form.lastName,
            email: form.email,
            password: form.password,
            phone: form.phone,
          },
        });
        const token = data?.login?.token;
        if (!token) {
          setErrors({ server: "Login failed: no token returned from server." });
          return;
        }
        Auth.login(token);
      }
    } catch (err) {
      console.error(err);

      setErrors({
        server:
          err?.graphQLErrors?.[0]?.message ||
          err.message ||
          "Something went wrong.",
      });
    }
  };

  return (
    <div className={styles.formWrap}>
      <h2 className={styles.title}>
        {isLogin ? "Welcome Back" : "Create Account"}
      </h2>

      <p className={styles.sub}>
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <button
          type="button"
          className={styles.switch}
          onClick={() => {
            setErrors({});
            setIsLogin(!isLogin);
          }}
        >
          {isLogin ? "Sign up free" : "Log in"}
        </button>
      </p>

      <form onSubmit={handleSubmit} noValidate>
        {/* FIRST NAME */}
        {!isLogin && (
          <div className={styles.field}>
            <label htmlFor="name">First Name</label>

            <input
              id="name"
              name="name"
              type="text"
              placeholder="John"
              value={form.name}
              onChange={handleChange}
            />

            {errors.name && (
              <span className={styles.errMsg}>{errors.name}</span>
            )}
          </div>
        )}

        {/* LAST NAME */}
        {!isLogin && (
          <div className={styles.field}>
            <label htmlFor="lastName">Last Name</label>

            <input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Doe"
              value={form.lastName}
              onChange={handleChange}
            />

            {errors.lastName && (
              <span className={styles.errMsg}>{errors.lastName}</span>
            )}
          </div>
        )}

        {/* PHONE */}
        {!isLogin && (
          <div className={styles.field}>
            <label htmlFor="phone">Phone</label>

            <input
              id="phone"
              name="phone"
              type="text"
              placeholder="(555) 555-5555"
              value={form.phone}
              onChange={handleChange}
            />
          </div>
        )}

        {/* EMAIL */}
        <div className={styles.field}>
          <label htmlFor="email">Email</label>

          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={handleChange}
          />

          {errors.email && (
            <span className={styles.errMsg}>{errors.email}</span>
          )}
        </div>

        {/* PASSWORD */}
        <div className={styles.field}>
          <label htmlFor="password">Password</label>

          <input
            id="password"
            name="password"
            type="password"
            placeholder="********"
            value={form.password}
            onChange={handleChange}
          />

          {errors.password && (
            <span className={styles.errMsg}>{errors.password}</span>
          )}
        </div>

        {/* SERVER ERROR */}
        {errors.server && (
          <div className={styles.serverError}>{errors.server}</div>
        )}

        {/* BUTTON */}
        <button
          type="submit"
          className="btn btn-primary btn-full"
          disabled={loading}
        >
          {loading
            ? isLogin
              ? "Logging in..."
              : "Creating Account..."
            : isLogin
              ? "Log In"
              : "Create Account"}
        </button>
      </form>
    </div>
  );
}
