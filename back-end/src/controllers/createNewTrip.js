
const trip = require("../models/tripModel");


const createNewTrip = async(req,res) =>{

    try {
       const data =new trip(req.body)
    //    console.log(data);
       await data.save()
        res.send(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({error:"Internal Error"});
    }
    
    };
    
    module.exports = createNewTrip;
    