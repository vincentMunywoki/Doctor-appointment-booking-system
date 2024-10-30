import express from 'express'
import { registerUser, loginUser } from '../controllers/userController.js'

//create instance of user using express
const userRouter = express.Router()

//create API using above router
userRouter.post('/register',registerUser)
userRouter.post('/login',loginUser)






export default userRouter