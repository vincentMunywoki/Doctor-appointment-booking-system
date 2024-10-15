import React, { useState } from 'react'

const login = () => {

  const [state,setState] = useState('Sign Up')

  // creatre state variables

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [name,setName] = useState('')

  // create submit function

  const onSubmitHandler = async (event) => {
    event.preventDefault()
  }

  return (
    <form className='min-h-[80vh] flex items-center'>
      <div>
       { /* Tunel operator*/} 

        <p>{state === 'Sign Up' ? "Create Account" : "Login"}</p>  
        <p>Please {state === 'Sign Up' ? "Sign Up" : "Log in"} to book appointment </p>
        <div>
          <p>Full Name</p>
          <input type="text" onChange={(e)=>setName(e.target.name)} value={name} required/>
        </div>
        <div>
          <p>Email</p>
          <input type="email" onChange={(e)=>setEmail(e.target.email)} value={email} required/>
        </div>
        <div>
          <p>Password</p>
          <input type="password" onChange={(e)=>setPassword(e.target.password)} value={password} required/>
        </div>
        <button>{state === 'Sign Up' ? "Create Account" : "Login"}</button>
      </div>
        
    </form>
  )
}

export default login