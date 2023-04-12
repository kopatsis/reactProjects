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

  const characters = [unused[Math.floor(Math.random()*20)], unused[Math.floor(Math.random()*20)], unused[Math.floor(Math.random()*20)],
  unused[Math.floor(Math.random()*20)], unused[Math.floor(Math.random()*20)], unused[Math.floor(Math.random()*20)]]

  return (
    <div>
      <Ancillary/>
      <Cardset charArr={characters} />
    </div>
  )
}

export default App