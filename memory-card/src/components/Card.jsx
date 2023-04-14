import edward from "../assets/edward.jpg";
import eren from "../assets/eren.jpg";
import gintoki from "../assets/gintoki.jpg";
import gojo from "../assets/gojo.jpg";
import guts from "../assets/guts.jpg";
import hachiman from "../assets/hachiman.jpg";
import itachi from "../assets/itachi.jpg";
import kaneki from "../assets/kaneki.jpg";
import killua from "../assets/killua.jpg";
import L from "../assets/L.jpg";
import lelouch from "../assets/lelouch.jpg";
import levi from "../assets/levi.jpg";
import light from "../assets/light.jpg";
import luffy from "../assets/luffy.jpg";
import makise from "../assets/makise.jpg";
import mikasa from "../assets/mikasa.jpg";
import naruto from "../assets/naruto.jpg";
import rintaro from "../assets/rintaro.jpg";
import saitama from "../assets/saitama.jpg";
import zoro from "../assets/zoro.jpg";

const mapper ={
    "Edward Elric": edward,
    "Eren Yeager": eren,
    "Gintoki Sakata": gintoki,
    "Satorou Gojo": gojo,
    "Guts": guts,
    "Hachiman Hikigaya": hachiman,
    "Itachi Uchiha": itachi,
    "Ken Kaneki": kaneki,
    "Killua Zoldyck": killua,
    "L Lawliet": L,
    "Lelouch Lamperouge": lelouch,
    "Levi Ackerman": levi,
    "Light Yagami": light,
    "Monkey D Luffy": luffy,
    "Makise Kurisu": makise,
    "Mikasa Ackerman": mikasa,
    "Naruto Uzumaki": naruto,
    "Rintarou Okabe": rintaro,
    "Saitama": saitama,
    "Roronoa Zoro": zoro,
}

const Card = ({charname, cardClick, score}) => {

  return (
    <div key={score} onClick={cardClick} className="card" id={charname}>
        <img src={mapper[charname]} id={charname}>
        </img>
        <div className="cardtext" id={charname}>{charname} </div>
    </div>
  )
}

export default Card


// const mapper ={
//     "Edward Elric": 'edward',
//     "Eren Yeager": 'eren',
//     "Gintoki Sakata": 'gintoki',
//     "Satorou Gojo": 'gojo',
//     "Guts": 'guts',
//     "Hachiman Hikigaya": 'hachiman',
//     "Itachi Uchiha": 'itachi',
//     "Ken Kaneki": 'kaneki',
//     "Killua Zoldyck": 'killua',
//     "L Lawliet": 'L',
//     "Lelouch Lamperouge": 'lelouch',
//     "Levi Ackerman": 'levi',
//     "Light Yagami": 'light',
//     "Monkey D Luffy": 'luffy',
//     "Makise Kurisu": 'makise',
//     "Mikasa Ackerman": 'mikasa',
//     "Naruto Uzumaki": 'naruto',
//     "Rintarou Okabe": 'rintaro',
//     "Saitama": 'saitama',
//     "Roronoa Zoro": 'zoro',
// }

// const Card = ({charname, cardClick}) => {

//   return (
//     <div onClick={cardClick} className="card" id={charname}>
//         <img src={require(`../assets/${mapper[charname]}.jpg`)} id={charname}>
//         </img>
//         <div id={charname}>{charname} </div>
//     </div>
//   )
// }

// export default Card