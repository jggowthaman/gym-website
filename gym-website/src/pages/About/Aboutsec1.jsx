import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import img1 from "../../Asserts/a1.png";

const Aboutsec1 = () => {
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: "var(--bg-dark)" }}
    >
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16">

          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">

            <p
              className="uppercase font-semibold tracking-[3px] mb-3 text-sm sm:text-base"
              style={{ color: "var(--primary-color)" }}
            >
              About Us
            </p>

            <h1
              className="
                text-4xl
                sm:text-5xl
                lg:text-6xl
                font-extrabold
                leading-tight
              "
              style={{ color: "var(--white)" }}
            >
              BUILDING STRONGER
            </h1>

            <h2
              className="
                text-4xl
                sm:text-5xl
                lg:text-6xl
                font-extrabold
                leading-tight
                mt-2
              "
              style={{ color: "var(--primary-color)" }}
            >
              BODIES & BETTER LIVES
            </h2>

            <p
              className="
                mt-6
                text-base
                sm:text-lg
                leading-8
                max-w-xl
                mx-auto
                lg:mx-0
              "
              style={{ color: "var(--text-color)" }}
            >
              At OCHRÉ Fitness Center, we believe fitness is more than
              just a workout—it's a way of life. We are committed to
              helping you achieve your health and fitness goals with
              expert guidance, premium equipment and a supportive
              community.
            </p>

            {/* Breadcrumb */}
            <div className="flex items-center justify-center lg:justify-start gap-3 mt-8 text-lg">

              <Link
                to="/"
                className="font-semibold hover:text-red-500 transition-all duration-300"
                style={{ color: "var(--white)" }}
              >
                Home
              </Link>

              <i
                className="bi bi-chevron-right"
                style={{ color: "var(--text-color)" }}
              ></i>

              <span
                className="font-semibold"
                style={{ color: "var(--primary-color)" }}
              >
                About Us
              </span>

            </div>
          </div>

          {/* Right Image */}
          <div className="relative order-1 lg:order-2">

            <img
              src={img1}
              alt="Gym Workout"
              className="
                w-full
                h-[300px]
                sm:h-[450px]
                lg:h-[550px]
                object-cover
                rounded-2xl
                shadow-2xl
              "
            />

            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                background:
                  "linear-gradient(to left, transparent, rgba(15,15,15,.35))",
              }}
            ></div>

          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative px-4 sm:px-6 lg:px-8 -mt-10 lg:-mt-14 z-20 mb-4">
        <div
          className="
            max-w-7xl
            mx-auto
            rounded-xl
            overflow-hidden
            shadow-2xl
          "
          style={{
            background:
              "linear-gradient(90deg,var(--primary-color),#d41421,var(--primary-color))",
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">

            {/* Happy Members */}
            <div className="flex items-center justify-center gap-4 py-8 px-6 border-b sm:border-r border-white/20">
              <i className="bi bi-people-fill text-5xl text-white"></i>

              <div>
                <h3 className="text-4xl font-bold text-white">
                  5000+
                </h3>

                <p className="text-white text-sm uppercase tracking-wider">
                  Happy Members
                </p>
              </div>
            </div>

            {/* Trainers */}
            <div className="flex items-center justify-center gap-4 py-8 px-6 border-b lg:border-r border-white/20">
              <i className="bi bi-person-workspace text-5xl text-white"></i>

              <div>
                <h3 className="text-4xl font-bold text-white">
                  10+
                </h3>

                <p className="text-white text-sm uppercase tracking-wider">
                  Expert Trainers
                </p>
              </div>
            </div>

            {/* Programs */}
            <div className="flex items-center justify-center gap-4 py-8 px-6 border-b lg:border-r border-white/20">
              <i className="bi bi-flower1 text-5xl text-white"></i>

              <div>
                <h3 className="text-4xl font-bold text-white">
                  20+
                </h3>

                <p className="text-white text-sm uppercase tracking-wider">
                  Gym Programs
                </p>
              </div>
            </div>

            {/* Sports */}
            <div className="flex items-center justify-center gap-4 py-8 px-6 border-b lg:border-r border-white/20">
              <i className="bi bi-diagram-3-fill text-5xl text-white"></i>

              <div>
                <h3 className="text-4xl font-bold text-white">
                  10+
                </h3>

                <p className="text-white text-sm uppercase tracking-wider">
                  Sports Disciplines
                </p>
              </div>
            </div>

            {/* Experience */}
            <div className="flex items-center justify-center gap-4 py-8 px-6">
              <i className="bi bi-trophy-fill text-5xl text-white"></i>

              <div>
                <h3 className="text-4xl font-bold text-white">
                  12+
                </h3>

                <p className="text-white text-sm uppercase tracking-wider">
                  Years Experience
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutsec1;