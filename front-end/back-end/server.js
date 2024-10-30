import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import adminRouter from './routes/adminRoute.js'
import doctorRouter from './routes/doctorRoute.js'
import userRouter from './routes/userRoute.js'

// App config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

//middlewares
app.use(express.json())
app.use(cors())

// api endpoints
app.use('/api/admin',adminRouter)
app.use('/api/doctor',doctorRouter)
app.use('/api/user',userRouter)

// localhost:4000/api/admin/add-doctor

app.get('/',(req,res)=>{
    res.send('API WORKING')
})

app.listen(port,()=> console.log("server started",port))






import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Doctors from './pages/doctors'
import Login from './pages/login'
import About from './pages/about'
import Contact from './pages/contact'
import Myappointment from './pages/myappointment'
import Myprofile from './pages/myprofile'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/myappointment' element={<Myappointment />} />
        <Route path='/myprofile' element={<Myprofile />} />
        <Route path='/Appointment/:docId' element={<Appointment />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Doctors from './pages/doctors'
import Login from './pages/login'
import About from './pages/about'
import Contact from './pages/contact'
import Myappointment from './pages/myappointment'
import Myprofile from './pages/myprofile'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/myappointment' element={<Myappointment />} />
        <Route path='/myprofile' element={<Myprofile />} />
        <Route path='/Appointment/:docId' element={<Appointment />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Doctors from './pages/doctors'
import Login from './pages/login'
import About from './pages/about'
import Contact from './pages/contact'
import Myappointment from './pages/myappointment'
import Myprofile from './pages/myprofile'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/myappointment' element={<Myappointment />} />
        <Route path='/myprofile' element={<Myprofile />} />
        <Route path='/Appointment/:docId' element={<Appointment />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Doctors from './pages/doctors'
import Login from './pages/login'
import About from './pages/about'
import Contact from './pages/contact'
import Myappointment from './pages/myappointment'
import Myprofile from './pages/myprofile'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/myappointment' element={<Myappointment />} />
        <Route path='/myprofile' element={<Myprofile />} />
        <Route path='/Appointment/:docId' element={<Appointment />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Doctors from './pages/doctors'
import Login from './pages/login'
import About from './pages/about'
import Contact from './pages/contact'
import Myappointment from './pages/myappointment'
import Myprofile from './pages/myprofile'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/myappointment' element={<Myappointment />} />
        <Route path='/myprofile' element={<Myprofile />} />
        <Route path='/Appointment/:docId' element={<Appointment />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Doctors from './pages/doctors'
import Login from './pages/login'
import About from './pages/about'
import Contact from './pages/contact'
import Myappointment from './pages/myappointment'
import Myprofile from './pages/myprofile'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/myappointment' element={<Myappointment />} />
        <Route path='/myprofile' element={<Myprofile />} />
        <Route path='/Appointment/:docId' element={<Appointment />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Doctors from './pages/doctors'
import Login from './pages/login'
import About from './pages/about'
import Contact from './pages/contact'
import Myappointment from './pages/myappointment'
import Myprofile from './pages/myprofile'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/myappointment' element={<Myappointment />} />
        <Route path='/myprofile' element={<Myprofile />} />
        <Route path='/Appointment/:docId' element={<Appointment />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Doctors from './pages/doctors'
import Login from './pages/login'
import About from './pages/about'
import Contact from './pages/contact'
import Myappointment from './pages/myappointment'
import Myprofile from './pages/myprofile'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/myappointment' element={<Myappointment />} />
        <Route path='/myprofile' element={<Myprofile />} />
        <Route path='/Appointment/:docId' element={<Appointment />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Doctors from './pages/doctors'
import Login from './pages/login'
import About from './pages/about'
import Contact from './pages/contact'
import Myappointment from './pages/myappointment'
import Myprofile from './pages/myprofile'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/myappointment' element={<Myappointment />} />
        <Route path='/myprofile' element={<Myprofile />} />
        <Route path='/Appointment/:docId' element={<Appointment />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Doctors from './pages/doctors'
import Login from './pages/login'
import About from './pages/about'
import Contact from './pages/contact'
import Myappointment from './pages/myappointment'
import Myprofile from './pages/myprofile'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/myappointment' element={<Myappointment />} />
        <Route path='/myprofile' element={<Myprofile />} />
        <Route path='/Appointment/:docId' element={<Appointment />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Doctors from './pages/doctors'
import Login from './pages/login'
import About from './pages/about'
import Contact from './pages/contact'
import Myappointment from './pages/myappointment'
import Myprofile from './pages/myprofile'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/myappointment' element={<Myappointment />} />
        <Route path='/myprofile' element={<Myprofile />} />
        <Route path='/Appointment/:docId' element={<Appointment />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Doctors from './pages/doctors'
import Login from './pages/login'
import About from './pages/about'
import Contact from './pages/contact'
import Myappointment from './pages/myappointment'
import Myprofile from './pages/myprofile'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/myappointment' element={<Myappointment />} />
        <Route path='/myprofile' element={<Myprofile />} />
        <Route path='/Appointment/:docId' element={<Appointment />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Doctors from './pages/doctors'
import Login from './pages/login'
import About from './pages/about'
import Contact from './pages/contact'
import Myappointment from './pages/myappointment'
import Myprofile from './pages/myprofile'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/myappointment' element={<Myappointment />} />
        <Route path='/myprofile' element={<Myprofile />} />
        <Route path='/Appointment/:docId' element={<Appointment />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Doctors from './pages/doctors'
import Login from './pages/login'
import About from './pages/about'
import Contact from './pages/contact'
import Myappointment from './pages/myappointment'
import Myprofile from './pages/myprofile'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/myappointment' element={<Myappointment />} />
        <Route path='/myprofile' element={<Myprofile />} />
        <Route path='/Appointment/:docId' element={<Appointment />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Doctors from './pages/doctors'
import Login from './pages/login'
import About from './pages/about'
import Contact from './pages/contact'
import Myappointment from './pages/myappointment'
import Myprofile from './pages/myprofile'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/myappointment' element={<Myappointment />} />
        <Route path='/myprofile' element={<Myprofile />} />
        <Route path='/Appointment/:docId' element={<Appointment />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Doctors from './pages/doctors'
import Login from './pages/login'
import About from './pages/about'
import Contact from './pages/contact'
import Myappointment from './pages/myappointment'
import Myprofile from './pages/myprofile'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/myappointment' element={<Myappointment />} />
        <Route path='/myprofile' element={<Myprofile />} />
        <Route path='/Appointment/:docId' element={<Appointment />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Doctors from './pages/doctors'
import Login from './pages/login'
import About from './pages/about'
import Contact from './pages/contact'
import Myappointment from './pages/myappointment'
import Myprofile from './pages/myprofile'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/myappointment' element={<Myappointment />} />
        <Route path='/myprofile' element={<Myprofile />} />
        <Route path='/Appointment/:docId' element={<Appointment />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Doctors from './pages/doctors'
import Login from './pages/login'
import About from './pages/about'
import Contact from './pages/contact'
import Myappointment from './pages/myappointment'
import Myprofile from './pages/myprofile'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/myappointment' element={<Myappointment />} />
        <Route path='/myprofile' element={<Myprofile />} />
        <Route path='/Appointment/:docId' element={<Appointment />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Doctors from './pages/doctors'
import Login from './pages/login'
import About from './pages/about'
import Contact from './pages/contact'
import Myappointment from './pages/myappointment'
import Myprofile from './pages/myprofile'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/myappointment' element={<Myappointment />} />
        <Route path='/myprofile' element={<Myprofile />} />
        <Route path='/Appointment/:docId' element={<Appointment />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Doctors from './pages/doctors'
import Login from './pages/login'
import About from './pages/about'
import Contact from './pages/contact'
import Myappointment from './pages/myappointment'
import Myprofile from './pages/myprofile'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/myappointment' element={<Myappointment />} />
        <Route path='/myprofile' element={<Myprofile />} />
        <Route path='/Appointment/:docId' element={<Appointment />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Doctors from './pages/doctors'
import Login from './pages/login'
import About from './pages/about'
import Contact from './pages/contact'
import Myappointment from './pages/myappointment'
import Myprofile from './pages/myprofile'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/myappointment' element={<Myappointment />} />
        <Route path='/myprofile' element={<Myprofile />} />
        <Route path='/Appointment/:docId' element={<Appointment />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Doctors from './pages/doctors'
import Login from './pages/login'
import About from './pages/about'
import Contact from './pages/contact'
import Myappointment from './pages/myappointment'
import Myprofile from './pages/myprofile'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/myappointment' element={<Myappointment />} />
        <Route path='/myprofile' element={<Myprofile />} />
        <Route path='/Appointment/:docId' element={<Appointment />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Doctors from './pages/doctors'
import Login from './pages/login'
import About from './pages/about'
import Contact from './pages/contact'
import Myappointment from './pages/myappointment'
import Myprofile from './pages/myprofile'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/myappointment' element={<Myappointment />} />
        <Route path='/myprofile' element={<Myprofile />} />
        <Route path='/Appointment/:docId' element={<Appointment />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Doctors from './pages/doctors'
import Login from './pages/login'
import About from './pages/about'
import Contact from './pages/contact'
import Myappointment from './pages/myappointment'
import Myprofile from './pages/myprofile'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/myappointment' element={<Myappointment />} />
        <Route path='/myprofile' element={<Myprofile />} />
        <Route path='/Appointment/:docId' element={<Appointment />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Doctors from './pages/doctors'
import Login from './pages/login'
import About from './pages/about'
import Contact from './pages/contact'
import Myappointment from './pages/myappointment'
import Myprofile from './pages/myprofile'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/myappointment' element={<Myappointment />} />
        <Route path='/myprofile' element={<Myprofile />} />
        <Route path='/Appointment/:docId' element={<Appointment />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Doctors from './pages/doctors'
import Login from './pages/login'
import About from './pages/about'
import Contact from './pages/contact'
import Myappointment from './pages/myappointment'
import Myprofile from './pages/myprofile'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/myappointment' element={<Myappointment />} />
        <Route path='/myprofile' element={<Myprofile />} />
        <Route path='/Appointment/:docId' element={<Appointment />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Doctors from './pages/doctors'
import Login from './pages/login'
import About from './pages/about'
import Contact from './pages/contact'
import Myappointment from './pages/myappointment'
import Myprofile from './pages/myprofile'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/myappointment' element={<Myappointment />} />
        <Route path='/myprofile' element={<Myprofile />} />
        <Route path='/Appointment/:docId' element={<Appointment />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Doctors from './pages/doctors'
import Login from './pages/login'
import About from './pages/about'
import Contact from './pages/contact'
import Myappointment from './pages/myappointment'
import Myprofile from './pages/myprofile'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/myappointment' element={<Myappointment />} />
        <Route path='/myprofile' element={<Myprofile />} />
        <Route path='/Appointment/:docId' element={<Appointment />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Doctors from './pages/doctors'
import Login from './pages/login'
import About from './pages/about'
import Contact from './pages/contact'
import Myappointment from './pages/myappointment'
import Myprofile from './pages/myprofile'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/myappointment' element={<Myappointment />} />
        <Route path='/myprofile' element={<Myprofile />} />
        <Route path='/Appointment/:docId' element={<Appointment />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Doctors from './pages/doctors'
import Login from './pages/login'
import About from './pages/about'
import Contact from './pages/contact'
import Myappointment from './pages/myappointment'
import Myprofile from './pages/myprofile'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/myappointment' element={<Myappointment />} />
        <Route path='/myprofile' element={<Myprofile />} />
        <Route path='/Appointment/:docId' element={<Appointment />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Doctors from './pages/doctors'
import Login from './pages/login'
import About from './pages/about'
import Contact from './pages/contact'
import Myappointment from './pages/myappointment'
import Myprofile from './pages/myprofile'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/myappointment' element={<Myappointment />} />
        <Route path='/myprofile' element={<Myprofile />} />
        <Route path='/Appointment/:docId' element={<Appointment />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Doctors from './pages/doctors'
import Login from './pages/login'
import About from './pages/about'
import Contact from './pages/contact'
import Myappointment from './pages/myappointment'
import Myprofile from './pages/myprofile'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/myappointment' element={<Myappointment />} />
        <Route path='/myprofile' element={<Myprofile />} />
        <Route path='/Appointment/:docId' element={<Appointment />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Doctors from './pages/doctors'
import Login from './pages/login'
import About from './pages/about'
import Contact from './pages/contact'
import Myappointment from './pages/myappointment'
import Myprofile from './pages/myprofile'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/myappointment' element={<Myappointment />} />
        <Route path='/myprofile' element={<Myprofile />} />
        <Route path='/Appointment/:docId' element={<Appointment />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App