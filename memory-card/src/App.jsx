import React from 'react'
import Ancillary from './components/Ancillary';
import Cardset from './components/Cardset';
import { useState } from 'react';

const App = () => {

  const [Score, setScore] = useState(0);

  const upScore = () => {
    setScore(Score+1)
  }

  const zeroScore = () => {
    setScore(0)
  }

  return (
    <div>
      <Ancillary passScore={Score}/>
      <Cardset scoreZero={zeroScore} scoreInc={upScore} score={Score}/>
    </div>
  )
}

export default App