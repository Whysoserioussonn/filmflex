import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
   // console.log(user.email) to check user email shows in console showing that we signed in
const {user, logOut} = UserAuth();
const navigate = useNavigate();
const handleLogout = async () => {
    try{
      await logOut();
      navigate('/');
    }
    catch (error){
      console.log(error)
    }

  }
  return (
    <div className="flex justify-between p-4 z-[100] w-full absolute">
      <Link to="/">
        <h1 className="text-red-600 text-4xl cursor-pointer">FILMFLIX</h1>
      </Link>      
      
      
      {user?.email ? (
       <div>
        <Link to='/account'>
        <button className="text-white pr-4"> Account </button>
        </Link>        
        <button
         onClick={handleLogout}
         className="bg-red-500 px-6 py-2 rounded">
          Log Out
          </button>        
      </div>
       ) : ( 
      <div>
        <Link to='/login'>
        <button className="text-white pr-4">Log In</button>
        </Link>
        <Link to='/signup'>
        <button className="bg-red-500 px-6 py-2 rounded">
          Sign Up
          </button>
        </Link>
      </div>
      )}       
    </div>
  );
};

export default Navbar;
