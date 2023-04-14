import React, { useEffect, useState } from 'react'

const Ancillary = ({passScore}) => {

    const [best, setBest] = useState(0);

    useEffect(() => {
        if(passScore > best){
           setBest(passScore);
        }
    }, [passScore])

  return (
    <>
        <div className='topLine'>
            <h1>Anime Character Memory Game</h1>
            <div className='metrics'>
                <div>Score: {passScore}</div>
                <div>Best: {best}</div>
            </div>
        </div>
    </>
  )
}

export default Ancillary