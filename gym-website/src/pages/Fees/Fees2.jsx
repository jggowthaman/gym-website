import "bootstrap-icons/font/bootstrap-icons.css";

const Fees2 = () => {
  const plans = [
    {
      title: "LADIES",
      icon: "bi-person-fill",
      price: "₹2,000",
      color: "bg-red-600",
      button: "bg-red-600 hover:bg-red-700",
      iconColor: "text-red-600",
      features: [
        "Access to Gym",
        "Cardio & Strength Training",
        "Steam & Locker Facility",
        "Diet & Nutrition Guidance",
        "Wi-Fi Access",
      ],
    },
    {
      title: "GENTS",
      icon: "bi-person-fill",
      price: "₹2,500",
      color: "bg-black",
      button: "bg-black hover:bg-gray-800",
      iconColor: "text-gray-800",
      features: [
        "Access to Gym",
        "Cardio & Strength Training",
        "Steam & Locker Facility",
        "Diet & Nutrition Guidance",
        "Wi-Fi Access",
      ],
    },
    {
      title: "COUPLES",
      icon: "bi-people-fill",
      price: "₹3,000",
      color: "bg-red-500",
      button: "bg-red-600 hover:bg-red-700",
      iconColor: "text-red-600",
      subtitle: "(HUSBAND & WIFE)",
      features: [
        "Access to Gym",
        "Cardio & Strength Training",
        "Steam & Locker Facility",
        "Diet & Nutrition Guidance",
        "Wi-Fi Access",
      ],
    },
    {
      title: "STUDENTS",
      icon: "bi-mortarboard-fill",
      price: "₹1,700",
      color: "bg-green-700",
      button: "bg-green-700 hover:bg-green-800",
      iconColor: "text-green-700",
      features: [
        "Access to Gym",
        "Basic Training",
        "Steam & Locker Facility",
        "Diet Guidance",
        "Wi-Fi Access",
      ],
    },
    {
      title: "FAMILY",
      icon: "bi-people-fill",
      price: "₹6,000",
      color: "bg-purple-700",
      button: "bg-purple-700 hover:bg-purple-800",
      iconColor: "text-purple-700",
      subtitle: "(3 PERSON)",
      features: [
        "Access to Gym",
        "Cardio & Strength Training",
        "Steam & Locker Facility",
        "Diet & Nutrition Guidance",
        "Wi-Fi Access",
      ],
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= HEADING ================= */}
        <div className="text-center mb-10 lg:mb-14">

          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <div className="hidden sm:block w-10 lg:w-14 h-[2px] bg-red-600" />

            <h2
              className="
                text-3xl
                sm:text-4xl
                lg:text-5xl
                font-black
                uppercase
                leading-tight
                m-0
              "
            >
              Membership{" "}
              <span className="text-red-600">
                Plans
              </span>
            </h2>

            <div className="hidden sm:block w-10 lg:w-14 h-[2px] bg-red-600" />
          </div>

          <div className="w-16 h-1 bg-red-600 mx-auto mt-4 sm:hidden" />

          <p className="text-gray-500 mt-4 mb-0 text-sm sm:text-base">
            Choose the plan that suits your fitness journey
          </p>
        </div>


        {/* ================= CARDS ================= */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-5
            gap-6
            items-stretch
          "
        >
          {plans.map((plan, index) => (
            <div
              key={index}
              className="
                group
                bg-white
                border
                border-gray-200
                rounded-2xl
                overflow-hidden
                shadow-md
                flex
                flex-col
                h-full
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
                hover:border-red-500
              "
            >

              {/* ================= CARD HEADER ================= */}
              <div
                className={`
                  ${plan.color}
                  text-white
                  px-4
                  py-6
                  text-center
                  min-h-[170px]
                  flex
                  flex-col
                  items-center
                  justify-center
                `}
              >
                <i
                  className={`
                    bi
                    ${plan.icon}
                    text-4xl
                    sm:text-5xl
                    mb-3
                  `}
                />

                <h3 className="font-black text-xl sm:text-2xl m-0">
                  {plan.title}
                </h3>

                {/* Fixed subtitle area */}
                <div className="h-6 flex items-center justify-center">
                  {plan.subtitle && (
                    <p className="text-xs mt-1 mb-0 font-medium">
                      {plan.subtitle}
                    </p>
                  )}
                </div>
              </div>


              {/* ================= CARD BODY ================= */}
              <div
                className="
                  p-3
                  flex
                  flex-col
                  flex-1
                "
              >

                {/* PRICE */}
                <div className="text-center min-h-[125px]">
                  <p className="text-gray-400 text-xs sm:text-sm uppercase mb-0">
                    Starting From
                  </p>

                  <h2
                    className={`
                      text-4xl
                      xl:text-[38px]
                      font-black
                      mt-3
                      mb-0
                      leading-none
                      ${plan.iconColor}
                    `}
                  >
                    {plan.price}
                  </h2>

                  <p className="text-gray-500 mt-2 mb-0 text-sm">
                    / Month
                  </p>
                </div>


                {/* ================= FEATURES ================= */}
                <div className="mt-1 space-y-4 flex-1">
                  {plan.features.map((feature, i) => (
                    <div
                      key={i}
                      className="
                        flex
                        items-start
                        gap-3
                        text-gray-700
                        text-sm
                        leading-5
                      "
                    >
                      <i
                        className={`
                          bi
                          bi-check-circle-fill
                          ${plan.iconColor}
                          text-base
                          mt-[2px]
                          shrink-0
                        `}
                      />

                      <span className="flex-1">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>


              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Fees2;