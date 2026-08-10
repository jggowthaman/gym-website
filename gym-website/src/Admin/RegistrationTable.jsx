import { useEffect, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const RegistrationTable = () => {
  const [search, setSearch] = useState("");
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ==========================================
  // FETCH REGISTRATIONS FROM DATABASE
  // ==========================================

  const fetchRegistrations = async () => {
    try {
      setLoading(true);
      setError("");

const response = await fetch(
  `${import.meta.env.VITE_API_URL}/api/registrations`
);

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to fetch registrations"
        );
      }

      setRegistrations(data.registrations || []);
    } catch (error) {
      console.error("Fetch Registrations Error:", error);

      setError(
        "Unable to load registrations from server."
      );
    } finally {
      setLoading(false);
    }
  };

  // ==========================================
  // FETCH WHEN DASHBOARD OPENS
  // ==========================================

  useEffect(() => {
    fetchRegistrations();
  }, []);

  // ==========================================
  // SEARCH
  // ==========================================

  const filteredRegistrations = registrations.filter(
    (item) => {
      const value = search.toLowerCase();

      return (
        (item.name || "")
          .toLowerCase()
          .includes(value) ||
        (item.phone || "")
          .toString()
          .includes(value) ||
        (item.email || "")
          .toLowerCase()
          .includes(value) ||
        (item.membership || "")
          .toLowerCase()
          .includes(value) ||
        (item.goal || "")
          .toLowerCase()
          .includes(value)
      );
    }
  );

  // ==========================================
  // FORMAT MONGODB DATE
  // ==========================================

  const formatDate = (date) => {
    if (!date) {
      return "-";
    }

    return new Date(date).toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <section className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden mb-5">

      {/* ================= HEADER ================= */}

      <div className="px-4 py-3 flex flex-col md:flex-row md:items-center justify-between gap-3">

        <div>
          <h2 className="text-[16px] md:text-[17px] font-bold text-gray-900">
            Registration Form Submissions
          </h2>

          <p className="text-[11px] text-gray-500 mt-1">
            Free trial registrations received from the website
          </p>
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto">

          {/* SEARCH */}

          <div className="relative flex-1 md:w-[330px]">

            <i className="bi bi-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"></i>

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name, phone or email..."
              className="
                w-full
                h-9
                pl-9
                pr-3
                border
                border-gray-300
                rounded-md
                text-[12px]
                text-gray-700
                outline-none
                focus:border-red-500
                focus:ring-1
                focus:ring-red-100
              "
            />

          </div>

          {/* REFRESH BUTTON */}

          <button
            type="button"
            onClick={fetchRegistrations}
            disabled={loading}
            title="Refresh registrations"
            className="
              w-9
              h-9
              flex
              items-center
              justify-center
              border
              border-gray-300
              rounded-md
              text-gray-600
              hover:text-red-600
              hover:border-red-500
              disabled:opacity-50
              transition
            "
          >
            <i
              className={`bi bi-arrow-clockwise text-sm ${
                loading ? "animate-spin" : ""
              }`}
            ></i>
          </button>

        </div>

      </div>

      {/* ================= TABLE ================= */}

      <div className="px-4 overflow-x-auto">

        <table className="w-full min-w-[1000px] border-collapse">

          {/* TABLE HEADER */}

          <thead>

            <tr className="bg-gray-50 border-y border-gray-200">

              <th className="px-3 py-2 text-left text-[11px] font-bold text-gray-800">
                #
              </th>

              <th className="px-3 py-2 text-left text-[11px] font-bold text-gray-800">
                Name
              </th>

              <th className="px-3 py-2 text-left text-[11px] font-bold text-gray-800">
                Phone
              </th>

              <th className="px-3 py-2 text-left text-[11px] font-bold text-gray-800">
                Email
              </th>

              <th className="px-3 py-2 text-left text-[11px] font-bold text-gray-800">
                Membership
              </th>

              <th className="px-3 py-2 text-left text-[11px] font-bold text-gray-800">
                Fitness Goal
              </th>

              <th className="px-3 py-2 text-left text-[11px] font-bold text-gray-800">
                Submitted On
              </th>

              <th className="px-3 py-2 text-center text-[11px] font-bold text-gray-800">
                Action
              </th>

            </tr>

          </thead>

          {/* TABLE BODY */}

          <tbody>

            {/* ================= LOADING ================= */}

            {loading && (
              <tr>
                <td
                  colSpan="8"
                  className="py-10 text-center"
                >
                  <i className="bi bi-arrow-repeat animate-spin text-2xl text-red-600"></i>

                  <p className="text-sm text-gray-500 mt-2">
                    Loading registrations...
                  </p>
                </td>
              </tr>
            )}

            {/* ================= ERROR ================= */}

            {!loading && error && (
              <tr>
                <td
                  colSpan="8"
                  className="py-10 text-center"
                >
                  <i className="bi bi-exclamation-circle text-2xl text-red-600"></i>

                  <p className="text-sm text-red-600 mt-2">
                    {error}
                  </p>

                  <button
                    type="button"
                    onClick={fetchRegistrations}
                    className="
                      mt-3
                      bg-red-600
                      hover:bg-red-700
                      text-white
                      text-xs
                      px-4
                      py-2
                      rounded-md
                      transition
                    "
                  >
                    Try Again
                  </button>
                </td>
              </tr>
            )}

            {/* ================= DATABASE DATA ================= */}

            {!loading &&
              !error &&
              filteredRegistrations.map(
                (item, index) => (
                  <tr
                    key={item._id}
                    className="
                      border-b
                      border-gray-200
                      hover:bg-gray-50
                      transition
                    "
                  >

                    {/* NUMBER */}

                    <td className="px-3 py-3 text-[11px] text-gray-800">
                      {index + 1}
                    </td>

                    {/* NAME */}

                    <td className="px-3 py-3 text-[11px] font-semibold text-gray-800">
                      {item.name || "-"}
                    </td>

                    {/* PHONE */}

                    <td className="px-3 py-3 text-[11px] text-gray-800">
                      {item.phone || "-"}
                    </td>

                    {/* EMAIL */}

                    <td className="px-3 py-3 text-[11px] text-gray-800">
                      {item.email || "-"}
                    </td>

                    {/* MEMBERSHIP */}

                    <td className="px-3 py-3 text-[11px] text-gray-800">

                      <span className="
                        inline-flex
                        px-2.5
                        py-1
                        rounded-full
                        bg-red-50
                        text-red-600
                        font-semibold
                      ">
                        {item.membership || "-"}
                      </span>

                    </td>

                    {/* FITNESS GOAL */}

                    <td className="px-3 py-3 text-[11px] text-gray-800 max-w-[220px]">

                      <p
                        className="truncate"
                        title={item.goal}
                      >
                        {item.goal || "-"}
                      </p>

                    </td>

                    {/* SUBMITTED DATE */}

                    <td className="px-3 py-3 text-[11px] text-gray-800 whitespace-nowrap">
                      {formatDate(item.createdAt)}
                    </td>

                    {/* ACTION */}

                    <td className="px-3 py-3 text-center">

                      <button
                        type="button"
                        title="View registration"
                        className="
                          w-9
                          h-7
                          border
                          border-gray-300
                          rounded-md
                          inline-flex
                          items-center
                          justify-center
                          text-gray-700
                          hover:border-red-500
                          hover:text-red-600
                          transition
                        "
                      >
                        <i className="bi bi-eye text-sm"></i>
                      </button>

                    </td>

                  </tr>
                )
              )}

            {/* ================= NO DATA ================= */}

            {!loading &&
              !error &&
              filteredRegistrations.length === 0 && (
                <tr>
                  <td
                    colSpan="8"
                    className="py-10 text-center"
                  >
                    <i className="bi bi-inbox text-3xl text-gray-300"></i>

                    <p className="text-sm text-gray-500 mt-2">
                      No registrations found.
                    </p>
                  </td>
                </tr>
              )}

          </tbody>

        </table>

      </div>

      {/* ================= BOTTOM ================= */}

      <div
        className="
          px-4
          py-3
          flex
          flex-col
          sm:flex-row
          sm:items-center
          justify-between
          gap-3
        "
      >

        {/* REAL DATABASE COUNT */}

        <p className="text-[11px] text-gray-500">

          Showing{" "}

          <span className="font-semibold text-gray-700">
            {filteredRegistrations.length}
          </span>

          {" "}of{" "}

          <span className="font-semibold text-gray-700">
            {registrations.length}
          </span>

          {" "}registrations

        </p>

        {/* REFRESH */}

        <button
          type="button"
          onClick={fetchRegistrations}
          disabled={loading}
          className="
            flex
            items-center
            justify-center
            gap-2
            border
            border-gray-300
            rounded-md
            px-3
            py-2
            text-[11px]
            text-gray-600
            hover:border-red-500
            hover:text-red-600
            disabled:opacity-50
            transition
          "
        >
          <i
            className={`bi bi-arrow-clockwise ${
              loading ? "animate-spin" : ""
            }`}
          ></i>

          Refresh
        </button>

      </div>

    </section>
  );
};

export default RegistrationTable;