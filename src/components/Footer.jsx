import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10' >
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm' >

            {/*-----Left section-------*/}
            <div>
                <img className='mb-5 w-40 rounded-lg cursor-pointer' src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600 leading-6' > QuickDoc is a revolutionary healthcare platform designed to simplify access to quality medical care. With QuickDoc, you can easily find top-rated doctors, book appointments, and receive personalized medical advice.</p>
            </div>

            {/*-----center section-------*/}
            <div>
                <p className='text-xl font-medium mb-5' >COMPANY</p>   
                <ul className='flex flex-col gap-2 text-gray-600' >
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                </ul>             
            </div>

            {/*-----Right section-------*/}
            <div>
                <p className='text-xl font-medium mb-5' >GET IN TOUCH</p>   
                <ul className='flex flex-col gap-2 text-gray-600' >
                    <li>+254702463477</li>
                    <li>vincentmunywoki12@gmail.com</li>
                </ul>             
            </div>
        </div>

        {/*--------Copyright Text---------*/}
        <div>
            <hr />
            <p className='py-5 text-sm text-center' >Copyright @ 2024 QuickDoc - All Rights Reserved</p>
        </div>

    </div>
  )
}

export default Footer
