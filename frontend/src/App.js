import React, { useState } from "react";
import axios from "axios";

function App() {
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  // Signup
  const handleSignup = async () => {
    await axios.post("http://localhost:5000/api/signup", signupData);
    alert("Signup Success");
  };

  // Login
  const handleLogin = async () => {
    const res = await axios.post("http://localhost:5000/api/login", loginData);
    alert(res.data);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>My Project</h1>

      {/* Signup */}
      <h2>Signup</h2>
      <input placeholder="Name" onChange={(e) =>
        setSignupData({ ...signupData, name: e.target.value })
      } /><br />

      <input placeholder="Email" onChange={(e) =>
        setSignupData({ ...signupData, email: e.target.value })
      } /><br />

      <input placeholder="Password" onChange={(e) =>
        setSignupData({ ...signupData, password: e.target.value })
      } /><br />

      <button onClick={handleSignup}>Signup</button>

      <hr />

      {/* Login */}
      <h2>Login</h2>
      <input placeholder="Email" onCh        setLoginData({ ...loginData, email: e.target.value })
      } /><br />

      <input placeholder="Password" onChange={(e) =>
        setLoginData({ ...loginData, password: e.target.value })
      } /><br />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default App;