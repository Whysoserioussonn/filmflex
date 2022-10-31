import { doc, onSnapshot, updateDoc } from 'firebase/firestore';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa'
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { AiOutlineClose } from 'react-icons/ai';


const SavedMovies = () => {
  const [movies, setMovies] = useState([])
  const{user} = UserAuth();
  
 
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  useEffect(() => {
    onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedShows);
    });
  }, [user?.email]);

  // delete fave movie function , remove it from state on the client side and push it back to firebase
  // we are taking the passed id , and the const result is the result from that clicked event
  // filter method takes the array and creates a new one and filters out the item with the passed id
  // updateDoc pushes back the result back to firebase
  const movieRef = doc(db, 'users', `${user?.email}`)
    const deleteShow = async (passedID) => {
    try {
      const result = movies.filter((item) => item.id !== passedID)
      await updateDoc(movieRef, {
          savedShows: result,
      })
    } catch (error) {
        console.log(error)
    }
}


  return (
    <>
    <h2 className="text-white font-bold md: text-xl p-4 font-sans">    My Movies   </h2>
      <div className="font-serif  relative flex items-center group">
        < FaChevronCircleLeft
        onClick={slideLeft}
          className="bg-red-400 rounded-full absolute hover:opacity-100  cursor-pointer z-10 hidden group-hover:block left-0"
          size={30}
        />
        <div
          id={"slider"}
          className=" pb-0 w-full h-full border-red-700  box-border border overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative "
        >
          {movies.map((item, id) => (
            <div key={id} className=" w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
            <img
                className='w-full h-auto block'
                src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
                alt={item?.title}
              />
            <div className="absolute top-0 left-0 w-full h-full  hover: bg-black/80 opacity-0 hover:opacity-100 text-white">
              <p className="white-space-normal text-md:text-sm font-bold flex justify-center items-center h-full text-center ">
                {item?.title}
              </p>    
              
              <p
              onClick={()=> deleteShow(item.id)} //pass in an id to function on click event
              className='absolute text-yellow-200 top-4 right-4'>
                <AiOutlineClose />
                </p>          
            </div>
          </div>
          ))}
        </div>
        <FaChevronCircleRight
        onClick={slideRight}
          className="bg-red-400 rounded-full absolute hover:opacity-100  cursor-pointer  z-10 hidden group-hover:block right-0"
          size={30}
        />
      </div>
    </>
  )
}

export default SavedMovies