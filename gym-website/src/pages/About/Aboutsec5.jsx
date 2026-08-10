import "bootstrap-icons/font/bootstrap-icons.css";
import ctaImg from "../../Asserts/a8.png";
import { Link } from "react-router-dom";

const Aboutsec5 = () => {
  return (
    <section
      className="w-full"
      style={{ backgroundColor: "var(--bg-dark)" }}
    >
      <div
        className="w-full overflow-hidden "
        style={{
          background:
            "linear-gradient(90deg,#600000 0%,#b30012 50%,#7a0000 100%)",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">

          {/* Image */}
          <div className="lg:col-span-3 order-1">
            <img
              src={ctaImg}
              alt="Gym CTA"
              className="
                w-full
                h-[220px]
                sm:h-[260px]
                md:h-[320px]
                lg:h-full
                object-cover
              "
            />
          </div>

          {/* Content */}
          <div
            className="
              lg:col-span-5
              order-2
              px-5 sm:px-8 lg:px-10
              py-8 md:py-10
              text-center lg:text-left
            "
          >
            <h2
              className="
                text-white
                text-2xl
                sm:text-3xl
                md:text-4xl
                lg:text-5xl
                font-extrabold
                italic
                uppercase
                leading-tight
              "
            >
              READY TO START YOUR FITNESS JOURNEY?
            </h2>

            <p
              className="
                text-white/90
                mt-4
                text-sm
                sm:text-base
                md:text-lg
                leading-7
              "
            >
              Join OCHRÉ Fitness Center today and become the
              strongest version of yourself.
            </p>
          </div>

          {/* Buttons */}
          <div
            className="
              lg:col-span-4
              order-3
              px-5 sm:px-8 lg:px-10
              pb-8 lg:pb-0
            "
          >
            <div
              className="
                flex
                flex-col
                sm:flex-row
                lg:flex-row
                gap-4
                justify-center
                lg:justify-end
                items-center
                mb-4
              "
            >
              {/* Join Now */}
<Link
  to="/cta"
  className="
    px-3 py-3
    border-2 border-red-300
    rounded-lg
    text-white
    font-bold
    uppercase
    tracking-wide
    flex items-center justify-center gap-3
    bg-red-600/30
    backdrop-blur-sm
    hover:bg-black
    hover:text-red-500
    hover:border-red-500
    transition-all duration-300
    no-underline
  "
>
  JOIN NOW
  <i className="bi bi-arrow-right text-xl"></i>
</Link>

              {/* Book Trial */}
            <Link
  to="/cta"
  className="
    w-full
    sm:w-auto
    min-w-[220px]
    px-3 py-3
    bg-white
    rounded-xl
    text-black
    font-bold
    uppercase
    tracking-wide
    flex items-center justify-center gap-4
    hover:bg-gray-100
    hover:scale-105
    transition-all duration-300
    no-underline
  "
>
  BOOK FREE TRIAL

  <i className="bi bi-arrow-right text-xl text-red-600"></i>
</Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Aboutsec5;