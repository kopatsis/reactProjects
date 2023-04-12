import React from 'react'

const Ancillary = () => {
  return (
    <>
        <div className='topLine'>
            <h1>Anime Character Memory Game</h1>
            <div className='metrics'>
                <div>Score: 0</div>
                <div>Best: 0</div>
            </div>
        </div>
        <div className='bottomLine'>
            <p>To play this game, click any character from the below options to select them. Once they are clicked, a new round will be started and new characters will be shown. 
                For each round, choose a character that you have not selected previously to increase your score. Try to get all 20 characters without choosing one that you have already clicked. 
                Good luck! 
            </p>
        </div>
    </>
  )
}

export default Ancillary