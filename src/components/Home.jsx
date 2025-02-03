import React from 'react'

import PieNomination from './PieNomination'
import Nomination from './Nomination'
import Leadeboard from './Leaderboard'

function Home() {
  return (
  
    <div>
       
    <div className=''>
    <Leadeboard/>
    <div className='flex flex-wrap gap-[2px] items-center mt-[5px] w-[110%] '>
        <Nomination/>
        <PieNomination/>
    </div>
    </div>
    </div>
  )
}

export default Home