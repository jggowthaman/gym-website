import Registration from "../models/Registration.js";


// ========================================
// CREATE REGISTRATION
// ========================================

export const createRegistration = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      membership,
      goal,
    } = req.body;

    if (
      !name ||
      !email ||
      !phone ||
      !membership ||
      !goal
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all fields",
      });
    }

    const registration = await Registration.create({
      name,
      email,
      phone,
      membership,
      goal,
    });

    console.log("================================");
    console.log("🏋️ NEW GYM REGISTRATION");
    console.log("Name:", registration.name);
    console.log("Email:", registration.email);
    console.log("Phone:", registration.phone);
    console.log("Membership:", registration.membership);
    console.log("Goal:", registration.goal);
    console.log("================================");

    return res.status(201).json({
      success: true,
      message: "Registration submitted successfully",
      registration,
    });

  } catch (error) {
    console.error("Registration Error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to submit registration",
    });
  }
};


// ========================================
// GET ALL REGISTRATIONS
// ========================================

export const getRegistrations = async (req, res) => {
  try {
    const registrations = await Registration.find()
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      registrations,
    });

  } catch (error) {
    console.error("Fetch Registration Error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to fetch registrations",
    });
  }
};