import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import loginImg from "../../Asserts/login.png";

const Login = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

const handleLogin = async (e) => {
  e.preventDefault();

  // Basic validation
  if (!email.trim()) {
    alert("Please enter your email");
    return;
  }

  if (!password) {
    alert("Please enter your password");
    return;
  }

  setLoading(true);

  try {
const response = await fetch(
  `${import.meta.env.VITE_API_URL}/api/admin/login`,
  {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      email: email.trim(),
      password: password,
    }),
  }
);

    const data = await response.json();

    console.log("Login Response:", data);

    // WRONG EMAIL / PASSWORD
    if (!response.ok) {
      alert(data.message || "Invalid email or password");
      return;
    }

    // LOGIN SUCCESS
    localStorage.setItem("adminToken", data.token);

    localStorage.setItem(
      "admin",
      JSON.stringify(data.admin)
    );

    alert(`Welcome ${data.admin.name}!`);

    navigate("/admin/dashboard");
  } catch (error) {
    console.error("Login Error:", error);

    alert("Unable to connect to server");
  } finally {
    setLoading(false);
  }
};

  return (
    <section className="min-h-screen bg-[#0d0d0d] flex items-center justify-center p-0 lg:p-8">

      <div className="w-full max-w-7xl min-h-screen lg:min-h-[760px] bg-[#111] lg:rounded-3xl overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,.45)] grid lg:grid-cols-2">

        <div className="relative hidden lg:flex flex-col justify-between min-h-[760px] overflow-hidden ">

          <img
            src={loginImg}
            alt="Gym"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30"></div>

          <div className="absolute -left-24 top-0 h-full w-64 bg-red-600 rotate-[12deg] opacity-25"></div>

<div className="absolute left-24 top-0 h-full w-20 bg-red-700 rotate-[12deg] opacity-20"></div>

          <div className="absolute inset-0 p-12 flex flex-col justify-between p-5">

            {/* Logo */}

            <div>

              <div className="flex items-center gap-4 ">

                <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center shadow-xl">

                  <i className="bi bi-lightning-charge text-white text-3xl"></i>

                </div>

                <div>

                 <h1 className="text-5xl sm:text-6xl xl:text-7xl font-black tracking-[8px] sm:tracking-[10px] text-white lg:text-red-600">
  OCHRÉ
</h1>

                  <p className="text-white tracking-[6px] uppercase text-sm">
                    Fitness Center
                  </p>

                </div>

              </div>

            </div>

            {/* Heading */}

            <div>

              <p className="text-white text-5xl font-light uppercase">
                Strong Body
              </p>

              <h2 className="text-6xl font-black uppercase leading-none mt-3 !text-[#c1121f]">
  Strong Mind
</h2>

              <div className="w-20 h-1 bg-red-600 mt-8 rounded-full"></div>

              <p className="text-gray-300 text-lg leading-8 mt-8 max-w-md">
                Manage your gym members, registrations,
                contact enquiries and monitor your
                fitness centre activities with ease.
              </p>

            </div>

            {/* Bottom Features */}

            <div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-8">

              <div className="text-center">

                <i className="bi bi-people-fill text-red-600 text-3xl"></i>

                <h3 className="text-white font-bold mt-4 uppercase text-sm">
                  Members
                </h3>

                <p className="text-gray-400 text-xs mt-1">
                  Management
                </p>

              </div>

              <div className="text-center">

                <i className="bi bi-chat-left-text-fill text-red-600 text-3xl"></i>

                <h3 className="text-white font-bold mt-4 uppercase text-sm">
                  Enquiries
                </h3>

                <p className="text-gray-400 text-xs mt-1">
                  Tracking
                </p>

              </div>

              <div className="text-center">

                <i className="bi bi-bar-chart-fill text-red-600 text-3xl"></i>

                <h3 className="text-white font-bold mt-4 uppercase text-sm">
                  Performance
                </h3>

                <p className="text-gray-400 text-xs mt-1">
                  Overview
                </p>

              </div>

            </div>

          </div>

        </div>

        <div className="flex items-center justify-center bg-[#181818] px-6 py-12 lg:px-16 m-2">

          <div className="w-full max-w-[430px]">

            {/* Logo */}

            <div className="text-center mb-8">
<h1 className="text-5xl font-black tracking-[3px] !text-[#c1121f]">
  OCHRÉ
</h1>

              <p className="text-white uppercase tracking-[5px] text-sm mt-2">
                Fitness Center
              </p>

            </div>

            {/* Login Card */}

            <div className="bg-white rounded-[32px] shadow-[0_30px_80px_rgba(0,0,0,.25)] p-8 md:p-10 p-3">

              <div className="flex justify-center">

                <div className="w-28 h-28 rounded-full bg-red-50 border-4 border-red-100 flex items-center justify-center shadow-lg">

                  <i className="bi bi-shield-lock text-red-600 text-5xl"></i>

                </div>

              </div>

              <h2 className="text-3xl md:text-4xl font-black tracking-wider text-center mt-8">
                ADMIN LOGIN
              </h2>

              <p className="text-center text-gray-500 mt-3">
                Welcome back! Please login to continue
              </p>

              <form
  onSubmit={handleLogin}
  className="mt-10 space-y-6"
>
                              {/* ================= EMAIL ================= */}

              <div>

                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>

                <div className="flex items-center h-16 border border-gray-300 rounded-xl px-4 focus-within:border-red-600 focus-within:ring-2 focus-within:ring-red-100 transition-all m-2">

                  <i className="bi bi-envelope text-red-600 text-xl mr-2 px-2"></i>

                 <input
  type="email"
  placeholder="Enter your email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="w-full outline-none bg-transparent"
/>

                </div>

              </div>


              <div >

                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Password
                </label>

                <div className="flex items-center h-16 border border-gray-300 rounded-xl px-4 focus-within:border-red-600 focus-within:ring-2 focus-within:ring-red-100 transition-all m-2">

                  <i className="bi bi-lock text-red-600 text-xl mr-2 px-2"></i>

<div className="flex items-center w-full">
  <input
    type={showPassword ? "text" : "password"}
    placeholder="Enter your password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    className="w-full outline-none bg-transparent"
  />

  <button
    type="button"
    onClick={() => setShowPassword((prev) => !prev)}
    className="ml-3 text-gray-500 hover:text-red-600 transition"
    aria-label={showPassword ? "Hide password" : "Show password"}
  >
    <i
      className={`bi ${
        showPassword ? "bi-eye-slash-fill" : "bi-eye-fill"
      } text-xl`}
    ></i>
  </button>
</div>
                </div>

              </div>

              <div className="flex items-center justify-between text-sm my-3">

                <label className="flex items-center gap-2 cursor-pointer">

                  <input
                    type="checkbox"
                    className="accent-red-600 w-4 h-4 "
                  />

                  <span className="text-gray-600 px-1">
                    Remember Me
                  </span>

                </label>
            </div>

                             <button
  type="submit"
  disabled={loading}
  className="
    w-full
    h-14
    rounded-xl
    bg-red-600
    hover:bg-red-700
    text-white
    font-bold
    uppercase
    tracking-wider
    text-lg
    transition-all
    duration-300
    flex
    justify-center
    items-center
    gap-3
    disabled:opacity-60
    disabled:cursor-not-allowed
  "
>
  {loading ? (
    <>
      <i className="bi bi-arrow-repeat animate-spin"></i>
      Checking...
    </>
  ) : (
    <>
      <i className="bi bi-box-arrow-in-right"></i>
      Login To Dashboard
    </>
  )}
</button>

              {/* ================= DIVIDER ================= */}

              <div className="flex items-center gap-4">

                <div className="flex-1 h-px bg-gray-300"></div>

                <span className="text-gray-400 text-sm font-medium">
                  OR
                </span>

                <div className="flex-1 h-px bg-gray-300"></div>

              </div>

              {/* ================= CREATE ACCOUNT ================= */}

              <div className="text-center">

                <p className="text-gray-600">
                  Don't have an Admin Account?
                </p>

                <Link
                  to="/signup"
                  className="inline-flex items-center gap-2 mt-3 mb-3 px-4 py-3 border-2 border-red-600 rounded-xl font-semibold text-red-600 hover:bg-red-600 hover:text-white transition-all"
                >

                  <i className="bi bi-person-plus-fill"></i>

                  Create Account

                </Link>

              </div>
                            {/* ================= FOOTER ================= */}

              <div className="pt-8 mt-8 border-t border-gray-200 text-center">

                <p className="text-sm text-gray-500">
                  © 2026 OCHRÉ Fitness Center. All Rights Reserved.
                </p>

                <p className="text-sm text-gray-500 mt-2">
                  Designed & Developed by{" "}
                  <span className="font-bold text-red-600">
                    WEBNIQO
                  </span>
                </p>

              </div>
            </form>

          </div> 

        </div> 
      </div> 

    </div> 

  </section>
);
};

export default Login;