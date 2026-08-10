import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";

const Contactsec2 = () => {
    const [formData, setFormData] = useState({
  name: "",
  mobile: "",
  email: "",
  subject: "",
  message: "",
});

const [errors, setErrors] = useState({});
const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));

  setErrors((prev) => ({
    ...prev,
    [name]: "",
  }));
};

const validateForm = () => {
  let newErrors = {};

  if (!formData.name.trim()) {
    newErrors.name = "Name is required";
  }

  if (!formData.mobile.trim()) {
    newErrors.mobile = "Mobile number is required";
  } else if (!/^[0-9]{10}$/.test(formData.mobile)) {
    newErrors.mobile = "Enter a valid 10 digit mobile number";
  }

  if (!formData.email.trim()) {
    newErrors.email = "Email is required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
  ) {
    newErrors.email = "Enter a valid email address";
  }

  if (!formData.subject.trim()) {
    newErrors.subject = "Subject is required";
  }

  if (!formData.message.trim()) {
    newErrors.message = "Message is required";
  } else if (formData.message.length < 10) {
    newErrors.message = "Message should contain at least 10 characters";
  }

  setErrors(newErrors);

  return Object.keys(newErrors).length === 0;
};

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validateForm()) return;

  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/contacts`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await response.json();

console.log("Response Status:", response.status);
console.log("Response:", data);

    if (!response.ok || !data.success) {
      alert(data.message || "Something went wrong");
      return;
    }

    alert("Message sent successfully!");

    setFormData({
      name: "",
      mobile: "",
      email: "",
      subject: "",
      message: "",
    });

    setErrors({});
  } catch (error) {
    console.error("Contact Form Error:", error);
    alert("Unable to send message. Please try again.");
  }
};

  return (
    <section className="bg-[#f5f5f5] py-10  lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-[2fr_1fr] rounded-[24px] overflow-hidden shadow-2xl">

          <div className="bg-white px-4 py-5  sm:px-8 lg:px-12  lg:py-10 ">

            <div className="mb-2">
              <h2 className="text-3xl sm:text-4xl font-black uppercase text-black">
                SEND US A{" "}
                <span className="text-red-600">MESSAGE</span>
              </h2>

              <div className="w-20 h-[4px] bg-red-600 mt-2 rounded-full"></div>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

    <div>
      <label
        htmlFor="name"
        className="block mb-2 text-sm font-semibold text-gray-700"
      >
        Name
      </label>

      <input
        id="name"
        type="text"
        name="name"
        placeholder="Enter your name"
        value={formData.name}
        onChange={handleChange}
        className={`
          block
          w-full
          h-14
          px-4
          bg-white
          text-gray-800
          text-base
          placeholder:text-gray-400
          border
          rounded-lg
          outline-none
          transition-all duration-300
          focus:ring-2
          focus:ring-red-100
          ${
            errors.name
              ? "border-red-500"
              : "border-gray-300 focus:border-red-600"
          }
        `}
      />

      {errors.name && (
        <p className="mt-1.5 mb-0 text-sm text-red-500">
          {errors.name}
        </p>
      )}
    </div>


    <div>
      <label
        htmlFor="mobile"
        className="block mb-2 text-sm font-semibold text-gray-700"
      >
        Mobile Number
      </label>

      <input
        id="mobile"
        type="tel"
        name="mobile"
        placeholder="Enter your mobile number"
        value={formData.mobile}
        onChange={handleChange}
        maxLength={10}
        inputMode="numeric"
        className={`
          block
          w-full
          h-14
          px-4
          bg-white
          text-gray-800
          text-base
          placeholder:text-gray-400
          border
          rounded-lg
          outline-none
          transition-all duration-300
          focus:ring-2
          focus:ring-red-100
          ${
            errors.mobile
              ? "border-red-500"
              : "border-gray-300 focus:border-red-600"
          }
        `}
      />

      {errors.mobile && (
        <p className="mt-1.5 mb-0 text-sm text-red-500">
          {errors.mobile}
        </p>
      )}
    </div>

  </div>

  <div>
    <label
      htmlFor="email"
      className="block mb-2 text-sm font-semibold text-gray-700"
    >
      Email Address
    </label>

    <input
      id="email"
      type="email"
      name="email"
      placeholder="Enter your email address"
      value={formData.email}
      onChange={handleChange}
      className={`
        block
        w-full
        h-14
        px-4
        bg-white
        text-gray-800
        text-base
        placeholder:text-gray-400
        border
        rounded-lg
        outline-none
        transition-all duration-300
        focus:ring-2
        focus:ring-red-100
        ${
          errors.email
            ? "border-red-500"
            : "border-gray-300 focus:border-red-600"
        }
      `}
    />

    {errors.email && (
      <p className="mt-1.5 mb-0 text-sm text-red-500">
        {errors.email}
      </p>
    )}
  </div>

  <div>
    <label
      htmlFor="subject"
      className="block mb-2 text-sm font-semibold text-gray-700"
    >
      Subject
    </label>

    <input
      id="subject"
      type="text"
      name="subject"
      placeholder="Enter subject"
      value={formData.subject}
      onChange={handleChange}
      className={`
        block
        w-full
        h-14
        px-4
        bg-white
        text-gray-800
        text-base
        placeholder:text-gray-400
        border
        rounded-lg
        outline-none
        transition-all duration-300
        focus:ring-2
        focus:ring-red-100
        ${
          errors.subject
            ? "border-red-500"
            : "border-gray-300 focus:border-red-600"
        }
      `}
    />

    {errors.subject && (
      <p className="mt-1.5 mb-0 text-sm text-red-500">
        {errors.subject}
      </p>
    )}
  </div>

  {/* MESSAGE */}
  <div>
    <label
      htmlFor="message"
      className="block mb-2 text-sm font-semibold text-gray-700"
    >
      Message
    </label>

    <textarea
      id="message"
      name="message"
      rows="6"
      placeholder="Enter your message"
      value={formData.message}
      onChange={handleChange}
      className={`
        block
        w-full
        min-h-[160px]
        px-4
        py-3
        bg-white
        text-gray-800
        text-base
        placeholder:text-gray-400
        border
        rounded-lg
        outline-none
        resize-none
        transition-all duration-300
        focus:ring-2
        focus:ring-red-100
        ${
          errors.message
            ? "border-red-500"
            : "border-gray-300 focus:border-red-600"
        }
      `}
    />

    {errors.message && (
      <p className="mt-1.5 mb-0 text-sm text-red-500">
        {errors.message}
      </p>
    )}
  </div>

  {/* SUBMIT BUTTON */}
  <button
    type="submit"
    className="
      w-full
      h-14
      mt-3
      rounded-lg
      bg-red-600
      hover:bg-black
      text-white
      text-base
      sm:text-lg
      font-bold
      uppercase
      flex
      items-center
      justify-center
      gap-3
      transition-all duration-300
    "
  >
    Send Message

    <i className="bi bi-send-fill"></i>
  </button>

</form>
          </div>

<div
  className="
    bg-[#0f0f0f]
    text-white
    p-3
    sm:p-8
    lg:p-10
    h-full
  "
>

  <div className="mb-8">
    <h2
      className="
        text-2xl
        sm:text-3xl
        font-black
        uppercase
        leading-tight
        m-0
      "
    >
      CONTACT{" "}
      <span className="text-red-600">
        INFORMATION
      </span>
    </h2>

    <div className="w-16 h-1 bg-red-600 mt-3 rounded-full"></div>
  </div>


  <div>
    <div
      className="
        flex
        items-start
        gap-2
        py-2
        border-b
        border-gray-800
      "
    >
      <div
        className="
          w-11
          h-11
          min-w-11
          rounded-full
          bg-red-600
          flex
          items-center
          justify-center
          shrink-0
        "
      >
        <i className="bi bi-geo-alt-fill text-lg"></i>
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="font-bold text-lg uppercase mb-2 m-0">
          Address
        </h3>

        <p
          className="
            text-gray-300
            text-sm
            sm:text-base
            leading-7
            m-0
          "
        >
          OCHRÉ Fitness Centre
          <br />
          702B Pandian Complex, First Floor
          <br />
          Ganagiri Road, Sivakasi
          <br />
          Tamil Nadu - 626123
        </p>
      </div>
    </div>
    <div
      className="
        flex
        items-start
        gap-2
        py-2
        border-b
        border-gray-800
      "
    >
      <div
        className="
          w-11
          h-11
          min-w-11
          rounded-full
          bg-red-600
          flex
          items-center
          justify-center
          shrink-0
        "
      >
        <i className="bi bi-telephone-fill text-lg"></i>
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="font-bold text-lg uppercase mb-2 m-0">
          Phone
        </h3>

        <div className="text-gray-300 text-sm sm:text-base leading-7">
          <a
            href="tel:+919578852900"
            className="
              text-gray-300
              no-underline
              hover:!text-red-500
              transition-colors
            "
          >
            +91 95788 52900
          </a>

          <br />

          <a
            href="tel:+917373087272"
            className="
              text-gray-300
              no-underline
              hover:!text-red-500
              transition-colors
            "
          >
            +91 73730 87272
          </a>
        </div>
      </div>
    </div>


    <div
      className="
        flex
        items-start
        gap-2
        py-2
        border-b
        border-gray-800
      "
    >
      <div
        className="
          w-11
          h-11
          min-w-11
          rounded-full
          bg-red-600
          flex
          items-center
          justify-center
          shrink-0
        "
      >
        <i className="bi bi-envelope-fill text-lg"></i>
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="font-bold text-lg uppercase mb-2 m-0">
          Email
        </h3>

        <a
          href="mailto:Siva.Murugan24@gmail.com"
          className="
            block
            text-gray-300
            text-sm
            sm:text-base
            no-underline
            break-all
            hover:!text-red-500
            transition-colors
          "
        >
          Siva.Murugan24@gmail.com
        </a>
      </div>
    </div>

    <div
      className="
        flex
        items-start
        gap-2
        py-2
        border-b
        border-gray-800
      "
    >
      <div
        className="
          w-11
          h-11
          min-w-11
          rounded-full
          bg-red-600
          flex
          items-center
          justify-center
          shrink-0
        "
      >
        <i className="bi bi-clock-fill text-lg"></i>
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="font-bold text-lg uppercase mb-2 m-0">
          Opening Hours
        </h3>

        <p
          className="
            text-gray-300
            text-sm
            sm:text-base
            leading-7
            m-0
          "
        >
          Mon - Sat: 5:30 AM - 10:00 PM
          <br />
          Sunday: 6:00 AM - 12:00 PM
        </p>
      </div>
    </div>


    <div
      className="
        flex
        items-start
        gap-2
        pt-2
      "
    >
      <div
        className="
          w-11
          h-11
          min-w-11
          rounded-full
          bg-red-600
          flex
          items-center
          justify-center
          shrink-0
        "
      >
        <i className="bi bi-people-fill text-lg"></i>
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="font-bold text-lg uppercase mb-2 m-0">
          Follow Us
        </h3>

        <div className="flex items-center gap-3">

          <a
            href="https://wa.me/919578852900"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="
              w-10
              h-10
              rounded-full
              border
              border-red-600
              flex
              items-center
              justify-center
              text-white
              no-underline
              hover:!bg-red-600
              hover:!text-white
              transition-all
              duration-300
            "
          >
            <i className="bi bi-whatsapp"></i>
          </a>


          <a
            href="https://www.instagram.com/ochrefitnesscentre?utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="
              w-10
              h-10
              rounded-full
              border
              border-red-600
              flex
              items-center
              justify-center
              text-white
              no-underline
              hover:!bg-red-600
              hover:!text-white
              transition-all
              duration-300
            "
          >
            <i className="bi bi-instagram"></i>
          </a>

          {/* YOUTUBE */}
          <a
            href="https://youtube.com/@ochrefitnesscentresivakasi6017?si=LyqlXWtvBnTAYvXV"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="
              w-10
              h-10
              rounded-full
              border
              border-red-600
              flex
              items-center
              justify-center
              text-white
              no-underline
              hover:!bg-red-600
              hover:!text-white
              transition-all
              duration-300
            "
          >
            <i className="bi bi-youtube"></i>
          </a>

        </div>
      </div>
    </div>

  </div>
</div>

        </div>

      </div>
    </section>
  );
};

export default Contactsec2;