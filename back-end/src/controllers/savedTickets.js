const booking = require("../models/bookingModel");

const savedTickets = async(req,res) =>{

    try {
       const savedBooking =new booking(req.body)
       await savedBooking.save()
        res.send(savedBooking);
    } catch (error) {
        console.error(error);
        res.status(500).json({error:"Error"});
    }
    
    };
    
    module.exports = savedTickets ;