import React, { useEffect, useState } from 'react'

import { Link, useNavigate } from 'react-router';



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

function Navbar() {
  const[search,setSearch]=useState("")
  const [dat, SetData] = useState([]);

  
 

    useEffect(() => {
      const fetchMovies = async () => {
        const movieData = await Promise.all(
          movieIds.map(async (id) => {
            const response = await fetch(
              `http://www.omdbapi.com/?i=${id}&apikey=761ce591`
            );
            const data = await response.json();
            return data;
          })
        );
        SetData(movieData);
      };
  
      fetchMovies();
    }, []);

  
const navigate =useNavigate()

const handleSubmit=(e)=>{
  e.preventDefault()
  
  navigate("/moviecard", { state: {search } });
  
  }


 
  
  return (
    <div>
    <div className='flex items-center w-[87%] md:w-[100%] h-[3rem] md:h-[4.3rem] overflow-auto justify-between md:justify-between p-3 md:p-2  bg-white shadow-2xl'>
     <Link to="/"><h1 className='text-2xl font-bold tracking-widest cursor-pointer'>Riyeba</h1></Link> 
        <div  >
          <form onSubmit={handleSubmit}>
            <input placeholder='search' className='w-32 p-2 border' value={search} onChange={(e)=>setSearch(e.target.value)}/>
            {/* <button className='bg-yellow-200 p-2 h-[2.6rem]  hover:bg-yellow-400  py-2 px-4 rounded-full' >Submit</button> */}
          </form>
        </div>
        <div className=' inline-flex items-center gap-1'>
          <img src='image\Photo.jpg' alt='Taiwo' className='w-12 h-12 md:w-14 md:h-14 rounded-full object-contain'/>
          <p className='text-1xl'>Taiwo</p>
        </div>
       
    </div>
   
        {/* <Searchmovie search={search}/> */}
       
        
       
        </div>
    
  )
}

export default Navbar


