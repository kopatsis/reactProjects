import Card from "./Card"

const Cardset = ({charArr}) => {
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
    </div>
  )
}

export default Cardset