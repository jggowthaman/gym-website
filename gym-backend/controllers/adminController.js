import Admin from "../models/Admin.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// ===============================
// ADMIN SIGNUP
// ===============================
export const adminSignup = async (req, res) => {
  try {
    const {
      name,
      email,
      username,
      phone,
      address,
      password,
      role,
    } = req.body;

    // Check empty fields
    if (
      !name ||
      !email ||
      !username ||
      !phone ||
      !address ||
      !password ||
      !role
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all fields",
      });
    }

    // Check existing email
    const existingEmail = await Admin.findOne({
      email: email.toLowerCase(),
    });

    if (existingEmail) {
      return res.status(400).json({
        success: false,
        message: "Email already registered",
      });
    }

    // Check existing username
    const existingUsername = await Admin.findOne({
      username: username,
    });

    if (existingUsername) {
      return res.status(400).json({
        success: false,
        message: "Username already exists",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save Admin
    const newAdmin = await Admin.create({
      name,
      email: email.toLowerCase(),
      username,
      phone,
      address,
      password: hashedPassword,
      role,
    });

    console.log("✅ Admin Created Successfully");
    console.log("📧 Email:", newAdmin.email);
    console.log("👤 Username:", newAdmin.username);

    return res.status(201).json({
      success: true,
      message: "Admin account created successfully",

      admin: {
        id: newAdmin._id,
        name: newAdmin.name,
        email: newAdmin.email,
        username: newAdmin.username,
        phone: newAdmin.phone,
        address: newAdmin.address,
        role: newAdmin.role,
      },
    });
  } catch (error) {
    console.error("❌ Admin Signup Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ===============================
// ADMIN LOGIN
// ===============================
export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check fields
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    // Find admin
    const admin = await Admin.findOne({
      email: email.toLowerCase(),
    });

    if (!admin) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // Compare password
    const isPasswordCorrect = await bcrypt.compare(
      password,
      admin.password
    );

    if (!isPasswordCorrect) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // Create token
    const token = jwt.sign(
      {
        adminId: admin._id,
        role: admin.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    console.log("✅ Admin Login Successful");
    console.log("📧 Email:", admin.email);

    return res.status(200).json({
      success: true,
      message: "Login successful",

      token,

      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        username: admin.username,
        phone: admin.phone,
        address: admin.address,
        role: admin.role,
      },
    });
  } catch (error) {
    console.error("❌ Admin Login Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};