import React, { useState } from 'react';
import '../../App.css';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('email is ', email);
    console.log('password is ', password);
    handleLogin(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <div className='flex h-screen w-screen items-center justify-center p-4 bg-gray-100'>
      <div className='border-4 border-black rounded-xl p-6 bg-white w-full max-w-md shadow-lg'>
        <form onSubmit={submitHandler} className='flex flex-col items-center gap-4'>
          <input 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            className='w-full rounded-full p-3 text-black outline-none border-2 border-black'  
            type='email' 
            placeholder='Enter your email' 
          />
          <input 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            className='w-full rounded-full p-3 text-black outline-none border-2 border-black' 
            type='password' 
            placeholder='Enter password' 
          />
          <button 
            className='w-full h-10 bg-red-500 text-white font-bold rounded-md border-2 border-black hover:bg-red-600 transition duration-300' 
            type='submit'>
            Login
          </button>
          <h6 className='mt-4 font-bold text-gray-700'>Don't have an account?</h6>
          <button 
            className='w-full h-10 bg-red-600 text-white font-bold rounded-lg border-2 border-black hover:bg-red-700 transition duration-300'>
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
