import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import RelatedDoctors from '../components/RelatedDoctors'

const Appointment = () => {

  // get doctors by docid
  const {docId} = useParams()
  const {doctors, currencySymbol} = useContext(AppContext)
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

  const [docInfo,setDocInfo] = useState(null)
  //create states for Doc infromaion
  const [docSlots,setDocSlots] = useState([]) 
  const [slotIndex,setSlotIndex] = useState(0)
  const [slotTime,setSlotTime] = useState('')

  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc => doc._id === docId) //create variable called docInfo to store doctors information
    setDocInfo(docInfo) // when doc infor changes then the async function will be executed
  }

  // calculate available slots of a doctor using async functiom
  const getAvailableSlots = async() => {
    setDocSlots([])
    
    // getting current date
    let today = new Date()
    
    for (let i = 0; i < 7; i++){

      //getting date with index
      let currentDate = new Date(today)
      currentDate.setDate(today.getDate() + i) // get future 7 days from now.

      //setting end time of the date with index
      let endTime = new Date()
      endTime.setDate(today.getDate() + i)
      endTime.setHours(21,0,0,0) //define endTime.setHours with 3 0s for minutes and seconds

      // setting Hours
      if (today.getDate() === currentDate.getDate()) { // check if today is equal to current date
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
      } else {        
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      } 

      let timeSlots = []

      while (currentDate < endTime) {
      let formattedTime = currentDate.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})

      // add slot to array
      timeSlots.push({
        datetime:new Date(currentDate),
        time: formattedTime
      })
      
      // increment time by 30 minutes
      currentDate.setMinutes(currentDate.getMinutes() + 30)

      }
    
      setDocSlots(prev => ([...prev, timeSlots]))

    }

  }

  
  useEffect(()=> {
      fetchDocInfo() // call the function doc info
  },[doctors,docId])

  // whenever docinfor changes this function is executed
  useEffect(()=>{
    getAvailableSlots()
  },[docInfo])

  useEffect(()=>{
    console.log(docSlots)
  },[docSlots])


  return docInfo && (  // check if doct infor has a label using && operator
    <div>
      {/*----------Doctor details------------*/}
      <div className='flex flex-col sm:flex-row gap-4'>
        <div>
          <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={docInfo.image} alt="" />
        </div>

        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px]sm:mt-0' >
          {/*-------Doc info : Name, degree ,experience------- */}
          <p className=' flex items-center gap-2 text-2xl font-medium text-gray-900' >
            {docInfo.name} 
            <img className='w-5' src={assets.verified_icon} alt="" />
          </p>
          <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
            <p>{docInfo.degree} - {docInfo.speciality}</p>
            <button className='py-0.5 px-2 border text-xs rounded-full' >{docInfo.experience}</button>
          </div>

          {/* -----Doctor About --------*/}
          <div>
            <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3' >
              About <img src={assets.info_icon} alt="" />
            </p>
            <p className='text-sm text-gray-500 max-w-[700px] mt-1' >{docInfo.about}</p>
          </div>
          <p className='text-gray-500 font-medium mt-4' >
            Appointment fee: <span className='text-gray-700' >{currencySymbol}{docInfo.fees}</span>
          </p>
        </div>
      </div>

      {/*-------Booking slots-------*/}
      <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700' >
        <p>Booking slots</p>
        <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4' >
          {
            docSlots.length && docSlots.map((item,index)=>(
              <div onClick={()=> setSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-primary text-white' : 'border border-gray-200'}`} key={index} >
                <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                <p>{item[0] && item[0].datetime.getDate()}</p>
              </div>
            ))
          }
        </div>

        <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4' >
          {docSlots.length && docSlots[slotIndex].map((item,index)=>(
            <p onClick={()=>setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-primary text-white' : 'text-gray-400 border border-gray-300'}`} key={index}>
              {item.time.toLowerCase()}
            </p>
          ))}

        </div>
        <button className='bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6'>Book an Appointment</button>
      </div>  
      
      {/* Listing related doctors*/}   
      <RelatedDoctors docId={docId} speciality={docInfo.speciality} />  
      
    </div>
  )
}

export default Appointment