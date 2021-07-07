

import Cors from 'cors'

const cors = Cors({
  methods: ['GET', 'HEAD' ,'POST'],
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
    console.log( email, name, subject, message , secret)
    const date = (new Date).getDate()
    const hour = (new Date).getHours()
    const minute = (new Date).getMinutes()
  if(secret ===  date+hour+minute){
  
    if (email && name && subject && message) {
      
      return sendEmail(email, message , name , subject ,req , res)



    } else {
      return res.status(404).json({ msg: "message not sent" });
    }
  
  }
  else{
      return res.status(404).json({ msg: "Secret Didn't matched" });
  }


}






const sendEmail = (email, message , name , subject , req ,res) => {
 
  const mailjet = require("node-mailjet").connect(process.env.API_KEY, process.env.SECRET)
  const request = mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: 'piyusharyanofficial@gmail.com',
          Name: name,
        },
        To: [
          {
            Email: 'piyusharyanofficial@gmail.com',
            Name: 'Piyush',
          },
        ],
        Subject: "Someone contacted you from your website",
        TextPart:`Hi Piyush,
          There is a message for you from ${name} 
         Subject  : ${subject} 
         Message : ${message} 
         EmailID : ${email},
        
        
        `,
      //   Attachments: [
      //     {
      //       ContentType: "application/pdf",
      //       Filename: "Registration.pdf",
      //       Base64Content: string64,
      //     },
      //   ],

        CustomID: "",
      },
    ],
  });
  request
    .then((result) => {
      console.log("Email sent " );
      res.status(200).json({ msg: "message sent" });
      //console.log(result.body)
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({msg:err?.ErrorMessage})
    });
};


















export default handler