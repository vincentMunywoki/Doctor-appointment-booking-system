import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div>

            {/*-----Left section-------*/}
            <div>
                <img src={assets.logo} alt="" />
                <p>QuickDoc is a revolutionary healthcare platform designed to simplify access to quality medical care. With QuickDoc, you can easily find top-rated doctors, book appointments, and receive personalized medical advice.</p>
            </div>

            {/*-----center section-------*/}
            <div>
                <p>COMPANY</p>   
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                </ul>             
            </div>

            {/*-----Right section-------*/}
            <div>
                <p>GET IN TOUCH</p>   
                <ul>
                    <li>+254702463477</li>
                    <li>vincentmunywoki12@gmail.com</li>
                </ul>             
            </div>
        </div>

        {/*--------Copyright Text---------*/}
        <div>
            <hr />
            <p>Copyright 2024@ QuickDoc - All Rights Reserved</p>
        </div>

    </div>
  )
}

export default Footer