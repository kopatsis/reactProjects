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
      <div className='bottomLine'>
            <p>To play this game, click any character from the below options to select them. Once they are clicked, a new round will be started and new characters will be shown. 
                For each round, choose a character that you have not selected previously to increase your score. Try to get all 20 characters without choosing one that you have already clicked. 
                Good luck! 
            </p>
        </div>
    </div>
  )
}

export default App