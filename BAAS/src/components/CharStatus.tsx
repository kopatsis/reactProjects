import React from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

const CharStatus = () => {
  const navigate = useNavigate();

  const context: any = useOutletContext();

  return (
    <div className="popup-outer">
      <div className="popup-inner">
        <button onClick={() => navigate("/game")}>X Close</button>
        <div>Have you found these characters?</div>
        <div>
          <div className="charprof">
            <div>
              <img className="charstatimg" src="../armor.png"></img>
            </div>
            <div>
              <div>The Armored Titan</div>
              <div>Classification: Easy</div>
              <div>
                Staus: {context.charstats.Armored ? "Found" : "Not Found"}
              </div>
            </div>
          </div>
          <div className="charprof">
            <div>
              <img className="charstatimg" src="../catbus.png"></img>
            </div>
            <div>
              <div>CatBus</div>
              <div>Classification: Medium</div>
              <div>
                Staus: {context.charstats.Catbus ? "Found" : "Not Found"}
              </div>
            </div>
          </div>
          <div className="charprof">
            <div>
              <img className="charstatimg" src="../johnny.png"></img>
            </div>
            <div>
              <div>Johnny Bravo</div>
              <div>Classification: Hard</div>
              <div>
                Staus: {context.charstats.Johnny ? "Found" : "Not Found"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharStatus;
