import { useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

interface Props {
  board: any;
  addToBoard: any;
}

const Winner = ({ board, addToBoard }: Props) => {
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

  const subToLeaderboard = (event: any) => {
    event.preventDefault();
    const seconds =
      parseInt(context.timeTaken[0]) * 3600 +
      parseInt(context.timeTaken[1]) * 60 +
      parseInt(context.timeTaken[2]);

    addToBoard({
      name: event.target[0].value,
      time: context.timeTaken,
      seconds: seconds,
    });
    navigate("/home/score");
  };

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
              <form onSubmit={subToLeaderboard}>
                <input type="text" name="winnername"></input>
                <input type="submit" value="Submit"></input>
              </form>
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
