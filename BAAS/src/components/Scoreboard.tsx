import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  board: any;
  special: any;
}

const Scoreboard = ({ board, special }: Props) => {
  const navigate = useNavigate();

  const [sortedBoard, setSortedBoard] = useState([]);

  useEffect(() => {
    let temp = board;
    temp.sort((a: any, b: any) => {
      return a.seconds - b.seconds;
    });
    setSortedBoard(temp);
  }, [board]);

  return (
    <div className="popup-outer">
      <div className="popup-inner">
        <button onClick={() => navigate("/home")}>X Close</button>
        <div>Scoreboard</div>
        <div className="allscores">
          {special !== 0 && (
            <div className="score-entry">
              <div>Your entry:</div>
              <div>{special.name}</div>
              <div>
                {special.time[0] / 3600}h {special.time[1] / 60}m{" "}
                {special.time[2]}s
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
                {item.time[0] / 3600}h {item.time[1] / 60}m {item.time[2]}s
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Scoreboard;
