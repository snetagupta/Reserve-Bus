const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectToM = require("./src/config/database");
const router = require("./src/routes/routes");

require("dotenv").config();


const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`The server is running on http://localhost:${PORT}`);


    connectToM();
});


