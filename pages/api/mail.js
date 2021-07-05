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



const post = async  (req,res) =>{
    const { email, name, subject, message , secret } = req.body;
    const date = (new Date).getDate()
    const hour = (new Date).getHours()
    const minute = (new Date).getMinutes()
  if(secret ===  date+hour+minute){
  
    if (email && name && subject && message) {
        res.status(200).json({ msg: "message sent" });
      return sendEmail(email, message , name , subject)
    } else {
      return res.status(404).json({ msg: "message not sent" });
    }
  
  }
  else{
      return res.status(404).json({ msg: "Secret Didn't matched" });
  }


}


export default handler