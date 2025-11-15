import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ADMIN_CREDENTIALS } from "../adminCredentials";

export default function AdminLogin({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (
      username === ADMIN_CREDENTIALS.username &&
      password === ADMIN_CREDENTIALS.password
    ) {
      onLogin();
      navigate("/questions");
    } else {
      setError("Invalid admin credentials");
    }
  }

  return (
    <div className="admin-login-wrapper">
      <div className="admin-login-card">

        <h2 className="admin-login-title">Admin Login</h2>

        {error && <div className="admin-login-error">{error}</div>}

        <form onSubmit={handleSubmit}>
          
          <input
            className="admin-login-input"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            className="admin-login-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="admin-login-btn" type="submit">
            Login
          </button>

        </form>
      </div>
    </div>
  );
}
