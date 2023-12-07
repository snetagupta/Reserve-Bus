const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: { type: String },
    gender: { type: String },
    age: { type: Number },
    email: { type: String },
    phone: { type: Number }
  });
const bookedTicketsSchema=new Schema({
    userData:[userSchema],
    fromTo:{From: {type:String}, To: {type:String}, Date: {type:String}},
    selectedBusDetails:{EndTime:{type:String},busFare:{type:Number},busName:{type:String},category: {type:String},rating: {type:Number},startTime:{type:String},totalSeats:{type:Number},totalWindowSeatsAvailable:{type:Number}},
    selectedSeats:{type:Array}
  })

const booking = mongoose.model('booking', bookedTicketsSchema);
module.exports = booking;