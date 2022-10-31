import React from 'react'
import SavedMovies from '../components/SavedMovies'

const Account = () => {
  return (
    <>
      <div className='w-full text-white'>
      <img
          className="w-full h-[500px] object-cover"
          src="https://i.guim.co.uk/img/static/sys-images/Film/Pix/pictures/2012/5/22/1337709078456/The-Shining-008.jpg?width=700&quality=85&dpr=1&s=none"
          alt="/"
        />
         <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>
         <div className='absolute top-[20%] p-4 md:p-8'>
         <h1 className='text-3xl md:text-5xl font-bold'>❤️My❤️Faves❤️</h1>
         </div>
      </div>
     <SavedMovies />
    </>
  )
}

export default Account