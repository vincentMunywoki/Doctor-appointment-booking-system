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
    gender:"Male",
    dob:'2000-05-05'
  })


  const[isEdit,setIsEdit] = useState(false)


  return (
    <div>
      <img src={userData.image} alt="" />

      {
        isEdit 
        ? <input type = "text" value={userData.name} onChange={e => setUserData(prev => ({...prev,name:e.target.value}))}/>
        : <p>{userData.name}</p>
      }

      <hr />
      <div>
        <p>CONTACT INFORMATION</p>
        <div>
          <p>Email Id:</p>
          <p>{userData.email}</p>
          <p>Phone:</p>
          {
            isEdit 
            ? <input type = "text" value={userData.phone} onChange={e => setUserData(prev => ({...prev,phone:e.target.value}))}/>
            : <p>{userData.phone}</p>
          }
          <p>Address:</p>
          {
            isEdit
            ? <p>
                 <input onChange={(e) => setUserData(prev => ({...prev, address: {...prev.address,line1: e.target.value}}))} value={userData.address.line1} type="text" /> 
                 <br />
                 <input onChange={(e) => setUserData(prev => ({...prev, address: {...prev.address,line2: e.target.value}}))} value={userData.address.line2}type="text" />      
              </p>
            : <p>
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          }
        </div>
      </div>
      <div>
        <p>BASIC INFORMATION</p>
        <div>
          <p>Gender:</p>
          {
            isEdit 
              ? <select onChange={(e) => setUserData(prev => ({...prev, gender: e.target.value}))} value={userData.gender}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              : <p>{userData.gender}</p>
          }
          <p>Birthday:</p>
          {
            isEdit 
            ? <input type="date" onChange={(e) => setUserData(prev => ({...prev, dob: e.target.value}))} value={userData.dob}/>
            : <p>{userData.dob}</p>
          }
        </div>
      </div>

      <div>
        {
          isEdit
          ? <button onClick={() => (false)} >Save Information</button>
          : <button onClick={() => (true)} >Edit</button>
        }
      </div>

    </div>
  )
}

export default myprofile