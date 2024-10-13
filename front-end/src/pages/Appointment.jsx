import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Appointment = () => {

  // get doctors by docid
  const {docId} = useParams()
  const {doctors} = useContext(AppContext)

  const [docInfo,setDocInfo] = useState(null)

  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc => doc._id === docId) //create variable called docInfo to store doctors information
    setDocInfo(docInfo)
    console.log(docInfo)
  }

  useEffect(()=> {
      fetchDocInfo() // call the function doc info
  },[doctors,docId])

  
  return docInfo && (  // check if doct infor has a label using && operator
    <div>
      {/*----------Doctor details------------*/}
      <div>
        <div>
          <img src={docInfo.image} alt="" />
        </div>
      </div>
        
    </div>
  )
}

export default Appointment