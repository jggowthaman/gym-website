
      function TopBar() {
  return (
    <div className="hidden lg:block bg-[#c1121f] text-white text-[13px]">
      <div className="max-w-[1320px] mx-auto px-4">

        <div className="flex items-center justify-between h-11">

          {/* Left */}

          <div className="flex items-center gap-8">

            <div className="flex items-center gap-2">
              <i className="bi bi-clock text-base"></i>
              <span>Open Mon - Sat : 5:30 AM - 10:00 PM </span>
            </div>

            <div className="flex items-center gap-2">
              <i className="bi bi-geo-alt-fill text-base"></i>
              <span>702 B Pandian Complex, First Floor, Ganagiri Road, Sivakasi, Tamil Nadu - 626189</span>
            </div>

            <div className="flex items-center gap-2">
              <i className="bi bi-envelope-fill text-base"></i>
              <span>Siva.Murugan24@gmail.com</span>
            </div>

          </div>

          {/* Right */}

          <div className="flex items-center gap-5">

            <a
              href="https://wa.me/919578852900"
              className="hover:text-black duration-300"
            >
              <i className="bi bi-whatsapp"></i>
            </a>

            <a
              href="https://www.instagram.com/ochrefitnesscentre"
              className="hover:text-black duration-300"
            >
              <i className="bi bi-instagram"></i>
            </a>

            <a
              href="https://youtube.com/@ochrefitnesscentresivakasi6017"
              className="hover:text-black duration-300"
            >
              <i className="bi bi-youtube"></i>
            </a>

          </div>

        </div>

      </div>
    </div>
  );
}


export default TopBar;