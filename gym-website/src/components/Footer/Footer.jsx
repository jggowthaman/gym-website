import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
  const socialLinks = [
    {
      icon: "bi-whatsapp",
      link: "https://wa.me/919578852900",
      label: "WhatsApp",
    },
    {
      icon: "bi-instagram",
      link: "https://www.instagram.com/ochrefitnesscentre",
      label: "Instagram",
    },
    {
      icon: "bi-youtube",
      link: "https://youtube.com/@ochrefitnesscentresivakasi6017",
      label: "YouTube",
    },
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Gym", path: "/gym" },
    { name: "Sports Academy", path: "/sports-academy" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact Us", path: "/contact" },
  ];

  const programs = [
    "Weight Training",
    "Cardio Fitness",
    "CrossFit",
    "Yoga",
    "Sports Academy",
  ];

  return (
    <footer className="bg-[#080808] text-gray-400">

      {/* ================= MAIN FOOTER ================= */}
      <div
        className="
          max-w-7xl
          mx-auto
          px-5 sm:px-6 lg:px-8
          py-5
          lg:py-16
        "
      >
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-10
            lg:gap-12
          "
        >

          {/* ================= BRAND ================= */}
          <div className="sm:col-span-2 lg:col-span-1">

            <div className="flex items-center gap-3">

              <i className="bi bi-barbell text-red-600 text-4xl"></i>

              <div>
                <h2 className="text-red-600 text-3xl font-bold tracking-[4px] m-0">
                  OCHRÉ
                </h2>

                <p className="text-white text-[11px] tracking-[4px] m-0 mt-1">
                  FITNESS CENTRE
                </p>
              </div>

            </div>

            {/* SINCE */}
            <div className="flex items-center gap-3 mt-6">

              <span className="w-10 h-[2px] bg-red-600"></span>

              <span className="text-red-600 text-sm font-semibold whitespace-nowrap">
                SINCE 2012
              </span>

              <span className="w-10 h-[2px] bg-red-600"></span>

            </div>

            <p className="mt-6 text-sm leading-7 max-w-sm">
              We build champions on the field and in life through
              training, discipline, dedication and determination.
            </p>

            {/* SOCIAL */}
            <div className="mt-7">

              <h4 className="text-white font-bold uppercase text-sm mb-4">
                Follow Us
              </h4>

              <div className="flex items-center gap-3">

                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="
                      w-10 h-10
                      flex items-center justify-center
                      rounded-full
                      border border-red-600
                      text-white
                      no-underline
                      hover:bg-red-600
                      hover:text-white
                      hover:scale-110
                      transition-all duration-300
                    "
                  >
                    <i className={`bi ${social.icon}`}></i>
                  </a>
                ))}

              </div>

            </div>

          </div>

          {/* ================= QUICK LINKS ================= */}
          <div>

            <FooterHeading title="Quick Links" />

            <ul className="list-none p-0 m-0 space-y-3 mt-5">

              {quickLinks.map((item) => (
                <li key={item.name}>

                  <Link
                    to={item.path}
                    className="
                      inline-block
                      text-gray-400
                      no-underline
                      text-sm
                      hover:text-red-500
                      hover:translate-x-1
                      transition-all duration-300
                    "
                  >
                    {item.name}
                  </Link>

                </li>
              ))}

            </ul>

          </div>

          {/* ================= PROGRAMS ================= */}
          <div>

            <FooterHeading title="Programs" />

            <ul className="list-none p-0 m-0 space-y-3 mt-5">

              {programs.map((program) => (
                <li
                  key={program}
                  className="text-gray-400 text-sm"
                >
                  {program}
                </li>
              ))}

            </ul>

          </div>

          {/* ================= CONTACT ================= */}
          <div>

            <FooterHeading title="Contact Us" />

            <div className="space-y-5 mt-5">

              {/* ADDRESS */}
              <div className="flex items-start gap-3">

                <i className="bi bi-geo-alt-fill text-red-600 text-lg mt-1 shrink-0"></i>

                <p className="text-sm leading-6 m-0">
                  Ochre Fitness Center
                  <br />
                  702 B First Floor,
                  <br />
                  Pandian Complex, Ganagiri Road,
                  <br />
                  Sivakasi, Tamil Nadu - 626189
                </p>

              </div>

              {/* PHONE */}
              <div className="flex items-start gap-3">

                <i className="bi bi-telephone-fill text-red-600 text-lg mt-1 shrink-0"></i>

                <div className="text-sm leading-6">

                  <a
                    href="tel:+919578852900"
                    className="
                      text-gray-400
                      no-underline
                      hover:text-red-500
                      transition-colors
                    "
                  >
                    +91 95788 52900
                  </a>

                  <br />

                  <a
                    href="tel:+917373087272"
                    className="
                      text-gray-400
                      no-underline
                      hover:text-red-500
                      transition-colors
                    "
                  >
                    +91 73730 87272
                  </a>

                </div>

              </div>

              {/* EMAIL */}
              <div className="flex items-start gap-3">

                <i className="bi bi-envelope-fill text-red-600 text-lg  shrink-0"></i>

                <a
                  href="mailto:Siva.Murugan24@gmail.com"
                  className="
                    text-gray-400
                    no-underline
                    hover:text-red-500
                    transition-colors
                    text-sm
                    break-all
                  "
                >
                  Siva.Murugan24@gmail.com
                </a>

              </div>

              {/* TIME */}
              <div className="flex items-start gap-3">

                <i className="bi bi-clock-fill text-red-600 text-lg mt-1 shrink-0"></i>

                <div className="text-sm leading-6">

                  <p className="m-0">
                    Mon - Sat: 05:00 AM - 09:00 PM
                  </p>

                  <p className="m-0">
                    Sun: 6:00 AM - 10:00 AM
                  </p>

                  <p className="m-0">
                    Ladies Time: 10:00 AM - 03:00 PM
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>
      </div>

      {/* ================= BOTTOM FOOTER ================= */}
      <div className="border-t border-white/10">

        <div
          className="
            max-w-7xl
            mx-auto
            px-5 sm:px-6 lg:px-8
            py-5
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-3
            text-center
            md:text-left
          "
        >

          {/* COPYRIGHT */}
          <p className="m-0 text-sm text-gray-500">
            © 2026 OCHRÉ Fitness Centre. All Rights Reserved.
          </p>

          {/* DESIGNED BY */}
          <p className="m-0 text-sm text-gray-500">
            Designed by{" "}
            <span className="text-red-600 font-semibold">
              Webniqo & ByteBuilders &trade;
            </span>
          </p>

        </div>

      </div>

    </footer>
  );
};


/* ================= FOOTER HEADING ================= */

const FooterHeading = ({ title }) => {
  return (
    <div>
      <h3 className="text-white text-lg font-bold uppercase tracking-wide m-0">
        {title}
      </h3>

      <div className="w-10 h-[3px] bg-red-600 mt-3 rounded-full"></div>
    </div>
  );
};

export default Footer;