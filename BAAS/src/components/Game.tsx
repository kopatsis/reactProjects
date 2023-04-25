import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Game = () => {
  const posLog = (event: any) => {
    const [Xperc, Yperc] = [
      parseInt(event.nativeEvent.offsetX) / parseInt(event.target.width),
      parseInt(event.nativeEvent.offsetY) / parseInt(event.target.height),
    ];
    if (
      Xperc > 0.40106 &&
      Xperc < 0.54505 &&
      Yperc > 0.710564 &&
      Yperc < 0.86594
    ) {
      console.log("Reiner");
    } else if (
      Xperc > 0.06184 &&
      Xperc < 0.18905 &&
      Yperc > 0.47371 &&
      Yperc < 0.51208
    ) {
      console.log("Catbus");
    } else if (
      Xperc > 0.42756 &&
      Xperc < 0.45583 &&
      Yperc > 0.51208 &&
      Yperc < 0.53482
    ) {
      console.log("Johnny");
    } else {
      console.log("Nada");
    }
  };

  const [timeArr, setTimeArr] = useState(["00", "00", "00"]);

  const [timeOn, setTimeOn] = useState(false);

  const [charFound, setCharFound] = useState({
    Armored: false,
    Catbus: false,
    Johnny: false,
  });

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

  let inProgTime: any;

  useEffect(() => {
    inProgTime = setTimeout(timer, 999);
  }, [timeArr]);

  const resetGame = () => {
    clearTimeout(inProgTime);
    setTimeArr(["00", "00", "00"]);
    setCharFound({ Armored: false, Catbus: false, Johnny: false });
  };

  return (
    <>
      <nav>
        <Link to={"/game/exit"}>Exit to Home</Link>
        <Link to={"/game"} onClick={resetGame}>
          Restart Game
        </Link>
        <Link to={"/game/status"}>Character Statuses</Link>
        <span>
          Time: {timeArr[0]}:{timeArr[1]}:{timeArr[2]}
        </span>
      </nav>
      <img className="mainimg" src="../main.jpg" onClick={posLog} />
      <div className="creds">
        <a href="https://www.artstation.com/chekavo" target="_blank">
          Image Credits to artist Egor Klyuchnyk
        </a>
      </div>

      <Outlet />
    </>
  );
};

export default Game;
