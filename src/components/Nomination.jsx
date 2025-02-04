import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const movieIds = [
  "tt3896198", "tt0816692", "tt1375666", "tt2527336", "tt0107290",
  "tt2543164", "tt0181689", "tt0088763", "tt0137523", "tt1670345",
  "tt1856101", "tt1368536", "tt1979320", "tt0482571",
];

function Nomination() {
  const [dat, setData] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const movieData = await Promise.all(
        movieIds.map(async (id) => {
          const response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=761ce591`);
          const data = await response.json();
          return data;
        })
      );
      setData(movieData);
    };
    fetchMovies();
  }, []);

  // Extract Oscar wins from Awards text
  const Oscar_winning = dat.map((el) => {
    const match = el.Awards ? el.Awards.match(/(\d+)\s+wins/) : null;
    return match ? parseInt(match[1]) : 0; 
  });

  // Extract movie release years
  const year = dat.map((ey) => ey.Year);

  const data = {
    labels: year,
    datasets: [{
      label: "Oscar Winning",
      data: Oscar_winning,
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderColor: "rgb(75, 192, 192)",
      borderWidth: 2,
    }],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Ensure responsiveness
    plugins: {
      legend: { display: false },
      title: { display: true, text: "Oscar Winning by Year" },
    },
  };

  return (
    
      <div className="w-full h-[33rem] bg-white shadow-2xl">
        <Line data={data} options={options} />
      </div>
   
  );
}

export default Nomination;
