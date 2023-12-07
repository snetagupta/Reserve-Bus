const Trip = require("../models/tripModel");

// Fetch trips
const getTrip = async (req, res) => {
  try {
    // const currentDate = new Date();
    // const tripsAll = await Trip.find({
      
     
    // }).sort({ currentDate: -1 })
    // .limit(50)
    // res.json(tripsAll);
    const page = parseInt(req.query.page) || 1;
    const limit = 50;
    const skip = (page - 1) * limit;

    const trips = await Trip.find().skip(skip).limit(limit);

    res.json(trips);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error" });
  }
};

module.exports = getTrip;
