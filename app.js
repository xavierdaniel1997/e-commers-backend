const express = require("express");
const connectDB = require('./config/db')
require('dotenv').config()

const userRoute = require('./routes/userRoute')
const app = express();

connectDB()
   
app.get("/", (req, res) => {
  res.send("Hello from backend");
});
app.use('/api', userRoute)

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`server starts at port ${port}`);
});
