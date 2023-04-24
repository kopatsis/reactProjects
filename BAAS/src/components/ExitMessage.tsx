import React from "react";
import { useNavigate } from "react-router-dom";

const ExitMessage = () => {
  const navigate = useNavigate();

  return (
    <div className="popup-outer">
      <div className="popup-inner">
        <button onClick={() => navigate("/game")}>X Close</button>
        <div>
          Are you sure you want to exit? The progess on your current game will
          not be saved.
        </div>
        <div>
          <button onClick={() => navigate("/home")}>Yes, Exit</button>
          <button onClick={() => navigate("/game")}>No, go back</button>
        </div>
      </div>
    </div>
  );
};

export default ExitMessage;
