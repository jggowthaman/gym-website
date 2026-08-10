import "bootstrap-icons/font/bootstrap-icons.css";

const StatsSection = () => {
  const stats = [
    {
      icon: "bi-people-fill",
      number: "5000+",
      text: "Happy Members",
    },
    {
      icon: "bi-person-workspace",
      number: "10+",
      text: "Expert Trainers",
    },
    {
      icon: "bi-people",
      number: "20+",
      text: "Gym Programs",
    },
    {
      icon: "bi-tools",
      number: "10+",
      text: "Sports Disciplines",
    },
    {
      icon: "bi-shield-check",
      number: "12+",
      text: "Years of Experience",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-red-700 via-red-600 to-red-700 overflow-hidden mt-5">
      <div className="max-w-7xl mx-auto ">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">

          {stats.map((item, index) => (
            <div
              key={index}
              className={`
                flex items-center justify-center lg:justify-start
                gap-4
                px-5 py-6
                text-white

                border-b border-white/20
                lg:border-b-0
                lg:border-r

                ${
                  index === stats.length - 1
                    ? "lg:border-r-0 border-b-0"
                    : "border-white/20"
                }
              `}
            >
              {/* Icon */}
              <i
                className={`
                  bi ${item.icon}
                  text-4xl
                  sm:text-5xl
                  flex-shrink-0
                `}
              ></i>

              {/* Text */}
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black leading-none">
                  {item.number}
                </h2>

                <p className="uppercase text-xs sm:text-sm tracking-wide font-semibold mt-1">
                  {item.text}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default StatsSection;