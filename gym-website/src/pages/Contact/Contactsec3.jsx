import "bootstrap-icons/font/bootstrap-icons.css";

const Contactsec3 = () => {
  const mapLink =
    "https://maps.app.goo.gl/a329F5kcmL3bcBgL6";

  return (
    <section className="relative w-full py-10 bg-white overflow-hidden">

  {/* Map Container */}
  <div className="relative w-full h-[500px] md:h-[450px] rounded-none overflow-hidden my-4">

    {/* Google Map */}
    <iframe
      src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=Ochre%20Fitness%20Centre%2C%20Gnanagiri%20Road%2C%20opposite%20to%20Airtel%20showroom%20%26%20JCI%20kids%20school%2C%20Solai%20Colony%2C%20Kamarajapuram%20Colony%2C%20Sivakasi%2C%20Tamil%20Nadu%2C%20India&maptype=roadmap"
      className="w-full h-full border-0"
      loading="lazy"
      allowFullScreen
    ></iframe>

    {/* Floating Card */}
    <div
      className="
        absolute
        left-4
        md:left-16
        top-8
        md:top-16
        bg-white
        w-[300px]
        md:w-[360px]
        p-8
        shadow-2xl
        rounded-xl
        z-20
        py-4
        px-3
        my-5
        mx-
        
      "
    >
        
      <h2 className="text-4xl font-black uppercase text-black">
        FIND US{" "}
        <span className="text-red-600">
          HERE
        </span>
      </h2>

      <div className="w-16 h-1 bg-red-600 mt-4 mb-6"></div>

      <p className="text-gray-600 text-lg leading-8">
        We are conveniently located in the
        heart of the city with easy access
        and parking facilities.
      </p>

      <a
        href={mapLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          className="
            mt-8
            w-full
            h-14
            bg-red-600
            text-white
            font-bold
            uppercase
            rounded-lg
            flex
            items-center
            justify-center
            gap-3
            hover:bg-black
            duration-300
          "
        >
          GET DIRECTIONS
          <i className="bi bi-send-fill"></i>
        </button>
      </a>
    </div>

  </div>
</section>
  );
};

export default Contactsec3;