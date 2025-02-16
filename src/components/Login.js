import { useState } from "react";
import axios from "axios";

function Login({ setToken, setUser }) {
  const [id, setId] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:3000/login", { id });
      setToken(res.data.token);
      setUser(res.data.name);
    } catch (error) {
      alert("ID invalid!");
    }
  };

  return (
    <div>
      <h2>Autentificare</h2>
      <input type="text" placeholder="ID Curier" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
