import React from "react";
import { useNavigate } from "react-router-dom";

const Scoreboard = () => {
  const navigate = useNavigate();

  return (
    <div className="popup-outer">
      <div className="popup-inner">
        <button onClick={() => navigate("/home")}>X Close</button>
        <div>Scoreboard</div>
      </div>
    </div>
  );
};

export default Scoreboard;
