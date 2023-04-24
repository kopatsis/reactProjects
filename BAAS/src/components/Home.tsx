import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Look. Carefully.</h1>
      <button onClick={() => navigate("/game")}>Play Game</button>
      <div>
        <div>How to Play:</div>
        <div>
          Once the game starts, try to find the 3 characters below in the image
          provided.
        </div>
        <div>{/* 3 chars */}</div>
        <div>Once you find one, click them and see if you were correct.</div>
        <div>
          After you find all 3, you will be able to submit your time to the
          leaderboard.
        </div>
        <div>Good luck!</div>
      </div>
      <button onClick={() => navigate("/home/score")}>Leaderboard</button>
      <Outlet />
    </>
  );
};

export default Home;
