import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-800' id='speciality' >
        <h1 className='text-3xl font-medium' >Find my Speciality</h1>
        <p className='sm:w-1/3 text-center text-sm' >Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
        <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll' >
            {specialityData.map((item,index)=>(
                <Link key={index} to={'/doctors/${item.speciality}'} > 
                    <img src={item.image} alt=''/>   
                    <p>{item.speciality}</p>    
                </Link>
            ))}
        </div>
    </div>
  )
}

export default SpecialityMenu