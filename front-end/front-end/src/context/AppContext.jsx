import { createContext, useEffect, useState } from "react";
import axios from 'axios'
import { toast } from "react-toastify";

export const AppContext = createContext()

// context provider function
const AppContextProvider = (props) => {

    const currencySymbol = 'Ksh.'
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    
    const [doctors,setDoctors] = useState([])

     //store user authtoken so that user maynot be logged out whenever site is refreshed.
     const [token,setToken] = useState(localStorage.getItem('token')?localStorage.getItem('token'):false)

     //update profile function
     const [userData, setUserData] = useState(false)

    
    const getDoctorsData = async() => {
             
        try {

            const {data} = await axios.get(backendUrl + '/api/doctor/list')
            if (data.success) {
                setDoctors(data.doctors)
            } else {
                toast.error(data.message)
            }
            
        } catch (error) {
            console.log(error)  
            toast.error(error.message)          
        }

    }

    const loadUserProfileData = async () => {

        try {

            const {data} = await axios.get(backendUrl + 'api/user/get-profile',{headers:{token}}) // receive user profile data
            if (data.success) {
                setUserData(data.userData)
                
            } else {
                toast.error(data.message)
            }
            
        } catch (error) {
            console.log(error)  
            toast.error(error.message)
        }
    }

    //use functions in any component

    const value = {
        doctors,
        currencySymbol,
        token,setToken,
        backendUrl,
        userData,setUserData,
        loadUserProfileData
    }
    
    useEffect(()=>{
        getDoctorsData()
    },[])

    useEffect(() => {
        if (token) {
            loadUserProfileData()            
        } else {
            setUserData(false)
        }
    },[token])

    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider


export default AppContextProvider
export default AppContextProvider