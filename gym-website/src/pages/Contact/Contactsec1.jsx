import "bootstrap-icons/font/bootstrap-icons.css";
import contactImg from "../../Asserts/c1.png";

const Contactsec1 = () => {
  const features = [
    {
      icon: "bi-clock",
      title: "FLEXIBLE",
      subtitle: "TIMINGS",
    },
    {
      icon: "bi-person",
      title: "FRIENDLY",
      subtitle: "SUPPORT",
    },
    {
      icon: "bi-chat-dots",
      title: "QUICK",
      subtitle: "RESPONSE",
    },
    {
      icon: "bi-shield-check",
      title: "100%",
      subtitle: "SATISFACTION",
    },
  ];

  return (
    <section
      className="bg-black overflow-hidden"
      style={{ backgroundColor: "var(--bg-dark)" }}
    >
      <div className="max-w-[1600px] mx-auto py-3 mt-3">
        <div className="grid lg:grid-cols-2 items-center min-h-[450px]">

          {/* Left Side */}
          <div className="px-5 sm:px-10 lg:px-16  lg:py-0 ">

            <p
              className="uppercase font-bold tracking-[3px] mb-4 text-sm"
              style={{ color: "var(--primary-color)" }}
            >
              GET IN TOUCH
            </p>

            <h1 className="text-white font-extrabold leading-none text-4xl sm:text-5xl lg:text-7xl">
              WE ARE HERE TO
            </h1>

            <h1
              className="font-extrabold leading-none mt-2 text-4xl sm:text-5xl lg:text-7xl"
              style={{ color: "var(--primary-color)" }}
            >
              HELP YOU!
            </h1>

            <p className="text-gray-300 mt-6 text-lg leading-8 max-w-xl">
              Have questions or ready to begin your fitness journey?
              <br />
              Reach out to us — our team will be happy to assist you.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-10">

              {features.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1"
                >
                  <i
                    className= {`bi ${item.icon} text-4xl`} 
                    style={{ color: "var(--primary-color)" }}
                    
                  ></i>

                  <div >
                    <h4 className="text-white font-bold text-sm">
                      {item.title}
                    </h4>

                    <p className="text-gray-300 text-sm font-semibold">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* Right Side Image */}
          <div className="relative h-[280px] sm:h-[350px] lg:h-[450px]">

            <img
              src={contactImg}
              alt="Gym Contact"
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/35"></div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contactsec1;