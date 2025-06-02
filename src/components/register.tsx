import { useState } from "react";
import "./loginregister.css";

function Register() {
  const [email, setEmail] = useState("");
  const [uname, setUname] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const validateEmail = (email: string): boolean => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const validateUsername = (username: string): boolean => {
    const regex = /^[A-Za-z][A-Za-z0-9_]*$/;
    return regex.test(username);
  };

  const validatePassword = (password: string): boolean => {
    return password.length >= 8;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Invalid email format.");
      return;
    }

    if (!validateUsername(uname)) {
      setError(
        "Username must start with a letter and can contain only letters, numbers, and underscores."
      );
      return;
    }

    if (!validatePassword(password)) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    setError("");
    alert("Registration successful!");

    // console.log({ email, uname, password });
  };

  return (
    <div className="container">
      <form className="box" onSubmit={handleSubmit}>
        <h2>Register</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Username"
          value={uname}
          onChange={(e) => setUname(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <p className="error">{error}</p>
        <button type="submit">Register</button>
        <div className="link">
          Already have an account? <a href="/login">Login</a>
        </div>
      </form>
    </div>
  );
}

export default Register;
