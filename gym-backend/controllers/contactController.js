import Contact from "../models/Contact.js";

export const createContact = async (req, res) => {
  try {
    console.log("📩 Contact POST request received");
    console.log("Form data:", req.body);

    const { name, mobile, email, subject, message } = req.body;

    if (!name || !mobile || !email || !subject || !message) {
      console.log("❌ Missing fields");

      return res.status(400).json({
        success: false,
        message: "Please fill all fields",
      });
    }

    const newContact = await Contact.create({
      name,
      mobile,
      email,
      subject,
      message,
    });

    console.log("✅ Contact saved to MongoDB:");
    console.log(newContact);

    return res.status(201).json({
      success: true,
      message: "Message sent successfully",
      contact: newContact,
    });
  } catch (error) {
    console.error("❌ Contact save error:");
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: contacts.length,
      contacts,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};