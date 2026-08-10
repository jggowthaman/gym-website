import "bootstrap-icons/font/bootstrap-icons.css";

import gymEquipment from "../../Asserts/a3.jpg";
import lockerRoom from "../../Asserts/a4.png";
import groupClass from "../../Asserts/a5.png";
import nutrition from "../../Asserts/a6.png";
import parking from "../../Asserts/a7.png";

const facilities = [
  {
    image: gymEquipment,
  icon: "bi bi-lightning-charge",
    title: "MODERN EQUIPMENT",
    desc: "Latest and advanced equipment for effective workouts.",
  },
  {
    image: lockerRoom,
    icon: "bi-door-open-fill",
    title: "LOCKER ROOMS",
    desc: "Clean and secure locker rooms with showers and amenities.",
  },
  {
    image: groupClass,
    icon: "bi-people-fill",
    title: "GROUP CLASSES",
    desc: "Exciting group workouts like Zumba, Yoga, HIIT and more.",
  },
  {
    image: nutrition,
    icon: "bi-fork-knife",
    title: "NUTRITION CAFÉ",
    desc: "Healthy food and protein shakes to fuel your fitness journey.",
  },
  {
    image: parking,
    icon: "bi-p-circle-fill",
    title: "AMPLE PARKING",
    desc: "Spacious and secure parking for a hassle-free experience.",
  },
];

const Aboutsec3 = () => {
  return (
    <section
      className="py-16 lg:py-24"
      style={{ backgroundColor: "var(--bg-dark)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-5 ">

        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 items-start pt-5 pb-5">

          {/* Left Content */}
          <div className="lg:col-span-1 text-center lg:text-left ">
            <p
              className="uppercase font-semibold tracking-[3px] mb-4"
              style={{ color: "var(--primary-color)" }}
            >
              OUR FACILITIES
            </p>

            <h2
              className="text-4xl sm:text-5xl font-extrabold leading-tight"
              style={{ color: "var(--white)" }}
            >
              WORLD-CLASS
              <br />
              FACILITIES
            </h2>

            <p
              className="mt-6 leading-8 text-base"
              style={{ color: "var(--text-color)" }}
            >
              Train in a premium environment with the best equipment and
              unmatched amenities.
            </p>
          </div>

          {/* Cards */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">

  {facilities.map((item) => (
    <div
  className="
    bg-white
    rounded-2xl
    overflow-hidden
    shadow-lg
    transition-all
    duration-300
    hover:scale-105
    hover:shadow-2xl
    cursor-pointer
  "
>
  
  {/* Image */}
  <div className="relative">
    <img
      src={item.image}
      alt={item.title}
    className="
  w-full
  h-52
  object-cover
  transition-transform
  duration-500
  group-hover:scale-110
"
    />

    {/* Small floating icon */}
    <div
      className="
        absolute
        left-6
        -bottom-6
        w-12
        h-12
        rounded-full
        border-4 border-white
        flex items-center justify-center
        shadow-lg
        
      "
      style={{
        backgroundColor: "var(--primary-color)"
      }}
    >
      <i className={`bi ${item.icon} text-white text-xl `}></i>
    </div>
  </div>

  {/* Content */}
  <div className="px-6 pt-10 pb-6 mt-4 p-3">
    <h3 className="text-xl font-bold uppercase text-black mb-4">
      {item.title}
    </h3>

    <p className="text-gray-600 leading-7">
      {item.desc}
    </p>
  </div>
</div>
  ))}

</div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Aboutsec3;