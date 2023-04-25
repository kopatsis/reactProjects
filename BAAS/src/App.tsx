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
    { name: "Example Reemachine", time: ["00", "03", "12"], seconds: 202 },
    { name: "Other Person", time: ["00", "02", "14"], seconds: 134 },
    { name: "ugggg idk", time: ["00", "04", "01"], seconds: 241 },
  ]);

  const [specialToBe, setSpecialToBe] = useState(0);

  const addBoard = (item: any) => {
    setScoreboard(scoreboard.concat(item));
    setSpecialToBe(item);
  };

  const resetSpecial = () => {
    setSpecialToBe(0);
  };

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/home" element={<Home />}>
        <Route
          path="score"
          element={
            <Scoreboard
              board={scoreboard}
              special={specialToBe}
              reset={resetSpecial}
            />
          }
        />
      </Route>
      <Route path="/game" element={<Game />}>
        <Route path="exit" element={<ExitMessage />} />
        <Route path="status" element={<CharStatus />} />
        <Route path="find" element={<FindMessage />} />
        <Route
          path="winner"
          element={<Winner board={scoreboard} addToBoard={addBoard} />}
        />
      </Route>
    </Routes>
  );
};

export default App;
