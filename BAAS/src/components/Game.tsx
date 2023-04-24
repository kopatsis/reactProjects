import React from "react";
import { Outlet } from "react-router-dom";

const Game = () => {
  return (
    <>
      <nav>
        <span>Home</span>
        <span>Restart</span>
        <span>Character Statuses</span>
        <span>Time: 00:00</span>
      </nav>
      {/* BIG IMG */}
      <Outlet />
    </>
  );
};

export default Game;
