import { useEffect, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const StatsCards = () => {
  const [stats, setStats] = useState({
    totalRegistrations: 0,
    totalContacts: 0,
    todayRegistrations: 0,
    todayContacts: 0,
  });

  const [loading, setLoading] = useState(true);

  // ==========================================
  // CHECK IF DATE IS TODAY
  // ==========================================

  const isToday = (date) => {
    if (!date) return false;

    const itemDate = new Date(date);
    const today = new Date();

    return (
      itemDate.getFullYear() === today.getFullYear() &&
      itemDate.getMonth() === today.getMonth() &&
      itemDate.getDate() === today.getDate()
    );
  };

  // ==========================================
  // FETCH DASHBOARD DATA
  // ==========================================

  const fetchStats = async () => {
    try {
      setLoading(true);

    const [registrationResponse, contactResponse] =
  await Promise.all([
    fetch(`${import.meta.env.VITE_API_URL}/api/registrations`),
    fetch(`${import.meta.env.VITE_API_URL}/api/contacts`),
  ]);

      if (!registrationResponse.ok) {
        throw new Error("Failed to fetch registrations");
      }

      if (!contactResponse.ok) {
        throw new Error("Failed to fetch contacts");
      }

      const registrationData =
        await registrationResponse.json();

      const contactData =
        await contactResponse.json();

      // ==========================================
      // GET ARRAYS FROM API
      // ==========================================

      const registrations = Array.isArray(registrationData)
        ? registrationData
        : registrationData.registrations || [];

      const contacts = Array.isArray(contactData)
        ? contactData
        : contactData.contacts || [];

      // ==========================================
      // TOTAL COUNTS
      // ==========================================

      const totalRegistrations = registrations.length;

      const totalContacts = contacts.length;

      // ==========================================
      // TODAY COUNTS
      // ==========================================

      const todayRegistrations = registrations.filter(
        (item) => isToday(item.createdAt)
      ).length;

      const todayContacts = contacts.filter(
        (item) => isToday(item.createdAt)
      ).length;

      // ==========================================
      // UPDATE STATS
      // ==========================================

      setStats({
        totalRegistrations,
        totalContacts,
        todayRegistrations,
        todayContacts,
      });
    } catch (error) {
      console.error(
        "Dashboard Stats Error:",
        error
      );
    } finally {
      setLoading(false);
    }
  };

  // ==========================================
  // LOAD WHEN DASHBOARD OPENS
  // ==========================================

  useEffect(() => {
    fetchStats();
  }, []);

  // ==========================================
  // CARDS
  // ==========================================

  const cards = [
    {
      title: "Total Registrations",
      value: stats.totalRegistrations,
      description:
        stats.totalRegistrations === 1
          ? "1 registration"
          : `${stats.totalRegistrations} registrations`,
      icon: "bi-card-checklist",
      bg: "bg-pink-500",
      text: "text-green-600",
    },

    {
      title: "Total Contact Enquiries",
      value: stats.totalContacts,
      description:
        stats.totalContacts === 1
          ? "1 enquiry"
          : `${stats.totalContacts} enquiries`,
      icon: "bi-people-fill",
      bg: "bg-blue-600",
      text: "text-green-600",
    },

    {
      title: "Today's Registrations",
      value: stats.todayRegistrations,
      description:
        stats.todayRegistrations === 1
          ? "1 registration today"
          : `${stats.todayRegistrations} registrations today`,
      icon: "bi-calendar-event-fill",
      bg: "bg-orange-500",
      text: "text-green-600",
    },

    {
      title: "Today's Enquiries",
      value: stats.todayContacts,
      description:
        stats.todayContacts === 1
          ? "1 enquiry today"
          : `${stats.todayContacts} enquiries today`,
      icon: "bi-chat-dots-fill",
      bg: "bg-emerald-500",
      text: "text-green-600",
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-3">

      {cards.map((card, index) => (
        <div
          key={index}
          className="
            bg-white
            rounded-xl
            border
            border-gray-200
            shadow-sm
            px-3
            py-3
            hover:-translate-y-1
            hover:shadow-lg
            transition-all
            duration-300
          "
        >

          <div className="flex items-center gap-4">

            {/* ICON */}

            <div
              className={`
                ${card.bg}
                w-16
                h-16
                min-w-16
                rounded-2xl
                flex
                items-center
                justify-center
                shadow-lg
              `}
            >
              <i
                className={`bi ${card.icon} text-white text-3xl`}
              ></i>
            </div>

            {/* CONTENT */}

            <div className="min-w-0">

              <p className="text-[13px] text-gray-500 font-medium">
                {card.title}
              </p>

              <h2 className="text-[38px] font-bold leading-none mt-2 text-gray-900">

                {loading ? (
                  <span className="text-gray-300">
                    --
                  </span>
                ) : (
                  card.value
                )}

              </h2>

              <p
                className={`
                  ${card.text}
                  text-[12px]
                  font-semibold
                  mt-2
                `}
              >
                {loading
                  ? "Loading..."
                  : card.description}
              </p>

            </div>

          </div>

        </div>
      ))}

    </section>
  );
};

export default StatsCards;