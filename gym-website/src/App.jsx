import { Routes, Route } from "react-router-dom";

// ================= USER PAGES =================
import Home from "./pages/Home";
import About from "./pages/About/About";
import Gym from "./pages/Gym";
import SportsAcademy from "./pages/SportsAcademy";
import Contact from "./pages/Contact/Contact";
import Fees from "./pages/Fees/Fees";

// ================= ADMIN PAGES =================
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Dashboard from "./pages/Dashboard/Dashboard";

// ================= COMPONENTS =================
import TopBar from "./components/TopBar/TopBar";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

// ================= OPTIONAL =================
// Create this page later
import NotFound from "./pages/NotFound/NotFound";


import CTA from "./components/CTA/CTA";

// ================= USER LAYOUT =================
function UserLayout({ children }) {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>

      {/* ================= USER WEBSITE ================= */}

      <Route
        path="/"
        element={
          <UserLayout>
            <Home />
          </UserLayout>
        }
      />

      <Route
        path="/about"
        element={
          <UserLayout>
            <About />
          </UserLayout>
        }
      />

      <Route
        path="/gym"
        element={
          <UserLayout>
            <Gym />
          </UserLayout>
        }
      />

      <Route
        path="/sports-academy"
        element={
          <UserLayout>
            <SportsAcademy />
          </UserLayout>
        }
      />

      <Route
        path="/fees"
        element={
          <UserLayout>
            <Fees />
          </UserLayout>
        }
      />

      <Route
        path="/contact"
        element={
          <UserLayout>
            <Contact />
          </UserLayout>
        }
      />

      <Route
  path="/cta"
  element={
    <UserLayout>
      <CTA />
    </UserLayout>
  }
/>

      {/* ================= ADMIN ================= */}

      <Route path="/admin" element={<Login />} />

      <Route path="/signup" element={<Signup />} />

      <Route path="/admin/dashboard" element={<Dashboard />} />

      {/* ================= 404 ================= */}

      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}

export default App;