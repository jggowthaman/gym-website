import Navbar from "../../Admin/Navbar";
import Statscards from "../../Admin/Statscards";
import RegistrationTable from "../../Admin/RegistrationTable";
import ContactTable from "../../Admin/ContactTable";
import Footer from "../../Admin/Footer";

const Dashboard = () => {
  return (
    <section className="min-h-screen bg-gray-100">

      {/* Top Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="max-w-[1700px] mx-auto px-5 lg:px-8 py-8">

        {/* Heading */}
        <div className="mb-8">

          <h1 className="text-4xl font-black text-gray-900">
            Dashboard
          </h1>

          <p className="text-gray-500 mt-2">
            View all registration forms and contact form submissions.
          </p>

        </div>

        {/* Statistics Cards */}
        <Statscards />

        {/* Registration Table */}
        <div className="mt-8">
          <RegistrationTable />
        </div>

        {/* Contact Table */}
        <div className="mt-8">
          <ContactTable />
        </div>

        {/* Footer */}
        <Footer />

      </main>

    </section>
  );
};

export default Dashboard;