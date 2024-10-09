import React from 'react'
import Logo from '../assets/logo.svg'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
        <img className='w-44 cursor-pointer' src={Logo} alt="Logo" />
        <ul className='hidden md:flex items-start gap-5 font-medium'>
            <NavLink>
                <li>HOME</li>
                <hr />
                <li>ALL DOCTORS</li>
                <hr />
                <li>ABOUT</li>
                <hr />
                <li>CONTACT</li>
                <hr />
            </NavLink>
        </ul>
        <div>
            <button>Create Account</button>
        </div>
    </div>
  )
}

export default Navbar