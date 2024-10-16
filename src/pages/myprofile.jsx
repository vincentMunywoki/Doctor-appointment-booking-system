import React, { useState } from 'react'
import { assets } from '../assets/assets'

const myprofile = () => {

  const [userData,setUserData] = useState({
    name:"Vincent Munywoki",
    image:assets.profile_pic,
    email:'vincentmunywoki@gmail.com',
    phone:'+254 702 463 477',
    address: {
      line1: "PO BOX 6 60100",
      line2: "Nairobi, Kenya"
    },
    gender:"male",
    dob:'2000-05-05'
  })


  const[isEdit,setIsEdit] = useState(false)


  return (
    <div>
        <img src={userData.image} alt="" />

        {
          isEdit 
          ? <input type = "text" />
          : <p>{userData.name}</p>
        }

    </div>
  )
}

export default myprofile