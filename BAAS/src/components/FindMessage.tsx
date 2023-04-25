import React, { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

const FindMessage = () => {
  const navigate = useNavigate();

  const context: any = useOutletContext();

  const [afterMessage, setAfterMessage] = useState("-");

  const [dispAfter, setDispAfter] = useState("-");

  const [innerStyle, setInnerStyle] = useState({});

  const [circStyle, setCircStyle] = useState({});

  const disableScroll = () => {
    let scrollTop = window.pageYOffset;

    window.onscroll = function () {
      window.scrollTo(0, scrollTop);
    };
  };

  function enableScroll() {
    window.onscroll = function () {};
  }

  useEffect(() => {
    disableScroll();

    return () => {
      enableScroll();
    };
  }, []);

  useEffect(() => {
    if (context.clicked[0] / window.innerWidth < 0.5) {
      if (
        window.innerHeight - context.clicked[1] >=
        document.querySelector(".popup-inner").clientHeight
      ) {
        setInnerStyle({
          position: "absolute",
          top: `${context.clicked[1]}px`,
          left: `${context.clicked[0]}px`,
        });
      } else if (
        context.clicked[1] >=
        document.querySelector(".popup-inner").clientHeight
      ) {
        setInnerStyle({
          position: "absolute",
          bottom: `${window.innerHeight - context.clicked[1]}px`,
          left: `${context.clicked[0]}px`,
        });
      } else {
        setInnerStyle({
          position: "absolute",
          bottom: `0px`,
          left: `${context.clicked[0]}px`,
        });
      }
    } else {
      if (
        window.innerHeight - context.clicked[1] >=
        document.querySelector(".popup-inner").clientHeight
      ) {
        setInnerStyle({
          position: "absolute",
          top: `${context.clicked[1]}px`,
          right: `${window.innerWidth - context.clicked[0]}px`,
        });
      } else if (
        context.clicked[1] >=
        document.querySelector(".popup-inner").clientHeight
      ) {
        setInnerStyle({
          position: "absolute",
          bottom: `${window.innerHeight - context.clicked[1]}px`,
          right: `${window.innerWidth - context.clicked[0]}px`,
        });
      } else {
        setInnerStyle({
          position: "absolute",
          bottom: `0px`,
          right: `${window.innerWidth - context.clicked[0]}px`,
        });
      }
    }
  }, []);

  useEffect(() => {
    if (innerStyle.position !== undefined) {
      if (innerStyle.top === undefined && innerStyle.right === undefined) {
        setCircStyle({
          position: "absolute",
          left: `${context.clicked[0] - 25}px`,
          bottom: `${window.innerHeight - context.clicked[1] - 25}px`,
        });
      } else if (
        innerStyle.top === undefined &&
        innerStyle.left === undefined
      ) {
        setCircStyle({
          position: "absolute",
          right: `${window.innerWidth - context.clicked[0] - 25}px`,
          bottom: `${window.innerHeight - context.clicked[1] - 25}px`,
        });
      } else if (
        innerStyle.bottom === undefined &&
        innerStyle.right === undefined
      ) {
        setCircStyle({
          position: "absolute",
          left: `${context.clicked[0] - 25}px`,
          top: `${context.clicked[1] - 25}px`,
        });
      } else {
        setCircStyle({
          position: "absolute",
          right: `${window.innerWidth - context.clicked[0] - 25}px`,
          top: `${context.clicked[1] - 25}px`,
        });
      }
    }
  }, [innerStyle]);

  const checkChar = (event: any) => {
    if (afterMessage === "-") {
      const [Xperc, Yperc] = context.coords;

      if (event.currentTarget.id === "Armor") {
        if (
          Xperc > 0.40106 &&
          Xperc < 0.54505 &&
          Yperc > 0.710564 &&
          Yperc < 0.86594
        ) {
          setAfterMessage("Congrats, you found the Armored Titan");
          setDispAfter("A");
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
          setDispAfter("C");
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
          setDispAfter("B");
          context.editChar("B");
        } else {
          setAfterMessage("Ooh sorry, Johnny Bravo was not there");
        }
      }

      if (
        context.charstats.Armored &&
        context.charstats.Catbus &&
        context.charstats.Johnny
      ) {
        navigate("/game/winner");
      }
    }
  };

  return (
    <div className="popup-outer">
      <div className="popup-inner" style={innerStyle}>
        <button onClick={() => navigate("/game")}>X Close</button>
        <div>Which character do you see here?</div>
        <div>
          {(!context.charstats.Armored || dispAfter === "A") && (
            <div className="charprof select" id="Armor" onClick={checkChar}>
              <div>
                <img className="charstatimg" src="../armored.webp"></img>
              </div>
              <div>
                <div>The Armored Titan</div>
                <div>Classification: Easy</div>
              </div>
            </div>
          )}
          {(!context.charstats.Catbus || dispAfter === "C") && (
            <div className="charprof select" id="Catbus" onClick={checkChar}>
              <div>
                <img className="charstatimg" src="../catbus.png"></img>
              </div>
              <div>
                <div>CatBus</div>
                <div>Classification: Medium</div>
              </div>
            </div>
          )}
          {(!context.charstats.Johnny || dispAfter === "B") && (
            <div className="charprof select" id="Johnny" onClick={checkChar}>
              <div>
                <img className="charstatimg" src="../johnny.png"></img>
              </div>
              <div>
                <div>Johnny Bravo</div>
                <div>Classification: Hard</div>
              </div>
            </div>
          )}
        </div>
        {afterMessage === "-" ? (
          <button onClick={() => navigate("/game")}>Nevermind</button>
        ) : (
          <div>{afterMessage}</div>
        )}
      </div>
      <img src="../placement.png" style={circStyle} className="redcirc"></img>
    </div>
  );
};

export default FindMessage;
