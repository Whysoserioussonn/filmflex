import axios from "axios";
import { React, useEffect, useState } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import Movie from "./Movie";

// props that are being passed to our homepage
const Row = ({ title, fetchURL, rowID }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  //console.log(movies);

  //fucntion to scroll left
  // add a row ID to each row component in homepage or only the top row will slide no matter what row you pick
  const slideLeft = () => {
    var slider = document.getElementById("slider" + rowID);  
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  //function to scroll right
  const slideRight = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <>
      <h2 className="text-white font-bold md: text-xl p-4 font-sans">
        {title}
      </h2>
      <div className="font-serif  relative flex items-center group">
        <FaChevronCircleLeft
        onClick={slideLeft}
          className="bg-red-400 rounded-full absolute hover:opacity-100  cursor-pointer z-10 hidden group-hover:block left-0"
          size={30}
        />
        <div
          id={"slider" + rowID}
          className=" pb-0 w-full h-full border-red-700  box-border border overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative "
        >
          {movies.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>
        <FaChevronCircleRight
        onClick={slideRight}
          className="bg-red-400 rounded-full absolute hover:opacity-100  cursor-pointer  z-10 hidden group-hover:block right-0"
          size={30}
        />
      </div>
    </>
  );
};

export default Row;
