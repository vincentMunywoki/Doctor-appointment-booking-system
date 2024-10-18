import validator from "validator"
import bcrypt from 'bcrypt'
import { v2 as cloudinary } from "cloudinary"
import doctorModel from "../models/doctorModel.js"


// API for ading doctor
const addDoctor = async (req,res) => {

    try {

        const{ name, email, password, speciality, degree, experience, about, fees, address} = req.body
        const imageFile = req.imageFile

        //checking for all data to add doctor
        if (!name || !email || !password || !speciality || !degree || !experience || !about ||fees || !address) {
            return resjon({success:false,message:"Missing details"})
        }
        
        // validating email format
        if (!validator.isEmail(email)) {
            return resjon({success:false,message:"Please enter a valid email"})
        }

        // validating strong password
        if(password.length < 8){
            return resjon({success:false,message:"please enter a strong pasword"})
        }

        // password Encription Hashing doc password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)


        // upload image to cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type:"image"})
        const imageUrl = imageUpload.secure_url

        const doctorData = {
            name,
            email,
            image:imageUrl,
            password:hashedPassword,
            speciality,
            degree,
            experience,
            about,
            fees,
            address:JSON.parse(address),
            date:Date.now()
        }

        const newDoctor = new doctorModel(doctorData)
        await newDoctor.save()


        res.json({success:true,message:"Doctor Added"})

        
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }

}

export {addDoctor}