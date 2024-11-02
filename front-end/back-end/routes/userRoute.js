import express from 'express'
import { registerUser, loginUser, getProfile } from '../controllers/userController.js'
import authUser from '../middlewares/authUser.js'

//create instance of user using express
const userRouter = express.Router()

//create API using above router
userRouter.post('/register',registerUser)
userRouter.post('/login',loginUser)

userRouter.get('/get-profile', authUser,getProfile)






export default userRouter