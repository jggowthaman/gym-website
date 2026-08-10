import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b">

      <div className="w-full px-4 md:px-6 lg:px-8">

        <div className="h-16 md:h-[72px] flex items-center justify-between">

          {/* ================= Left ================= */}
<div className="flex items-center gap-3">
  <Link to="/admin/dashboard" className="flex items-center gap-2">

    <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center">
      <span className="text-white font-black text-lg">
        <i class="bi bi-lightning-charge"></i>
      </span>
    </div>

    <div>
      <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-red-600">
        OCHRÉ
      </h2>

      <p className="text-[8px] md:text-[10px] tracking-[4px] uppercase text-gray-500">
        FITNESS CENTER
      </p>
    </div>

  </Link>
</div>

          {/* ================= Right ================= */}
<div className="flex items-center gap-3">

  {/* Notification */}

  <button className="relative w-10 h-10 rounded-lg hover:bg-gray-100 flex items-center justify-center">

    <i className="bi bi-bell text-lg"></i>

    <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-red-600 rounded-full text-white text-[9px] flex items-center justify-center">
      3
    </span>

  </button>

  {/* Profile */}

  <div className="w-10 h-10 rounded-full bg-gray-800 border-2 border-red-600 flex items-center justify-center">

    <i className="bi bi-person-fill text-white"></i>

  </div>

  {/* Logout */}

  <Link
    to="/admin"
    className="hidden md:flex bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg items-center gap-2"
  >
    <i className="bi bi-box-arrow-right"></i>
    Logout
  </Link>

</div>

        </div>

      </div>

    </header>
  );
};

export default Navbar;