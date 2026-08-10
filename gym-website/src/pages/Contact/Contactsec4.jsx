import "bootstrap-icons/font/bootstrap-icons.css";

const Contactsec4 = () => {
  const cards = [
    {
      icon: "bi-telephone-fill",
      title: "CALL US",
      desc: "Speak with our fitness experts today!",
      value: "95788 52900",
      link: "tel:+919578852900",
    },
    {
      icon: "bi-whatsapp",
      title: "WHATSAPP",
      desc: "Chat with us on WhatsApp",
      value: "95788 52900",
      link: "https://wa.me/919578852900",
    },
  {
  icon: "bi-calendar-event-fill",
  title: "BOOK A VISIT",
  desc: "Schedule a free gym trial session",
  value: "BOOK NOW",
  link: "/cta",
},
    {
      icon: "bi-envelope-fill",
      title: "EMAIL US",
      desc: "Drop us an email anytime",
      value: "siva.murugan24@gmail.com",
      link: "mailto:siva.murugan24@gmail.com",
    },
    {
      icon: "bi-geo-alt-fill",
      title: "VISIT US",
      desc: "Come and experience our facilities",
      value: "VIEW ON MAP",
      link: "https://maps.google.com/?q=Ochre+Fitness+Center",
    },
  ];

  return (
    <section className="bg-white py-4 px-4">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">

          {cards.map((card, index) => (
            <a
              key={index}
              href={card.link}
              target={card.link.startsWith("/") ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className="
                bg-white
                border border-gray-200
                rounded-2xl
                shadow-sm
                p-8
                text-center
                min-h-[320px]
                flex flex-col
                justify-center
                items-center
                hover:shadow-xl
                hover:-translate-y-2
                transition-all duration-300
                cursor-pointer
              "
            >
              {/* Icon */}
              <div
                className="
                  w-16 h-16
                  rounded-full
                  bg-red-600
                  flex items-center justify-center
                  text-white text-3xl
                  mb-6
                "
              >
                <i className={`bi ${card.icon}`}></i>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-black uppercase text-black mb-4">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-8 min-h-[80px]">
                {card.desc}
              </p>

              {/* Value */}
              <p
                className="
                  text-red-600
                  font-bold
                  text-xl
                  
                  break-all
                "
              >
                {card.value}
              </p>
            </a>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Contactsec4;