const Event = require("../models/events");

exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.findAll();
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: "Error fetching events" });
  }
};

exports.createEvent = async (req, res) => {
  try {
    const { title, date } = req.body;
    if (!title || !date) {
      return res.status(400).json({ error: "Title and date are required" });
    }

    const newEvent = await Event.create({ title, date });
    res.status(201).json(newEvent);
  } catch (error) {
    console.error("Error creating event:", error);
    res.status(500).json({ error: "Error creating event" });
  }
};