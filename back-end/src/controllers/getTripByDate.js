const Trip = require("../models/tripModel");

const getTripByDate = async (req, res) => {
  try {
    // Check if the request has a date parameter
    const { date } = req.params;
    if (!date) {
      return res.status(400).json({ error: "Date parameter is required" });
    }

    // Convert the date parameter to a JavaScript Date object
    // const tripDate = new Date(date);

    // Fetch trips for the specified date
    const trips = await Trip.find({
      date:date
      // date: {
      //   $gte: tripDate,
      //   $lt: new Date(tripDate.getTime() + 24 * 60 * 60 * 1000),
      // },
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
