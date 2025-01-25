import React, { useState } from 'react'
import '../../App.css'
const Login = ({handleLogin}) => {
  const [email,setEmail]= useState("")
  const [password,setPassword]= useState("")
  const submitHandler=(e)=>
  {
    e.preventDefault()
   console.log("email is ",email) 
   console.log("password is ",password) 
   handleLogin(email,password)
   setEmail("")
   setPassword("")
  }
  return (
    <div className='first flex h-screen w-screen  items-center  '>
      <div className='border-4 h-1/2 w-1/3 border-black rounded-xl ml-[10%] second'>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }} action="" className='flex flex-col items-center justify-center gap-2 p-6 '>
            <input onChange={(e)=>setEmail(e.target.value)}required className='rounded-full p-5 text-black outline-none border-2 border-black'  type="email" placeholder='Enter your email '/>
            <input onChange={(e)=>setPassword(e.target.value)}required className='rounded-full p-5 text-black outline-none border-2 border-black' type="password" name="" id="" placeholder='Enter password'/>
            <button className='h-10 w-20 bg-red-500 mt-4 rounded-md border-2 border-black' type='submit'>Login</button>
            <h6 className='mt-10 font-bold'>Don't have an account ? </h6>
            <button className='w-30 h-10 bg-red-600 rounded-lg p-2 border-2 border-black'>Create Account</button>
        </form>
      </div>
    </div>
  )
}

export default Login
