
const booking = require("../models/bookingModel");
const stripe = require("stripe")("sk_test_51OOtzRSB3JGtnuUYLvjHUZ4iXzF0QWpbribAd0IRfAI5C88tV9mt4hntPgjkBwx5I3U8P9MxQJlcusGynGgtgeNb0067SCwRTE")

const savedTickets = async (req, res) => {
  try {
    const { savedBooking } = new booking(req.body);
    await savedBooking.save();
    res.send(savedBooking);

    const lineItems = [
      {
        price_data: {
          currency: "inr",
          product_data: {
            name: savedBooking.selectedBusDetails.busName,
          },
          unit_amount: savedBooking.selectedBusDetails.busFare * 100,
        },
        quantity: savedBooking.selectedSeats.length,
      },
    ];

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error" });
  }
};

module.exports = savedTickets;
