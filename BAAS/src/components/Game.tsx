import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Game = () => {
  const posLog = (event: any) => {
    console.log(event.nativeEvent.offsetX, event.nativeEvent.offsetY);
  };

  const [timeArr, setTimeArr] = useState(["00", "00", "00"]);

  const [timeOn, setTimeOn] = useState(false);

  const timer = () => {
    if (timeOn) {
      let seconds = parseInt(timeArr[2]);
      let minutes = parseInt(timeArr[1]);
      let hours = parseInt(timeArr[0]);
      seconds++;
      if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
          minutes = 0;
          hours++;
        }
      }
      setTimeArr([
        hours < 10 ? `0${hours}` : `${hours}`,
        minutes < 10 ? `0${minutes}` : `${minutes}`,
        seconds < 10 ? `0${seconds}` : `${seconds}`,
      ]);
    }
  };

  useEffect(() => {
    setTimeout(timer, 999);
  }, [timeArr]);

  return (
    <>
      <nav>
        <Link to={"/game/exit"}>Exit to Home</Link>
        <Link to={"/game"}>Restart Game</Link>
        <Link to={"/game/status"}>Character Statuses</Link>
        <span>
          Time: {timeArr[0]}:{timeArr[1]}:{timeArr[2]}
        </span>
      </nav>
      <img className="mainimg" src="../main.jpg" onClick={posLog} />
      <Outlet />
    </>
  );
};

export default Game;
