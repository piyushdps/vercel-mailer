export default function (req , res) {
   console.log( req.body)
    res.json({data:req.body})
}