import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import signupImg from "../../Asserts/singup.png";

const Signup = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    phone: "",
    address: "",
    password: "",
    confirmPassword: "",
    role: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
  const { name, value, type, checked } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: type === "checkbox" ? checked : value,
  }));

  setErrors((prev) => ({
    ...prev,
    [name]: "",
  }));
};

const validateForm = () => {
  const newErrors = {};

  if (!formData.name.trim()) {
    newErrors.name = "Full name is required";
  } else if (formData.name.trim().length < 3) {
    newErrors.name = "Name must contain at least 3 characters";
  }

  if (!formData.email.trim()) {
    newErrors.email = "Email address is required";
  } else if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
  ) {
    newErrors.email = "Enter a valid email address";
  }

  if (!formData.username.trim()) {
    newErrors.username = "Username is required";
  } else if (formData.username.trim().length < 4) {
    newErrors.username =
      "Username must contain at least 4 characters";
  }

  if (!formData.phone.trim()) {
    newErrors.phone = "Phone number is required";
  } else if (!/^[6-9]\d{9}$/.test(formData.phone.trim())) {
    newErrors.phone = "Enter a valid 10-digit mobile number";
  }

  if (!formData.address.trim()) {
    newErrors.address = "Address is required";
  }

  if (!formData.password) {
    newErrors.password = "Password is required";
  } else if (formData.password.length < 6) {
    newErrors.password =
      "Password must contain at least 6 characters";
  }

  if (!formData.confirmPassword) {
    newErrors.confirmPassword = "Confirm your password";
  } else if (
    formData.password !== formData.confirmPassword
  ) {
    newErrors.confirmPassword = "Passwords do not match";
  }

  if (!formData.role) {
    newErrors.role = "Please select an admin role";
  }

  if (!formData.terms) {
    newErrors.terms =
      "You must accept the Terms & Conditions";
  }

  setErrors(newErrors);

  return Object.keys(newErrors).length === 0;
};

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validateForm()) {
    return;
  }

  setLoading(true);

  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/admin/signup`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          username: formData.username,
          phone: formData.phone,
          address: formData.address,
          password: formData.password,
          role: formData.role,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      alert(data.message || "Unable to create account");
      return;
    }

    alert("Admin account created successfully!");
    navigate("/admin");

  } catch (error) {
    console.error("SIGNUP ERROR:", error);
    alert(`Signup Error: ${error.message}`);
  } finally {
    setLoading(false);
  }
};



  return (
    <section className="min-h-screen bg-[#111111] flex items-center justify-center py-10 px-4">

      <div className="w-full max-w-7xl bg-white rounded-3xl overflow-hidden shadow-2xl grid lg:grid-cols-2">

        {/* ================= LEFT SIDE ================= */}

        <div className="relative hidden lg:block">

          <img
            src={signupImg}
            alt="Gym"
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/70"></div>

          {/* Content */}
          <div className="absolute inset-0 p-12 flex flex-col justify-between p-5">

            <div>

              <div className="flex items-center gap-3">

                <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center">

                  <i className="bi bi-lightning-charge text-white text-2xl"></i> 

                </div>

                <div>

  <h1 className="text-5xl sm:text-6xl xl:text-7xl font-black tracking-[8px] sm:tracking-[10px] !text-[#c1121f]">
  OCHRÉ
</h1>

                  <p className="text-white tracking-[5px] text-sm">
                    FITNESS CENTRE
                  </p>

                </div>

              </div>

              <h2 className="text-white text-6xl font-black uppercase leading-tight mt-20">
                ADMIN
                <br />
                <span className="text-red-600">
                  SIGN UP
                </span>
              </h2>

              <p className="text-gray-300 text-lg leading-8 mt-8">
                Create your administrator account to manage
                registrations, contact enquiries and members
                of OCHRÉ Fitness Centre.
              </p>

            </div>

            {/* Bottom Features */}

            <div className="space-y-7">

              <div className="flex gap-4">

                <i className="bi bi-shield-check text-red-600 text-3xl"></i>

                <div>

                  <h3 className="text-white text-xl font-bold">
                    Secure Access
                  </h3>

                  <p className="text-gray-400">
                    Only authorized administrators can login.
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <i className="bi bi-people-fill text-red-600 text-3xl"></i>

                <div>

                  <h3 className="text-white text-xl font-bold">
                    Manage Members
                  </h3>

                  <p className="text-gray-400">
                    View all registrations and memberships.
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <i className="bi bi-envelope-fill text-red-600 text-3xl"></i>

                <div>

                  <h3 className="text-white text-xl font-bold">
                    Contact Requests
                  </h3>

                  <p className="text-gray-400">
                    Monitor and reply to customer enquiries.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* ================= RIGHT SIDE ================= */}

        <div className="p-4 lg:p-14">

          <div className="flex justify-between items-center">

            <div>

              <h2 className="text-4xl font-black">
                Create
                <span className="text-red-600">
                  {" "}Admin Account
                </span>
              </h2>

              <p className="text-gray-500 mt-2">
                Fill in your details to create your account.
              </p>

            </div>


          </div>

          {/* ================= FORM STARTS HERE ================= */}

          <form
  className="mt-10 space-y-6"
  onSubmit={handleSubmit}
  noValidate
>


<div className="grid md:grid-cols-2 gap-6">

  {/* Full Name */}
  <div>
    <label className="block mb-2 font-semibold text-gray-700">
      Full Name
    </label>

    <div className="flex items-center border border-gray-300 rounded-xl px-4 h-14 focus-within:border-red-600 transition">

      <i className="bi bi-person-fill text-red-600 text-xl mr-2 px-2"></i>

      <input
  type="text"
  name="name"
  placeholder="Enter full name"
  value={formData.name}
  onChange={handleChange}
  className="w-full outline-none bg-transparent"
/>

{errors.name && (
  <p className="text-red-600 text-sm mt-1">
    {errors.name}
  </p>
)}

    </div>
  </div>

  {/* Email */}
  <div>
    <label className="block mb-2 font-semibold text-gray-700">
      Email Address
    </label>

    <div className="flex items-center border border-gray-300 rounded-xl px-4 h-14 focus-within:border-red-600 transition">

      <i className="bi bi-envelope-fill text-red-600 text-xl mr-2 px-2"></i>

     <input
  type="email"
  name="email"
  placeholder="Enter email"
  value={formData.email}
  onChange={handleChange}
  className="w-full outline-none bg-transparent"
/>

{errors.email && (
  <p className="text-red-600 text-sm mt-1">
    {errors.email}
  </p>
)}

    </div>
  </div>

  {/* Username */}
  <div>
    <label className="block mb-2 font-semibold text-gray-700">
      Username
    </label>

    <div className="flex items-center border border-gray-300 rounded-xl px-4 h-14 focus-within:border-red-600 transition">

      <i className="bi bi-person-badge-fill text-red-600 text-xl mr-2 px-2"></i>

     <input
  type="text"
  name="username"
  placeholder="Create username"
  value={formData.username}
  onChange={handleChange}
  className="w-full outline-none bg-transparent"
/>

{errors.username && (
  <p className="text-red-600 text-sm mt-1">
    {errors.username}
  </p>
)}

    </div>
  </div>

  {/* Phone */}
  <div>
    <label className="block mb-2 font-semibold text-gray-700">
      Phone Number
    </label>

    <div className="flex items-center border border-gray-300 rounded-xl px-4 h-14 focus-within:border-red-600 transition">

      <i className="bi bi-telephone-fill text-red-600 text-xl mr-2 px-2"></i>

    <input
  type="tel"
  name="phone"
  placeholder="9876543210"
  value={formData.phone}
  onChange={handleChange}
  maxLength="10"
  className="w-full outline-none bg-transparent"
/>

{errors.phone && (
  <p className="text-red-600 text-sm mt-1">
    {errors.phone}
  </p>
)}

    </div>
  </div>

</div>

{/* ================= ADDRESS ================= */}

<div>

  <label className="block mb-2 font-semibold text-gray-700">
    Address
  </label>

  <div className="flex items-start border border-gray-300 rounded-xl p-4 focus-within:border-red-600 transition">

    <i className="bi bi-geo-alt-fill text-red-600 text-xl mr-3 mt-1 px-2"></i>

<textarea
  name="address"
  rows="3"
  placeholder="Enter address..."
  value={formData.address}
  onChange={handleChange}
  className="w-full outline-none resize-none"
></textarea>

{errors.address && (
  <p className="text-red-600 text-sm mt-1">
    {errors.address}
  </p>
)}
  </div>

</div>
{/* ================= PASSWORD SECTION ================= */}

<div className="grid md:grid-cols-2 gap-6">

  {/* Password */}
  <div>

    <label className="block mb-2 font-semibold text-gray-700">
      Password
    </label>

    <div className="flex items-center border border-gray-300 rounded-xl px-4 h-14 focus-within:border-red-600 transition">

      <i className="bi bi-lock-fill text-red-600 text-xl mr-2 px-2"></i>

<input
  type={showPassword ? "text" : "password"}
  name="password"
  placeholder="Create Password"
  value={formData.password}
  onChange={handleChange}
  className="w-full outline-none bg-transparent"
/>

{errors.password && (
  <p className="text-red-600 text-sm mt-1 px-2">
    {errors.password}
  </p>
)}

<i
  className={`bi ${
    showPassword ? "bi-eye-slash-fill" : "bi-eye-fill"
  } text-gray-500 cursor-pointer hover:text-red-600`}
  onClick={() => setShowPassword(!showPassword)}
></i>
    </div>

  </div>

  {/* Confirm Password */}

  <div>

    <label className="block mb-2 font-semibold text-gray-700">
      Confirm Password
    </label>

    <div className="flex items-center border border-gray-300 rounded-xl px-4 h-14 focus-within:border-red-600 transition">

      <i className="bi bi-shield-lock-fill text-red-600 text-xl mr-2 px-2"></i>
<input
  type={showConfirmPassword ? "text" : "password"}
  name="confirmPassword"
  placeholder="Confirm Password"
  value={formData.confirmPassword}
  onChange={handleChange}
  className="w-full outline-none bg-transparent"
/>

{errors.confirmPassword && (
  <p className="text-red-600 text-sm mt-1">
    {errors.confirmPassword}
  </p>
)}

<i
  className={`bi ${
    showConfirmPassword ? "bi-eye-slash-fill" : "bi-eye-fill"
  } text-gray-500 cursor-pointer hover:text-red-600`}
  onClick={() =>
    setShowConfirmPassword(!showConfirmPassword)
  }
></i>

    </div>

  </div>

</div>


<div>

  <label className="block mb-2 font-semibold text-gray-700">
    Admin Role
  </label>

  <div className="flex items-center border border-gray-300 rounded-xl px-4 h-14 focus-within:border-red-600 transition">

    <i className="bi bi-person-workspace text-red-600 text-xl mr-3"></i>

   <select
  name="role"
  value={formData.role}
  onChange={handleChange}
  className="w-full outline-none bg-transparent cursor-pointer"
>
  <option value="" disabled>
    Select Admin Role
  </option>

  <option value="Admin">
    Admin
  </option>

  <option value="Super Admin">
    Super Admin
  </option>
</select>
{errors.role && (
  <p className="text-red-600 text-sm mt-1">
    {errors.role}
  </p>
)}

  </div>

</div>

<div className="flex items-start gap-3">

  <input
  type="checkbox"
  name="terms"
  checked={formData.terms}
  onChange={handleChange}
  className="mt-1 accent-red-600"
/>
{errors.terms && (
  <p className="text-red-600 text-sm">
    {errors.terms}
  </p>
)}

  <p className="text-gray-600 text-sm leading-6">
    I agree to the
    <span className="text-red-600 font-semibold cursor-pointer">
      {" "}Terms & Conditions
    </span>
    {" "}and{" "}
    <span className="text-red-600 font-semibold cursor-pointer">
      Privacy Policy
    </span>
  </p>

</div>

{/* ================= SUBMIT BUTTON ================= */}

<button
  type="submit"
  disabled={loading}
  className="
    w-full
    bg-red-600
    hover:bg-red-700
    text-white
    py-3
    mb-2
    rounded-xl
    font-bold
    uppercase
    tracking-wider
    transition-all
    duration-300
    hover:shadow-xl
    disabled:opacity-60
    disabled:cursor-not-allowed
  "
>
  {loading ? (
    <>
      <i className="bi bi-arrow-repeat animate-spin mr-2"></i>
      Creating Account...
    </>
  ) : (
    <>
      <i className="bi bi-person-plus-fill mr-2"></i>
      Create Admin Account
    </>
  )}
</button>


<div className="text-center">

  <p className="text-gray-600">

    Already have an account?

<Link
  to="/admin"
  className="text-red-600 font-semibold hover:underline"
>
  Login
</Link>

  </p>

</div>

          </form>

        </div>

      </div>

    </section>
  );
};

export default Signup;