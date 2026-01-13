import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;

  const check = async () => {
    if (!email.trim() || !password.trim()) {
      setErr("Email and Password are required!");
      return;
    }

    setErr("");

    try {
      const res = await axios.post(`${API_URL}/login`, {
        username: email,
        password: password,
      });

      console.log("Backend response:", res.data);

      if (res.data.success === true) {
        navigate("/success");
      } else {
        navigate("/fail");
      }
    } catch (error) {
      console.error(error);
      setErr("Server error. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="bg-black bg-opacity-80 p-6 rounded-md w-full max-w-md text-white">
        <h2 className="text-3xl font-bold mb-4 text-center">Sign In</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-4"
        />

        {err && <p className="text-red-500 mb-2">{err}</p>}

        <button
          type="button"
          onClick={check}
          className="bg-red-700 w-full p-3 rounded"
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;
