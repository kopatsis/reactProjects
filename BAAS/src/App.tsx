import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Game from "./components/Game";
import Scoreboard from "./components/Scoreboard";
import ExitMessage from "./components/ExitMessage";
import CharStatus from "./components/CharStatus";
import FindMessage from "./components/FindMessage";
import Winner from "./components/Winner";

const App = () => {
  const [scoreboard, setScoreboard] = useState([
    { name: "Example Reemachine", time: [0, 180, 22], seconds: 202 },
    { name: "Other Person", time: [0, 120, 14], seconds: 134 },
    { name: "ugggg idk", time: [0, 240, 1], seconds: 241 },
  ]);

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/home" element={<Home />}>
        <Route
          path="score"
          element={<Scoreboard board={scoreboard} special={0} />}
        />
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
