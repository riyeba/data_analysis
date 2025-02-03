import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

import Home from "./Home";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";


const movieIds = [
  "tt3896198",
  "tt0816692",
  "tt1375666",
  "tt2527336",
  "tt0107290",
  "tt2543164",
  "tt0181689",
  "tt0088763",
  "tt0137523",
  "tt1670345",
  "tt1856101",
  "tt1368536",
  "tt1979320",
  "tt0482571",
];

function Searchmovie() {
  const location = useLocation();
  const search = location?.state?.search;
  

  
  const [dat, SetData] = useState([]);
  console.log(dat);

  useEffect(() => {
    const fetchMovies = async () => {
      const movieData = await Promise.all(
        movieIds.map(async (id) => {
          const response = await fetch(
            `https://www.omdbapi.com/?i=${id}&apikey=761ce591`
          );
          const data = await response.json();
          return data;
        })
      );
      SetData(movieData);
    };

    fetchMovies();
  }, []);

  return (
    <div className="w-full">
   <div className="flex flex-wrap gap-[0.2rem]  w-[35rem] md:w-full  mt-[2rem]  bg-white shadow-2xl p-[2rem] overflow-auto">
          {dat.filter((el)=>el.Title.toLowerCase().includes(search.toLowerCase())).map((el) => (
            <div key={el.Title} className=" border border-stone-200 w-[7rem] bg-stone-100   hover:bg-stone-100  md:w-[10rem]">
              <div className="border-b-4 border-stone-50">
                <img src={el.Poster} alt={el.imdbID} className="h-[7rem] w-[7rem] md:w-[100%] md:h-[100%]" />
              </div>
    
              <div className="pl-1 ">
                <p>({(el.Year)})</p>
                <div className="inline-flex gap-2 items-center text-base">
                  <FaStar className="text-yellow-400 font-bold"/>
                  <p>{el.imdbRating}</p>
                </div>
              </div>
            </div>
          ))}
    
        </div>
        
   
    
    </div>

    
  );
}

export default Searchmovie;
