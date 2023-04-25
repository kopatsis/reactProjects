import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="homep">
      <h1>Look. Carefully.</h1>
      <div>
        <div>How to Play:</div>
        <div>
          Once the game starts, try to find the 3 characters below in the images
          provided.
        </div>
        <div className="charsonmain">
          <div className="charprofmain">
            <div>
              <img className="charstatimg" src="../armor.png"></img>
            </div>
            <div>
              <div>The Armored Titan</div>
              <div>Classification: Easy</div>
            </div>
          </div>
          <div className="charprofmain">
            <div>
              <img className="charstatimg" src="../catbus.png"></img>
            </div>
            <div>
              <div>CatBus</div>
              <div>Classification: Medium</div>
            </div>
          </div>
          <div className="charprofmain">
            <div>
              <img className="charstatimg" src="../johnny.png"></img>
            </div>
            <div>
              <div>Johnny Bravo</div>
              <div>Classification: Hard</div>
            </div>
          </div>
        </div>
        <div>Once you find one, click them and see if you were correct.</div>
        <div>
          After you find all 3, you will be able to submit your time to the
          leaderboard.
        </div>
        <div>Good luck!</div>
      </div>
      <button onClick={() => navigate("/home/score")}>Leaderboard</button>
      <button onClick={() => navigate("/game")}>Play Game</button>
      <Outlet />
    </div>
  );
};

export default Home;
