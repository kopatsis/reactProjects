import Card from "./Card"
import { useState, useEffect } from "react";

const Cardset = ({scoreZero, scoreInc, score}) => {

    const [win, setWin] = useState(false);

    const [unused, setUnused] = useState([
        "Edward Elric",
        "Eren Yeager",
        "Gintoki Sakata",
        "Satorou Gojo",
        "Guts",
        "Hachiman Hikigaya",
        "Itachi Uchiha",
        "Ken Kaneki",
        "Killua Zoldyck",
        "L Lawliet",
        "Lelouch Lamperouge",
        "Levi Ackerman",
        "Light Yagami",
        "Monkey D Luffy",
        "Makise Kurisu",
        "Mikasa Ackerman",
        "Naruto Uzumaki",
        "Rintarou Okabe",
        "Saitama",
        "Roronoa Zoro"
      ]);

      const [used, setUsed] = useState([]);

      const updateCards = () => {

        if (used.length < 20){
            const lenTable = [0,1,2,2,3,3,4,4,5,5,5,5,5,5,5,5,5,5,5,5];
            let indexes = [];
            let i = 0;
            while (i < lenTable[used.length]){
                const current = Math.floor(Math.random()*used.length);
                if(!indexes.includes(current)){
                    indexes.push(current);
                    i++;
                }
            }
            let j = 0;
            while (j < lenTable[used.length]){
                let temp = indexes[j];
                indexes[j] = used[temp];
                j++;
            }
            let k = lenTable[used.length];
            while (k < 6){
                const current = Math.floor(Math.random()*unused.length);
                if(!indexes.includes(current)){
                    indexes.push(current);
                    k++;
                }
            }
            let m = lenTable[used.length];
            while (m < 6){
                let temp = indexes[m];
                indexes[m] = unused[temp];
                m++;
            }
            let output = [];
            while(indexes.length > 0){
                if(indexes.length === 1){
                    output.push(indexes[0]);
                    indexes = [];
                } else {
                    let current = Math.floor(Math.random()*indexes.length);
                    output.push(indexes[current]);
                    indexes.splice(current, 1);
                }
            }
            setCardNames(output);
        } else {
            setWin(true);
        }
      }

      const [cardNames, setCardNames] = useState(["Eren Yeager", "Eren Yeager", "Eren Yeager", "Eren Yeager", "Eren Yeager", "Eren Yeager"]);

      useEffect(() => {
        updateCards();
      },[used]);

      const cardClicked = (event) => {
        if(!win){
            let namepass = event.target.id;
            if (used.includes(namepass)){
                reset();
            } else {
                if(unused.length===1){
                    setUnused([]);
                } else {
                    setUnused(unused.filter((entry) => {
                        return entry !== namepass;
                    }));
                }
                setUsed(used.concat(namepass));
                scoreInc();
            }
        }
      }

      const reset = () => {
        if(win){
            setWin(false);
        }
        setUnused([
            "Edward Elric",
            "Eren Yeager",
            "Gintoki Sakata",
            "Satorou Gojo",
            "Guts",
            "Hachiman Hikigaya",
            "Itachi Uchiha",
            "Ken Kaneki",
            "Killua Zoldyck",
            "L Lawliet",
            "Lelouch Lamperouge",
            "Levi Ackerman",
            "Light Yagami",
            "Monkey D Luffy",
            "Makise Kurisu",
            "Mikasa Ackerman",
            "Naruto Uzumaki",
            "Rintarou Okabe",
            "Saitama",
            "Roronoa Zoro"
          ]);
          scoreZero();
          setUsed([]);
      }

  return (
    <div className="allcards">
        <div className="cardrow">
            <Card charname={cardNames[0]} cardClick={cardClicked} score={score}/>
            <Card charname={cardNames[1]} cardClick={cardClicked} score={score}/>
            <Card charname={cardNames[2]} cardClick={cardClicked} score={score}/>
        </div>
        <div className="cardrow">
            <Card charname={cardNames[3]} cardClick={cardClicked} score={score}/>
            <Card charname={cardNames[4]} cardClick={cardClicked} score={score}/>
            <Card charname={cardNames[5]} cardClick={cardClicked} score={score}/>
        </div>
        <div className='message'>{win &&
        <>
        <div>Congrats, you won the game!</div>
        <button onClick={reset}>Restart</button></>}</div>
    </div>
  )
}

export default Cardset