const express = require('express');
const app = express();
const cors = require('cors')
require("dotenv").config();


app.use(cors());
app.use(express.urlencoded({ extended: false }));

// parse application/json
app.use(express.json());
const sendEmail = require("./sendMail");

const mailjet = require("node-mailjet").connect(
  process.env.API_KEY,
  process.env.SECRET
);

const jett = ("/api", function async (req, res, next) {
    const date = (new Date).getDate()
    const hour = (new Date).getHours()
    const minute = (new Date).getMinutes()
 console.log({msg: date+hour+minute })
  res.status(200).json({ msg: date+hour+minute });

});



module.exports=jett