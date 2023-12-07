// const Trip = require("../models/tripModel");

// const getTripByQuery = async (req, res) => {

  // NEWWWWWWWWWWWWWWWWWWWWWWWWWW
//   try {
//    const trips = await Trip.find(req.query);
// res.json(trips);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Error" });
//   }
// };

// NEWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
// const { From, To } = req.query;
// try {
//       const result = await Trip.find({ From, To });
//       result.length > 0 ? res.status(200).json(result) : res.status(404).send("No result found");
//     } catch (error) {
//           console.error(error);
//           res.status(500).json({ error: "Internal Error" });
//         }
      

// module.exports = getTripByQuery;


const Trip = require("../models/tripModel");

const getTripByQuery = async (req, res) => {
  try {
    const { From, To } = req.query;

    // Input Validation
    if (!From || !To) {
      return res.status(400).json({ error: "Both 'From' and 'To' are required in the query." });
    }

    const result = await Trip.find({ From, To });

    // Send JSON response
    if (result.length > 0) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: "No result found" });
    }
  } catch (error) {
    console.error(error);

    // Handle specific Mongoose errors
    if (error.name === "CastError") {
      return res.status(400).json({ error: "Invalid ID format" });
    }

    res.status(500).json({ error: "Internal Error" });
  }
};

module.exports = getTripByQuery;
