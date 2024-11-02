//I have created API logic for the users like; Login,Register,update profile, book, cancel and display Appointment, make payment gateway,
import validator from 'validator'
import bcrypt from 'bcrypt'
import userModel from '../models/userModel.js'
import jwt from 'jsonwebtoken' // for user to login


//API to register New user
const registerUser = async (req,res) => {

    try {

        const{ name, email, password } = req.body

        if(!name || !password || !email ) {
            return res.json({success:false,measage:"Missing Details"})
        }

        //validating a valid email format

        if(!validator.isEmail(email)){
            return res.json({success:false,measage:"Enter a Valid Email"})
        }

        //Validating strong password

        if(password.length < 8) {
            return res.json({success:false,measage:"Enter a strong password"})
        }

        //Hashing user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        const userData = {
            name,
            email,
            password : hashedPassword
        }

        //sending user data into database
        const newUser = new userModel(userData)

        //save new user in DB
        const user = await newUser.save()

        const token =jwt.sign({id:user_id}, process.env.JWT_SECRET )

        // Genarate response so that we can send toen to the user
        res.json({success:true,token})

       
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

//api for user login

const loginUser = async (req,res) => {

    try {

        const {email, password} = req.body
        const user = await userModel.findOne({email})

        //get user data with above variable.
        if(!user) {
            return res.json({success:false,message:'User does Not exist'})
        }

        //Match password with the password in the DB
        const isMatch = await bcrypt.compare(password,user.password)

        //check if isMatch is true
        if (isMatch) {
            const token = jwt.sign({id:user._id}, process.env.JWT_SECRET)
            res.json({success:true,token})

            //if password is incorrect then else statement will be executed
        } else {
            res.json({success:false,message:"Invalid credentials"})
        }            
        
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

//API to get user profile data
const getProfile = async (req,res) => {
    try {

        const { userId } = req.body
        const userData = await userModel.findById(userId).select('-password')

        res.json({success:true,userData})
        
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})        
    }
}

export{registerUser,loginUser}