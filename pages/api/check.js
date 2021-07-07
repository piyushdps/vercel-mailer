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


  const post =  async (req, res, next)=> {
    const date = (new Date).getDate()
    const hour = (new Date).getHours()
    const minute = (new Date).getMinutes()
 console.log({msg: date+hour+minute })
  res.status(200).json({ msg: date+hour+minute });

}

export default handler