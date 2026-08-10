import "bootstrap-icons/font/bootstrap-icons.css";

import gymImg from "../../Asserts/a2.png";

const Aboutsec2 = () => {
  return (
    <section className="py-16 lg:py-24 bg-white mt-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div>
            <img
              src={gymImg}
              alt="Gym Interior"
              className="
                w-full
                h-[300px]
                sm:h-[400px]
                lg:h-[500px]
                object-cover
                rounded-2xl
                shadow-xl
              "
            />
          </div>

          {/* Content */}
          <div>
            <p
              className="uppercase font-semibold tracking-[3px] mb-4"
              style={{ color: "var(--primary-color)" }}
            >
              Our Story
            </p>

            <h2 className="text-4xl lg:text-6xl font-extrabold leading-tight">
              <span style={{ color: "var(--heading-color)" }}>
                OUR JOURNEY TO A
              </span>
              <br />
              <span style={{ color: "var(--primary-color)" }}>
                HEALTHIER COMMUNITY
              </span>
            </h2>

            <p
              className="mt-8 text-lg leading-9"
              style={{ color: "var(--text-color)" }}
            >
              Founded in 2012, Ochré Fitness Centre started with a simple
              mission — to create a place where fitness meets motivation
              and every individual is empowered to become the best version
              of themselves.
            </p>

            <p
              className="mt-8 text-lg leading-9"
              style={{ color: "var(--text-color)" }}
            >
              Over the years, we have grown into a complete fitness
              destination offering state-of-the-art gym facilities and
              professional sports coaching for aspiring athletes.
            </p>
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-16 pt-4">

          {/* Mission */}
          <div className="text-center lg:text-left">
           <i className="bi bi-bullseye text-6xl" style={{ color: "var(--primary-color)" }}></i>

            <h3 className="text-2xl font-bold mb-4">
              OUR MISSION
            </h3>

            <p
              className="leading-8"
              style={{ color: "var(--text-color)" }}
            >
              To inspire and empower individuals through
              fitness and sports.
            </p>
          </div>

          {/* Vision */}
          <div className="text-center lg:text-left border-t sm:border-t-0 lg:border-l border-gray-200 pt-10 lg:pt-0 lg:pl-10 ">
            <i className="bi bi-eye text-6xl" style={{ color: "var(--primary-color)" }}></i>

            <h3 className="text-2xl font-bold mb-4">
              OUR VISION
            </h3>

            <p
              className="leading-8"
              style={{ color: "var(--text-color)" }}
            >
              To be a leading fitness and sports academy
              creating champions.
            </p>
          </div>

          {/* Values */}
         <div className="text-center lg:text-left border-t sm:border-t-0 lg:border-l border-gray-200 pt-3 px-2 lg:pt-0 lg:pl-10">
            <i className="bi bi-heart text-6xl " style={{ color: "var(--primary-color) " }}></i>

            <h3 className="text-2xl font-bold mb-4">
              OUR VALUES
            </h3>

            <p
              className="leading-8"
              style={{ color: "var(--text-color)" }}
            >
              Discipline, dedication, integrity and
              excellence.
            </p>
          </div>

          {/* Community */}
          <div className="text-center lg:text-left border-t sm:border-t-0 lg:border-l border-gray-200 pt-10 lg:pt-0 lg:pl-10 ">
           <i className="bi bi-people text-6xl" style={{ color: "var(--primary-color)" }}></i>

            <h3 className="text-2xl font-bold mb-4">
              OUR COMMUNITY
            </h3>

            <p
              className="leading-8"
              style={{ color: "var(--text-color)" }}
            >
              Building a stronger, healthier and united
              community.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Aboutsec2;