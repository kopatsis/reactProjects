import Card from "./Card"

const Cardset = ({charArr}) => {

    let won = false;

  return (
    <div className="allcards">
        <div className="cardrow">
            <Card charname={charArr[0]}/>
            <Card charname={charArr[1]}/>
            <Card charname={charArr[2]}/>
        </div>
        <div className="cardrow">
            <Card charname={charArr[3]}/>
            <Card charname={charArr[4]}/>
            <Card charname={charArr[5]}/>
        </div>
        <div className='message'>{won &&
        <>
        <div>Congrats, you won the game!</div>
        <button>Restart</button></>}</div>
    </div>
  )
}

export default Cardset