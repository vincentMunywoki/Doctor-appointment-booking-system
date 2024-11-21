import jwt from 'jsonwebtoken'

// user authentication midleware
const authUser = async(req,res,next) => {
    try {

        const {token} = req.headers
        if (!token) {
            return res.json({success:false,message:'Not Authorized, login Again'})
        }       
        const token_decode = jwt.verify(token,process.env.JWT_SECRET)
        req.body.userId = token_decode.id
       
        next()

    } catch(error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

export default authUser
