import { useEffect, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const ContactTable = () => {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ==========================================
  // GET CONTACT DATA FROM MONGODB
  // ==========================================

  const fetchContacts = async () => {
    try {
      setLoading(true);
      setError("");

const response = await fetch(
  `${import.meta.env.VITE_API_URL}/api/contacts`
);

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to fetch contact enquiries"
        );
      }

      // Supports:
      // res.json({ contacts })
      // OR
      // res.json(contacts)

      if (Array.isArray(data)) {
        setContacts(data);
      } else {
        setContacts(data.contacts || []);
      }
    } catch (error) {
      console.error("Contact Fetch Error:", error);

      setError(
        "Unable to load contact enquiries from server."
      );
    } finally {
      setLoading(false);
    }
  };

  // ==========================================
  // LOAD DATA WHEN DASHBOARD OPENS
  // ==========================================

  useEffect(() => {
    fetchContacts();
  }, []);

  // ==========================================
  // SEARCH
  // ==========================================

  const filteredContacts = contacts.filter((item) => {
    const value = search.toLowerCase();

    return (
      (item.name || "").toLowerCase().includes(value) ||
      (item.mobile || item.phone || "")
        .toString()
        .includes(value) ||
      (item.email || "").toLowerCase().includes(value) ||
      (item.subject || "").toLowerCase().includes(value)
    );
  });

  // ==========================================
  // DATE FORMAT
  // ==========================================

  const formatDate = (date) => {
    if (!date) return "-";

    return new Date(date).toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <section className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">

      {/* ================= HEADER ================= */}

      <div className="px-4 py-3 flex flex-col md:flex-row md:items-center justify-between gap-3">

        <div>
          <h2 className="text-[16px] md:text-[17px] font-bold text-gray-900">
            Contact Form Submissions
          </h2>

          <p className="text-[11px] text-gray-500 mt-1">
            Enquiries received from the website contact form
          </p>
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto">

          {/* SEARCH */}

          <div className="relative flex-1 md:w-[330px]">

            <i
              className="
                bi bi-search
                absolute
                left-3
                top-1/2
                -translate-y-1/2
                text-gray-400
                text-sm
              "
            ></i>

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
            onClick={fetchContacts}
            title="Refresh enquiries"
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

        <table className="w-full min-w-[1050px] border-collapse">

          {/* TABLE HEAD */}

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
                Subject
              </th>

              <th className="px-3 py-2 text-left text-[11px] font-bold text-gray-800">
                Message
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

            {/* LOADING */}

            {loading && (
              <tr>
                <td
                  colSpan="8"
                  className="py-10 text-center"
                >
                  <i className="bi bi-arrow-repeat animate-spin text-2xl text-red-600"></i>

                  <p className="text-sm text-gray-500 mt-2">
                    Loading contact enquiries...
                  </p>
                </td>
              </tr>
            )}

            {/* ERROR */}

            {!loading && error && (
              <tr>
                <td
                  colSpan="8"
                  className="py-10 text-center"
                >
                  <i className="bi bi-exclamation-circle text-red-600 text-2xl"></i>

                  <p className="text-sm text-red-600 mt-2">
                    {error}
                  </p>

                  <button
                    type="button"
                    onClick={fetchContacts}
                    className="
                      mt-3
                      bg-red-600
                      text-white
                      px-4
                      py-2
                      rounded-md
                      text-xs
                      hover:bg-red-700
                    "
                  >
                    Try Again
                  </button>
                </td>
              </tr>
            )}

            {/* CONTACT DATA */}

            {!loading &&
              !error &&
              filteredContacts.map((item, index) => (

                <tr
                  key={item._id || index}
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
                    {item.mobile || item.phone || "-"}
                  </td>

                  {/* EMAIL */}

                  <td className="px-3 py-3 text-[11px] text-gray-800">
                    {item.email || "-"}
                  </td>

                  {/* SUBJECT */}

                  <td className="px-3 py-3 text-[11px] text-gray-800">
                    {item.subject || "-"}
                  </td>

                  {/* MESSAGE */}

                  <td className="px-3 py-3 text-[11px] text-gray-800 max-w-[250px]">

                    <p
                      className="truncate"
                      title={item.message}
                    >
                      {item.message || "-"}
                    </p>

                  </td>

                  {/* DATE */}

                  <td className="px-3 py-3 text-[11px] text-gray-800 whitespace-nowrap">
                    {formatDate(
                      item.createdAt ||
                      item.submittedAt ||
                      item.date
                    )}
                  </td>

                  {/* ACTION */}

                  <td className="px-3 py-3 text-center">

                    <button
                      type="button"
                      title="View enquiry"
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

              ))}

            {/* NO CONTACTS */}

            {!loading &&
              !error &&
              filteredContacts.length === 0 && (

                <tr>

                  <td
                    colSpan="8"
                    className="py-10 text-center text-sm text-gray-500"
                  >
                    <i className="bi bi-inbox text-3xl text-gray-300"></i>

                    <p className="mt-2">
                      No contact enquiries found.
                    </p>

                  </td>

                </tr>

              )}

          </tbody>

        </table>

      </div>

      {/* ================= FOOTER ================= */}

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

        <p className="text-[11px] text-gray-500">

          Showing{" "}
          <span className="font-semibold text-gray-700">
            {filteredContacts.length}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-gray-700">
            {contacts.length}
          </span>{" "}
          enquiries

        </p>

        {/* REFRESH */}

        <button
          type="button"
          onClick={fetchContacts}
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

export default ContactTable;