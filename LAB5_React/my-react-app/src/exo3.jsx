import React, { useState } from "react";

export default function Exo3() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!username) return;
    setUsers((prev) => [...prev, { id: Date.now(), username, password }]);
    setUsername("");
    setPassword("");
  }

  function handleDelete(id) {
    setUsers((prev) => prev.filter((u) => u.id !== id));
  }

  return (
    <div className="exo3-root">
      <h2>Exercise 3 — Authentication form + users list</h2>

      <form className="exo3-form" onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input className="exo3-input" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input className="exo3-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="exo3-actions">
          <button type="submit">Submit</button>
        </div>
      </form>

      <div className="exo3-users">
        <h3>Submitted users:</h3>
        {users.length === 0 ? (
          <p className="exo3-empty">No users yet.</p>
        ) : (
          <ul>
            {users.map((u) => (
              <li key={u.id} className="exo3-user">
                <div>
                  <strong>{u.username}</strong>
                  <div className="exo3-meta"><em>{u.password}</em></div>
                </div>
                <button onClick={() => handleDelete(u.id)} className="small-btn">Delete</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
