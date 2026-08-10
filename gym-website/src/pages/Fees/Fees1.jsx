import "bootstrap-icons/font/bootstrap-icons.css";
import f1 from "../../Asserts/f1.png";
import { Link } from "react-router-dom";

const Fees1 = () => {
  const features = [
    {
      icon: "bi-shield-fill-check",
      text: "NO JOINING FEE",
    },
    {
      icon: "bi-calendar-check-fill",
      text: "FLEXIBLE PLANS",
    },
    {
      icon: "bi-people-fill",
      text: "EXPERT TRAINERS",
    },
    {
      icon: "bi-gear-fill",
      text: "PREMIUM FACILITIES",
    },
  ];

  // Reusable Offer Card
  const OfferCard = () => (
    <div
      className="
        w-full
        bg-black
        text-center
        border
        border-white/40
        rounded-2xl
        p-4
        sm:p-5
        shadow-2xl
      "
    >
      {/* Offer Badge */}
      <div
        className="
          w-full
          bg-red-600
          text-white
          text-[11px]
          sm:text-xs
          font-bold
          uppercase
          py-2.5
          px-3
          rounded-full
        "
      >
        Limited Time Offer
      </div>

      {/* Up To */}
      <p
        className="
          text-white
          text-base
          sm:text-lg
          font-black
          uppercase
          mt-5
          mb-2
        "
      >
        Up To
      </p>

      {/* Discount */}
      <div className="flex items-end justify-center gap-1">
        <span
          className="
            text-white
            text-6xl
            sm:text-7xl
            font-black
            leading-none
          "
        >
          20
        </span>

        <span
          className="
            text-red-600
            text-3xl
            sm:text-4xl
            font-black
            leading-none
            mb-1
          "
        >
          %
        </span>

        <span
          className="
            text-white
            text-xl
            sm:text-2xl
            font-black
            leading-none
            mb-1
          "
        >
          OFF
        </span>
      </div>

      {/* Plan */}
      <p
        className="
          text-white
          text-xs
          sm:text-sm
          font-semibold
          uppercase
          mt-4
          mb-0
        "
      >
        On Yearly Plans
      </p>

      {/* Button */}
 <Link
  to="/cta"
  className="
    w-full
    h-12
    mt-5
    bg-red-600
    hover:!bg-red-700
    text-white
    hover:!text-white
    no-underline
    text-sm
    font-bold
    uppercase
    rounded-lg
    flex
    items-center
    justify-center
    gap-3
    transition-all
    duration-300
  "
>
  Join Now
  <i className="bi bi-arrow-right"></i>
</Link>
    </div>
  );

  return (
    <section className="bg-[#0f0f0f] overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">

        {/* ================= LEFT CONTENT ================= */}
        <div
          className="
            flex
            items-center
            px-4
            sm:px-6
            lg:pl-8
            xl:pl-[max(2rem,calc((100vw-1280px)/2))]
            lg:pr-10
            xl:pr-14
            py-10
            sm:py-12
            lg:py-14
          "
        >
          <div className="w-full max-w-2xl">

            {/* Heading */}
            <h1
              className="
                m-0
                text-3xl
                sm:text-4xl
                md:text-5xl
                lg:text-[44px]
                xl:text-5xl
                font-black
                uppercase
                leading-[1.1]
                text-white
              "
            >
              BEST FACILITIES.
              <br />

              <span className="text-red-600">
                AFFORDABLE PRICES.
              </span>

              <br />

              GREAT RESULTS.
            </h1>

            {/* Description */}
            <p
              className="
                max-w-xl
                mt-5
                lg:mt-6
                mb-0
                text-gray-300
                text-base
                sm:text-lg
                leading-7
              "
            >
              Choose the membership that fits your goals and start your
              transformation journey with OCHRÉ Fitness Centre.
            </p>

            {/* Features */}
            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                gap-x-6
                gap-y-4
                sm:gap-y-5
                mt-7
                lg:mt-8
              "
            >
              {features.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 sm:gap-4"
                >
                  {/* Icon */}
                  <div
                    className="
                      w-11
                      h-11
                      sm:w-12
                      sm:h-12
                      shrink-0
                      rounded-full
                      border-2
                      border-red-600
                      flex
                      items-center
                      justify-center
                      text-red-600
                      text-lg
                      sm:text-xl
                    "
                  >
                    <i className={`bi ${item.icon}`}></i>
                  </div>

                  {/* Text */}
                  <h3
                    className="
                      m-0
                      text-white
                      font-bold
                      text-sm
                      sm:text-base
                      leading-5
                    "
                  >
                    {item.text}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="w-full">

          {/* Image */}
          <div
            className="
              relative
              w-full
              h-[300px]
              sm:h-[420px]
              lg:h-full
              lg:min-h-[520px]
            "
          >
            <img
              src={f1}
              alt="OCHRÉ Fitness Centre training"
              className="
                absolute
                inset-0
                w-full
                h-full
                object-cover
                object-center
              "
            />

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-black/10" />

            {/* Desktop Offer Card */}
            <div
              className="
                hidden
                lg:block
                absolute
                top-1/2
                -translate-y-1/2
                right-7
                xl:right-10
                w-[270px]
              "
            >
              <OfferCard />
            </div>
          </div>

          {/* ================= MOBILE OFFER CARD ================= */}
          <div
            className="
              lg:hidden
              bg-[#0f0f0f]
              px-4
              sm:px-6
              py-5
              sm:py-6
            "
          >
            <div className="w-full max-w-[360px] mx-auto">
              <OfferCard />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Fees1;