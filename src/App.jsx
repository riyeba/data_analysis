import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import MovieCard from "./components/MovieCard";
import Home from "./components/Home";
import { Route, Routes } from "react-router";
import Searchmovie from "./components/Searchmovie";

// function App() {
//   return (
//     <div>
//       <Navbar />
//     <Routes>
    
      
//         <div className="flex gap-3  w-[100%]">
//           <div className="w-[10%]">
//             <Route path="/" element={<Sidebar />} />
//           </div>
//           <div className="w-[80%]">
//             <Route path="/" element={<MovieCard />} />
//           </div>
//         </div>
//         <Route path="/moviecard" element={<Searchmovie />} />
//     </Routes>
//     </div>
//   );
// }

// export default App;



function App() {
  return (
    <div className="w-full h-full">
      <Navbar />
      <div className="flex gap-3 w-full h-full ">
        <div className="w-[10%] h-max">
          <Sidebar />
        </div>
        <div className="w-[90%]">
          <Routes>
            <Route path="/" element={<MovieCard />} />
            <Route path="/moviecard" element={<Searchmovie />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

