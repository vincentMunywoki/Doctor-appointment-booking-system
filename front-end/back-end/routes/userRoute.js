import express from 'express'
import { registerUser, loginUser, getProfile,updateProfile } from '../controllers/userController.js'
import authUser from '../middlewares/authUser.js'
import upload from '../middlewares/multer.js'

//create instance of user using express
const userRouter = express.Router()

//create API using above router
userRouter.post('/register',registerUser)
userRouter.post('/login',loginUser)

userRouter.get('/get-profile', authUser,getProfile)
userRouter.post('/update-profile',upload.single('image'),authUser,updateProfile)






export default userRouter