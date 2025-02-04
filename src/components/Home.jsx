import React from "react";

import PieNomination from "./PieNomination";
import Nomination from "./Nomination";
import Leadeboard from "./Leaderboard";

function Home() {
  return (
    <div className="w-full">
      <Leadeboard />
      <div className="flex gap-[1%] flex-wrap items-center w-full">
      <PieNomination />
        <Nomination />
        
      </div>
    </div>
  );
}

export default Home;
