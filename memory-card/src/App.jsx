import React from 'react'
import Ancillary from './components/Ancillary';
import Cardset from './components/Cardset';

const App = () => {

  const unused = [
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
  ];

  const used = [];

  let characters = [];

  let i = 0;
  while(i<6){
    const curr = Math.floor(Math.random()*20);
    if(!characters.includes(curr)){
      i++;
      characters.push(curr);
    }
  }

  const passin = [unused[characters[0]], 
  unused[characters[1]], unused[characters[2]], 
  unused[characters[3]], unused[characters[4]], 
  unused[characters[5]]]

  return (
    <div>
      <Ancillary/>
      <Cardset charArr={passin} />
    </div>
  )
}

export default App