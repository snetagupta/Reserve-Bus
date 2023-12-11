const Trip = require("../models/tripModel");

const getTripByDate = async (req, res) => {
  try {
    // Check if the request has a date parameter
    const { date } = req.params;
    if (!date) {
      return res.status(400).json({ error: "Date parameter is required" });
    }
    // Fetch trips for the specified date
    const trips = await Trip.find({
      date:date
    });
    if (trips.length < 1) {
      return res.status(404).json({ error: "Data not found" });
    }
    res.json(trips);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = getTripByDate;
