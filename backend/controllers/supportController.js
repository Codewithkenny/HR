const Support = require("../models/support");

exports.createSupportRequest = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate input
    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ error: "Name, email, and message are required" });
    }

    // Create the support request
    const support = await Support.create({
      name,
      email,
      message,
    });

    // Respond with the created support request
    res.status(201).json(support);
  } catch (error) {
    // Log the error for debugging
    console.error(error);

    // Respond with a server error message
    res.status(500).json({ error: "Error submitting support request" });
  }
};
