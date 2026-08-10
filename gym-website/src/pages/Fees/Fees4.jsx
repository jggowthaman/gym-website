import { useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import img3 from "../../Asserts/f3.jpeg";

const Fees4 = () => {
  const navigate = useNavigate();

  const offers = [
    {
      icon: "bi-alarm-fill",
      title: "EARLY BIRD OFFER",
      desc: "Join before 10 AM and get 10% OFF on Monthly Membership.",
      value: "10% OFF",
    },
    {
      icon: "bi-mortarboard-fill",
      title: "STUDENT DISCOUNT",
      desc: "Special 15% OFF for all students on yearly membership.",
      value: "15% OFF",
    },
    {
      icon: "bi-people-fill",
      title: "FAMILY OFFER",
      desc: "Flat 20% OFF for families with 3 or more members.",
      value: "20% OFF",
    },
    {
      icon: "bi-gift-fill",
      title: "REFER & EARN",
      desc: "Refer your friends and earn one month FREE membership.",
      value: "1 MONTH FREE",
    },
    {
      icon: "bi-stars",
      title: "FESTIVAL OFFER",
      desc: "Special festive discounts available on selected plans.",
      value: "UP TO 20% OFF",
    },
  ];

  return (
    <section className="py-16 bg-white overflow-x-hidden mb-4">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}

        <div className="text-center mb-14">

          <div className="flex justify-center items-center gap-4 mb-4">

            <div className="w-12 h-[2px] bg-red-600 relative">
              <i className="bi bi-barbell absolute -left-2 -top-2 text-red-600"></i>
            </div>

            <h2 className="text-4xl lg:text-5xl font-black uppercase">
              Exciting
              <span className="text-red-600"> Offers</span>
            </h2>

            <div className="w-12 h-[2px] bg-red-600 relative">
              <i className="bi bi-barbell absolute -right-2 -top-2 text-red-600"></i>
            </div>

          </div>

          <p className="text-gray-500 text-lg">
            Exclusive membership offers crafted just for you.
          </p>

        </div>

        {/* Cards */}

        <div className="flex flex-col xl:flex-row gap-6 items-stretch">

          {/* Offer Cards */}
<div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">

  {offers.map((offer, index) => (

    <div
      key={index}
      className="
        bg-white
        border
        border-gray-200
        rounded-xl
        shadow-sm
        p-3
        
        text-center
        group
        hover:-translate-y-2
        hover:shadow-2xl
        transition-all
        duration-300
        flex
        flex-col
        min-h-[360px]
      "
    >
      {/* Icon */}
      <div
        className="
          w-20 h-20
          rounded-full
          bg-red-50
          mx-auto
          
          flex
          items-center
          justify-center
          mb-5
          group-hover:bg-red-600
          transition-all
        "
      >
        <i
          className={`bi ${offer.icon} text-5xl text-red-600 group-hover:text-white`}
        ></i>
      </div>

      {/* Title */}
      <h3 className="text-2xl font-black uppercase min-h-[65px] flex items-center justify-center">
        {offer.title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 leading-7 flex-grow mt-4">
        {offer.desc}
      </p>

      {/* Value */}
      <h4 className="text-red-600 text-3xl font-black mt-6">
        {offer.value}
      </h4>

    </div>

  ))}

</div>

          {/* Ready To Transform Card */}

{/* Ready To Transform */}
<div
className="
  relative
  overflow-hidden
  rounded-xl
  shadow-xl
  group
  px-4

  w-full
  xl:w-[310px]

  h-[420px]

  flex-shrink-0
"
>

  {/* Background Image */}

  <img
    src={img3}
    alt="Workout"
    className="
      absolute
      inset-0
      w-full
      h-full
      object-cover
      group-hover:scale-105
      duration-500
    "
  />

  {/* Overlay */}

  <div className="absolute inset-0 bg-gradient-to-t from-red-900/95 via-red-900/70 to-black/30 "></div>

  {/* Content */}

  <div className="relative z-10 h-full flex flex-col justify-between p-6">

    <div>

      <span className="inline-block bg-white/20 text-white text-xs uppercase tracking-widest px-3 py-2 rounded-full"  onClick={() => navigate("/cta")}>
        Join Today
      </span>
<h2 className="mt-6 text-3xl lg:text-4xl font-black uppercase leading-tight text-white">
        Ready To
        <br />
        Transform
        <br />
        Your Life?
      </h2>

      <p className="mt-5 text-white/90 leading-7 text-sm lg:text-base">
        Join Ochré Fitness Center today and become the strongest version
        of yourself with world-class equipment, expert trainers and
        personalized fitness guidance.
      </p>

    </div>
<a
  href="#registration"
  className="
    w-full
    py-3
    mb-3
    flex
    items-center
    justify-center
    gap-3

    bg-white
    text-red-600
    border-2
    border-white
    rounded

    font-bold
    uppercase

    transition-all
    duration-300

    hover:!bg-red-600
    hover:!text-white
    hover:!border-red-600
  "
 onClick={() => navigate("/cta")}>
  JOIN NOW

  <i className="bi bi-arrow-right"></i>
</a>



  </div>

</div>

</div>

</div>

</section>
  );
};

export default Fees4;