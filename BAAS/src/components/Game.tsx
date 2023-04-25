import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Game = () => {
  const navigate = useNavigate();

  const [currCoords, setCurrCoords] = useState([0, 0]);

  const [clickCoords, setClickCoords] = useState([0, 0]);

  const popupFindMess = (event: any) => {
    setClickCoords([event.pageX, event.pageY]);
    setCurrCoords([
      parseInt(event.nativeEvent.offsetX) / parseInt(event.target.width),
      parseInt(event.nativeEvent.offsetY) / parseInt(event.target.height),
    ]);
    navigate("/game/find");
  };

  const [timeArr, setTimeArr] = useState(["00", "00", "00"]);

  const [timeOn, setTimeOn] = useState(true);

  const [charFound, setCharFound] = useState({
    Armored: false,
    Catbus: false,
    Johnny: false,
  });

  const editCharFound = (found: any) => {
    if (found === "A") {
      charFound.Armored = true;
    } else if (found === "C") {
      charFound.Catbus = true;
    } else {
      charFound.Johnny = true;
    }
    setCharFound(charFound);
  };

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

  const timeOff = () => {
    setTimeOn(false);
    clearTimeout(inProgTime);
  };

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
      <img className="mainimg" src="../main.jpg" onClick={popupFindMess} />
      <div className="creds">
        <a href="https://www.artstation.com/chekavo" target="_blank">
          Image Credits to artist Egor Klyuchnyk
        </a>
      </div>

      <Outlet
        context={{
          charstats: charFound,
          timeTaken: timeArr,
          coords: currCoords,
          editChar: editCharFound,
          offTime: timeOff,
          clicked: clickCoords,
        }}
      />
    </>
  );
};

export default Game;
