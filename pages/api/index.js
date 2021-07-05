const express = require('express');
const app = express();
const cors = require('cors')
require("dotenv").config();


app.use(cors());
app.use(express.urlencoded({ extended: false }));

// parse application/json
app.use(express.json());
const sendEmail = require("./sendMail");


const sendEmail =  require('./sendMail')

import Cors from 'cors'

const cors = Cors({
  methods: ['GET', 'HEAD'],
})


function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}



async function handler(req, res) {
    // Run the middleware
    await runMiddleware(req, res, cors)
  
    // Rest of the API logic
   post(req,res)
  }



  const post = ("/api", function async (req, res, next) {
    const date = (new Date).getDate()
    const hour = (new Date).getHours()
    const minute = (new Date).getMinutes()
 console.log({msg: date+hour+minute })
  res.status(200).json({ msg: date+hour+minute });

});


export default handler








module.exports=jett