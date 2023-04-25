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
      <div className="popup-inner butscores">
        <button onClick={navOut}>X Close</button>
        <div>Scoreboard</div>
        <div className="allscores">
          <div className="scored placing">
            {special !== 0 && <div className="special">You:</div>}
            <div>Place: </div>
            {sortedBoard.map((item: any, index: number) => (
              <div>{index + 1}</div>
            ))}
          </div>
          <div className="scored names">
            {special !== 0 && <div className="special">{special.name}</div>}
            <div>Name: </div>
            {sortedBoard.map((item: any, index: number) => (
              <div>{item.name}</div>
            ))}
          </div>
          <div className="scored times">
            {special !== 0 && (
              <div className="special">
                {special.time[0]}:{special.time[1]}:{special.time[2]}
              </div>
            )}
            <div>Time: </div>
            {sortedBoard.map((item: any, index: number) => (
              <div>
                {item.time[0]}:{item.time[1]}:{item.time[2]}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scoreboard;
