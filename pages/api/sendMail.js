





const sendEmail = (email, message , name , subject) => {
 
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
        //console.log(result.body)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  module.exports = sendEmail