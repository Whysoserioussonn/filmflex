import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext';

const Login = () => {
  const {user, logIn} = UserAuth();
  const [email, setEmail]= useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 
  const [error, setError] = useState(''); // set in an error state to let user know when they submit the wrong password

  const handleSubmit = async (e) => {
    e.preventDefault();   // dont want the page to be submitted everytime we submit our form
    setError('')
    try { 
      await logIn(email, password);
      navigate('/')  //after we sign in , want to to navigate to homepage
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  }
  
  return (
    <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://www.cornettfiction.com/wp-content/uploads/2020/06/pennywise-sewer-1024x576.jpg"
          alt="/"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen opacity-0 "></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl text-red-700  opacity-50">Log in </h1>
              {error ? <p className=' p-2 bg-red-500 my-2 font-mono font-bold text-sm ' >Oopsy! You Did a Poopsy! Wrong UserName/Password. Try Again.</p> : null}

              <form onSubmit={handleSubmit} className="w-full flex flex-col py-1">
              <input  
                  onChange={(e) => setEmail(e.target.value)}               
                  className='p-3 my-2 bg-gray-700 rouded'
                  type='email'
                  placeholder='Email'
                  autoComplete='email'
                />
                <input                  
                  onChange={(e) => setPassword(e.target.value)}
                  className='p-3 my-2 bg-gray-700 rouded'
                  type='password'
                  placeholder='Password'
                  autoComplete='current-password'
                />
                  
                <button className="bg-red-600 py-1 my-3 rounded-full "> 😱 log in 😱 </button>
                <div className="flex justify-between items-center text-sm">
                  <p className="font-sans ">
                    <input
                    className="mr-2" 
                    type="checkbox" />
                    Remember Me
                  </p>
                  <p className="font-sans py-1">
                    
                    Need Help? 
                    
                    <span>(CLICK HERE)</span>
                   
                  </p>
                </div>
                <p className="font-sans mt-3  text-sm "><span>New to FILMFLIX?</span>{''}
                </p>
                <p className="text-red-500 text-sm ">
                  <Link to='/signup'>
                Sign Up Here 💣
                </Link></p>
              </form>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Login