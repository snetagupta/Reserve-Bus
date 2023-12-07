require("dotenv").config();
const {mongoose} = require("mongoose");

const connectToM = async () => {
    try{
        const URI = process.env.MONGO_URI;
         
        
    await mongoose.connect(URI);
    console.log("Connected to Mongodb");
    }catch(error){
        console.error("Error",error);
    }
};

module.exports = connectToM;