import "bootstrap-icons/font/bootstrap-icons.css";
import shaker from "../../Asserts/f2.jpeg";

const Fees3 = () => {
  const tableData = [
    {
      icon: "bi-person",
      color: "text-pink-600",
      plan: "LADIES",
      sub: "",
      prices: ["₹ 2,000", "₹ 5,000", "₹ 9,000", "₹ 15,000"],
    },
    {
      icon: "bi-person",
      color: "text-blue-600",
      plan: "GENTS",
      sub: "",
      prices: ["₹ 2,500", "₹ 6,000", "₹ 12,000", "₹ 18,000"],
    },
    {
      icon: "bi-people",
      color: "text-red-600",
      plan: "COUPLES",
      sub: "(H&W)",
      prices: ["₹ 3,000", "₹ 8,000", "₹ 16,000", "₹ 21,000"],
    },
    {
      icon: "bi-mortarboard",
      color: "text-green-700",
      plan: "STUDENTS",
      sub: "",
      prices: ["₹ 1,700", "₹ 4,500", "₹ 9,000", "₹ 15,000"],
    },
    {
      icon: "bi-people",
      color: "text-purple-700",
      plan: "FAMILY",
      sub: "(3 PERSON)",
      prices: ["₹ 6,000", "₹ 16,000", "₹ 30,000", "₹ 40,000"],
    },
  ];

  const benefits = [
    {
      icon: "bi-clipboard2-check",
      text: "Free Fitness Assessment",
    },
    {
      icon: "bi-people",
      text: "Personalized Workout Plan",
    },
    {
      icon: "bi-journal-check",
      text: "Diet & Nutrition Guidance",
    },
    {
      icon: "bi-graph-up-arrow",
      text: "Regular Progress Tracking",
    },
    {
      icon: "bi-headset",
      text: "Priority Support",
    },
    {
      icon: "bi-building",
      text: "Access to All Facilities",
    },
  ];

  return (
    <section className="bg-white py-5 sm:py-10 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div
  className="
    grid
    grid-cols-1
    lg:grid-cols-[minmax(0,3fr)_minmax(300px,1fr)]
    gap-5
    lg:gap-8
    items-stretch
  "
>
          {/* =====================================================
              LEFT - PRICING TABLE
          ===================================================== */}
          <div className="w-full min-w-0 lg:flex lg:items-center">

          <div
  className="
    w-full
    overflow-x-auto
    rounded-xl
    border
    border-gray-300
    shadow-sm
  "
>
              <table
                className="
                  w-full
                  min-w-[760px]
                  table-fixed
                  border-collapse
                  bg-white
                "
              >

                {/* HEADER */}
                <thead>
                  <tr className="bg-[#111] text-white">

                    <th
                      className="
                        w-[28%]
                        border-r
                        border-gray-700
                        px-4
                        py-3
                        text-left
                        text-sm
                        lg:text-base
                        font-bold
                        uppercase
                        whitespace-nowrap
                      "
                    >
                      Plan Duration
                    </th>

                    {["1 Month", "3 Months", "6 Months", "12 Months"].map(
                      (duration) => (
                        <th
                          key={duration}
                          className="
                            w-[18%]
                            border-r
                            last:border-r-0
                            border-gray-700
                            px-2
                            py-3
                            text-center
                            text-sm
                            lg:text-base
                            font-bold
                            uppercase
                            whitespace-nowrap
                          "
                        >
                          {duration}
                        </th>
                      )
                    )}

                  </tr>
                </thead>

                {/* BODY */}
                <tbody>

                  {tableData.map((item, index) => (
                    <tr
                      key={index}
                      className="
                        bg-white
                        hover:bg-gray-50
                        transition-colors
                        duration-200
                      "
                    >

                      {/* PLAN */}
                      <td
                        className="
                          border-t
                          border-r
                          border-gray-300
                          px-4
                          py-3
                          align-middle
                        "
                      >
                        <div className="flex items-center gap-3">

                          {/* ICON */}
                          <div
                            className={`
                              w-9
                              h-9
                              shrink-0
                              rounded-full
                              bg-gray-100
                              flex
                              items-center
                              justify-center
                              ${item.color}
                            `}
                          >
                            <i
                              className={`
                                bi
                                ${item.icon}
                                text-lg
                              `}
                            />
                          </div>

                          {/* PLAN NAME */}
                          <div className="min-w-0">

                            <h3
                              className={`
                                ${item.color}
                                text-base
                                lg:text-lg
                                font-bold
                                leading-tight
                                m-0
                              `}
                            >
                              {item.plan}
                            </h3>

                            {item.sub && (
                              <p
                                className="
                                  text-[11px]
                                  text-gray-500
                                  leading-tight
                                  mt-0.5
                                  mb-0
                                "
                              >
                                {item.sub}
                              </p>
                            )}

                          </div>

                        </div>
                      </td>

                      {/* PRICES */}
                      {item.prices.map((price, i) => (
                        <td
                          key={i}
                          className="
                            border-t
                            border-r
                            last:border-r-0
                            border-gray-300
                            px-2
                            py-3
                            text-center
                            align-middle
                            text-base
                            lg:text-lg
                            text-gray-800
                            font-bold
                            whitespace-nowrap
                          "
                        >
                          {price}
                        </td>
                      ))}

                    </tr>
                  ))}

                </tbody>
              </table>
            </div>

          </div>


          {/* =====================================================
              RIGHT - MEMBERSHIP BENEFITS
          ===================================================== */}
          <div
            className="
              w-full
              bg-[#111]
              rounded-xl
              overflow-hidden
              shadow-lg
            "
          >

            {/* BENEFITS CONTENT */}
            <div className="p-5 lg:p-5">

              {/* TITLE */}
              <h2
                className="
                  text-2xl
                  lg:text-[26px]
                  font-black
                  uppercase
                  text-white
                  leading-tight
                  m-0
                "
              >
                Membership
                <span className="text-red-600">
                  {" "}Benefits
                </span>
              </h2>

              {/* TITLE LINE */}
              <div
                className="
                  w-12
                  h-[3px]
                  bg-red-600
                  mt-3
                  mb-3
                "
              />

              {/* BENEFITS LIST */}
              <div className="space-y-3">

                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="
                      flex
                      items-start
                      gap-2
                    "
                  >

                    {/* ICON */}
                    <div
                      className="
                        w-7
                        h-7
                        shrink-0
                        rounded-full
                        bg-red-600/15
                        flex
                        items-center
                        justify-center
                      "
                    >
                      <i
                        className={`
                          bi
                          ${benefit.icon}
                          text-red-600
                          text-sm
                        `}
                      />
                    </div>

                    {/* TEXT */}
                    <p
                      className="
                        text-gray-200
                        text-sm
                        leading-7
                        m-0
                      "
                    >
                      {benefit.text}
                    </p>

                  </div>
                ))}


                {/* ENERGY DRINK */}
                <div
                  className="
                    flex
                    items-start
                    gap-3
                  "
                >

                  <div
                    className="
                      w-7
                      h-7
                      shrink-0
                      rounded-full
                      bg-red-600/15
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <i
                      className="
                        bi
                        bi-cup-straw
                        text-red-600
                        text-sm
                      "
                    />
                  </div>

                  <div className="min-w-0">

                    <p
                      className="
                        text-gray-200
                        text-sm
                        leading-5
                        m-0
                      "
                    >
                      365 Days Energy Drink Complimentary
                    </p>

                    <p
                      className="
                        text-gray-500
                        text-xs
                        mt-1
                        mb-0
                      "
                    >
                      One per day
                    </p>

                  </div>

                </div>

              </div>

            </div>


            {/* =================================================
                BOTTOM IMAGE
            ================================================= */}
            <div className="px-3 pb-3">

              <div
                className="
                  w-full
                  h-[140px]
                  sm:h-[180px]
                  lg:h-[135px]
                  overflow-hidden
                  rounded-lg
                "
              >
                <img
                  src={shaker}
                  alt="OCHRÉ Membership Benefits"
                  className="
                    w-full
                    h-full
                    object-cover
                    object-center
                    block
                  "
                />
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Fees3;