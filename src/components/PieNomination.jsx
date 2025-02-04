import React, { useEffect, useState } from "react";
import {Chart as chartJs} from "chart.js/auto"
import {Bar,Doughnut, Line} from "react-chartjs-2"



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

function PieNomination() {
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

  const Oscar_winning = dat.map((el) =>
    parseInt(el.Awards.match(/(\d+)\s+wins\s+&\s+(\d+)\s+nominations/))
  );
  const year = dat.map((ey) => ey.Title);



  
const data = {
  labels: year,
  datasets: [{
   
    data: Oscar_winning,
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 1
  }]
};


const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Oscar_winning by movie',
      },
    },
  };
  return (
 
    <div className="w-[49.5%]">
     <div className="w-full h-full bg-white shadow-2xl">
        <Doughnut data={data} options={options} className="items-center" />
      </div>
    </div>
     
  )
  

}

export default PieNomination;
