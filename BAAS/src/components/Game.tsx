import React from "react";
import { Outlet } from "react-router-dom";

const Game = () => {
  return (
    <>
      <div>Game</div>
      <Outlet />
    </>
  );
};

export default Game;
