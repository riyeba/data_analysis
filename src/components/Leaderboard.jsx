


import React, { useEffect, useState } from 'react';

function Leadeboard() {
  const [movielist, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const movieIds = [
    "tt3896198", // Guardians of the Galaxy Vol. 2
    "tt0816692", // Interstellar
    "tt1375666", // Inception
    "tt2527336", // The Revenant
    "tt0107290", // Jurassic Park
    "tt2543164", // Mad Max: Fury Road
    "tt0181689", // The Matrix
    "tt0088763", // Star Wars: Episode V - The Empire Strikes Back
    "tt0137523", // Fight Club
    "tt1670345", // The Dark Knight Rises
    "tt1856101", // The Martian
    "tt1368536", // The Wolf of Wall Street
    "tt1979320", // Dunkirk
    "tt0482571"  // Pirates of the Caribbean: The Curse of the Black Pearl
  ];

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movieData = await Promise.all(
          movieIds.map(async (id) => {
            const response = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=761ce591`);
            const data = await response.json();
            return data;
          })
        );
        setMovieList(movieData);
        setLoading(false);
      } catch (err) {
        setError('Error fetching movie data');
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

  return (
    <div className='bg-white  shadow-2xl  w-[100%] md:w-[110%] p-[3rem] mt-[1rem] ml-[-1rem] md:ml-[0.05rem]'>
      <h1 className="md:text-2xl font-bold mb-4 text-center">Top Performers</h1>
      <table className="table-auto text-[12px] w-[25rem]  md:text-2xl md:w-[70rem] items-center border-collapse border border-gray-300 ">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">Rank</th>
            <th className="border border-gray-300 p-2">Movie Title</th>
            <th className="border border-gray-300 p-2">Actors</th>
            <th className="border border-gray-300 p-2 ">IMDB Rating</th>
          </tr>
        </thead>
        <tbody>
          {movielist.map((movie, index) => (
            <tr key={index} className="text-center">
              <td className="border border-gray-300 p-2">{index + 1}</td>
              <td className="border border-gray-300 p-2">{movie.Title}</td>
              <td className="border border-gray-300 p-2">{movie.Actors}</td>
              <td className="border border-gray-300 p-2 text-yellow-400 font-bold text-[13px] md:text-[18px]">{movie.imdbRating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leadeboard;
