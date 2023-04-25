import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  board: any;
  special: any;
  reset: any;
}

const Scoreboard = ({ board, special, reset }: Props) => {
  const navigate = useNavigate();

  const [sortedBoard, setSortedBoard] = useState([]);

  useEffect(() => {
    let temp = board;
    temp.sort((a: any, b: any) => {
      return a.seconds - b.seconds;
    });
    setSortedBoard(temp);
  }, [board]);

  const navOut = () => {
    reset();
    navigate("/home");
  };

  return (
    <div className="popup-outer">
      <div className="popup-inner">
        <button onClick={navOut}>X Close</button>
        <div>Scoreboard</div>
        <div className="allscores">
          {special !== 0 && (
            <div className="score-entry special">
              <div>Your entry:</div>
              <div>{special.name}</div>
              <div>
                {special.time[0]}:{special.time[1]}:{special.time[2]}
              </div>
            </div>
          )}
          <div className="score-entry">
            <div>Place: </div>
            <div>Name: </div>
            <div>Time: </div>
          </div>
          {sortedBoard.map((item: any, index: number) => (
            <div className="score-entry" key={index}>
              <div>{index + 1}</div>
              <div>{item.name}</div>
              <div>
                {item.time[0]}:{item.time[1]}:{item.time[2]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Scoreboard;
