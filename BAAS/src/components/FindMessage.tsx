import React from "react";
import { useNavigate } from "react-router-dom";

const FindMessage = () => {
  const navigate = useNavigate();

  return (
    <div className="popup-outer">
      <div className="popup-inner">
        <button onClick={() => navigate("/game")}>X Close</button>
        <div>Which character do you see here?</div>
        <div>
          <div className="charprof">
            <div>
              <img className="charstatimg" src="../armored.webp"></img>
            </div>
            <div>
              <div>The Armored Titan</div>
              <div>Classification: Easy</div>
            </div>
          </div>
          <div className="charprof">
            <div>
              <img className="charstatimg" src="../catbus.png"></img>
            </div>
            <div>
              <div>CatBus</div>
              <div>Classification: Medium</div>
            </div>
          </div>
          <div className="charprof">
            <div>
              <img className="charstatimg" src="../johnny.png"></img>
            </div>
            <div>
              <div>Johnny Bravo</div>
              <div>Classification: Hard</div>
            </div>
          </div>
        </div>
        <button onClick={() => navigate("/game")}>Nevermind</button>
      </div>
    </div>
  );
};

export default FindMessage;
