import "bootstrap-icons/font/bootstrap-icons.css";

const features = [
  {
    icon: "bi-person-badge-fill",
    title: "EXPERT TRAINERS",
    desc: "Certified and experienced trainers to guide you at every step.",
  },
  {
    icon: "bi-lightning-charge-fill",
    title: "MODERN EQUIPMENT",
    desc: "Latest and advanced equipment for effective and safe workouts.",
  },
  {
    icon: "bi-heart-pulse-fill",
    title: "PERSONAL GUIDANCE",
    desc: "Customized workout and nutrition plans tailored to your goals.",
  },
  {
    icon: "bi-people-fill",
    title: "GROUP CLASSES",
    desc: "Exciting group workouts like Zumba, Yoga, HIIT and many more.",
  },
  {
    icon: "bi-fork-knife",
    title: "NUTRITION SUPPORT",
    desc: "Healthy food and protein options to fuel your fitness journey.",
  },
  {
    icon: "bi-dribbble",
    title: "SPORTS ACADEMY",
    desc: "Professional coaching in various sports to build champions.",
  },
  {
    icon: "bi-trophy-fill",
    title: "COMPETITIONS & EVENTS",
    desc: "Regular competitions and events to challenge yourself.",
  },
  {
    icon: "bi-bullseye",
    title: "RESULTS DRIVEN",
    desc: "We are committed to helping you achieve real results.",
  },
];

const Aboutsec4 = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden pb-5 pt-3  px-4">

      {/* Heading */}
      <div className="max-w-7xl mx-auto px-6 text-center">

        <p
          className="uppercase font-bold tracking-[4px] mb-4"
          style={{ color: "var(--primary-color)" }}
        >
          WHY CHOOSE OCHRÉ
        </p>

        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight text-black">
          MORE THAN A GYM,
          <br />
          <span style={{ color: "var(--primary-color)" }}>
            A COMPLETE FITNESS DESTINATION
          </span>
        </h2>

        <p
          className="max-w-4xl mx-auto mt-8 text-lg leading-9"
          style={{ color: "var(--text-color)" }}
        >
          At OCHRÉ Fitness Center, we offer more than just workouts.
          We provide the perfect environment, expert guidance and
          top-notch facilities to help you achieve your fitness goals.
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {features.map((item, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-3xl
                p-2
                shadow-lg
                border
                transition-all
                duration-500
                hover:-translate-y-3
                hover:shadow-2xl
              "
              style={{
                borderColor: "#f2f2f2",
              }}
            >
              {/* Icon */}
              <div
                className="
                  w-15 h-15
                  rounded-full
                  flex items-center justify-center
                  mx-auto mb-8
                  
                  shadow-lg
                "
                style={{
                  backgroundColor: "var(--primary-color)",
                }}
              >
                <i className={`bi ${item.icon} text-white text-3xl`}></i>
              </div>

              <h3 className="font-bold text-2xl text-black mb-5">
                {item.title}
              </h3>

              <div
                className="w-16 h-1 rounded-full mx-auto mb-5"
                style={{
                  backgroundColor: "var(--primary-color)",
                }}
              ></div>

              <p
                className="leading-8"
                style={{ color: "var(--text-color)" }}
              >
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Aboutsec4;