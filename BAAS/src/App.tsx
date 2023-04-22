import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Game from "./components/Game";
import Scoreboard from "./components/Scoreboard";
import ExitMessage from "./components/ExitMessage";
import CharStatus from "./components/CharStatus";
import FindMessage from "./components/FindMessage";
import Winner from "./components/Winner";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/home" element={<Home />}>
        <Route path="score" element={<Scoreboard />} />
      </Route>
      <Route path="/game" element={<Game />}>
        <Route path="exit" element={<ExitMessage />} />
        <Route path="status" element={<CharStatus />} />
        <Route path="find" element={<FindMessage />} />
        <Route path="winner" element={<Winner />} />
      </Route>
    </Routes>
  );
};

export default App;
