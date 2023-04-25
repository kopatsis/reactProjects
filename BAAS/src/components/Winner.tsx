import { useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

const Winner = () => {
  const context: any = useOutletContext();

  const navigate = useNavigate();

  useEffect(() => {
    if (
      context.charstats.Armored &&
      context.charstats.Catbus &&
      context.charstats.Johnny
    ) {
      context.offTime();
    }
  }, []);

  const subToLeaderboard = (event: any) => {};

  return (
    <>
      {context.charstats.Armored &&
      context.charstats.Catbus &&
      context.charstats.Johnny ? (
        <div className="popup-outer">
          <div className="popup-inner">
            <div>You Finished!</div>
            <div>
              Your time: {context.timeTaken[0]}:{context.timeTaken[1]}:
              {context.timeTaken[2]}
            </div>
            <div>
              <div>Enter your name below to submit to the leaderboard:</div>
              <input type="text" name="winnername"></input>
              <button onClick={subToLeaderboard}>Submit to leaderboard</button>
            </div>
            <button onClick={() => navigate("/home")}>Opt Out</button>
          </div>
        </div>
      ) : (
        <div className="popup-outer">
          <div className="popup-inner">
            <div>No cheating!</div>
            <button onClick={() => navigate("/game")}>Back</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Winner;
