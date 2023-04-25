import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

const FindMessage = () => {
  const navigate = useNavigate();

  const context: any = useOutletContext();

  const [afterMessage, setAfterMessage] = useState("");

  const checkChar = (event: any) => {
    if (afterMessage === "") {
      const [Xperc, Yperc] = context.coords;

      if (event.currentTarget.id === "Armor") {
        if (
          Xperc > 0.40106 &&
          Xperc < 0.54505 &&
          Yperc > 0.710564 &&
          Yperc < 0.86594
        ) {
          setAfterMessage("Congrats, you found the Armored Titan");
          context.editChar("A");
        } else {
          setAfterMessage("Ooh sorry, the Armored Titan was not there");
        }
      } else if (event.currentTarget.id === "Catbus") {
        if (
          Xperc > 0.06184 &&
          Xperc < 0.18905 &&
          Yperc > 0.47371 &&
          Yperc < 0.51208
        ) {
          setAfterMessage("Congrats, you found CatBus");
          context.editChar("C");
        } else {
          setAfterMessage("Ooh sorry, CatBus was not there");
        }
      } else {
        if (
          Xperc > 0.42756 &&
          Xperc < 0.45583 &&
          Yperc > 0.51208 &&
          Yperc < 0.53482
        ) {
          setAfterMessage("Congrats, you found Johnny Bravo");
          context.editChar("B");
        } else {
          setAfterMessage("Ooh sorry, Johnny Bravo was not there");
        }
      }
    }
  };

  return (
    <div className="popup-outer">
      <div className="popup-inner">
        <button onClick={() => navigate("/game")}>X Close</button>
        <div>Which character do you see here?</div>
        <div>
          <div className="charprof select" id="Armor" onClick={checkChar}>
            <div>
              <img className="charstatimg" src="../armored.webp"></img>
            </div>
            <div>
              <div>The Armored Titan</div>
              <div>Classification: Easy</div>
            </div>
          </div>
          <div className="charprof select" id="Catbus" onClick={checkChar}>
            <div>
              <img className="charstatimg" src="../catbus.png"></img>
            </div>
            <div>
              <div>CatBus</div>
              <div>Classification: Medium</div>
            </div>
          </div>
          <div className="charprof select" id="Johnny" onClick={checkChar}>
            <div>
              <img className="charstatimg" src="../johnny.png"></img>
            </div>
            <div>
              <div>Johnny Bravo</div>
              <div>Classification: Hard</div>
            </div>
          </div>
        </div>
        {afterMessage === "" ? (
          <button onClick={() => navigate("/game")}>Nevermind</button>
        ) : (
          <div>{afterMessage}</div>
        )}
      </div>
    </div>
  );
};

export default FindMessage;
