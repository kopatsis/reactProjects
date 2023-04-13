const mapper ={
    "Edward Elric": 'edward',
    "Eren Yeager": 'eren',
    "Gintoki Sakata": 'gintoki',
    "Satorou Gojo": 'gojo',
    "Guts": 'guts',
    "Hachiman Hikigaya": 'hachiman',
    "Itachi Uchiha": 'itachi',
    "Ken Kaneki": 'kaneki',
    "Killua Zoldyck": 'killua',
    "L Lawliet": 'L',
    "Lelouch Lamperouge": 'lelouch',
    "Levi Ackerman": 'levi',
    "Light Yagami": 'light',
    "Monkey D Luffy": 'luffy',
    "Makise Kurisu": 'makise',
    "Mikasa Ackerman": 'mikasa',
    "Naruto Uzumaki": 'naruto',
    "Rintarou Okabe": 'rintaro',
    "Saitama": 'saitama',
    "Roronoa Zoro": 'zoro',
}

const Card = ({charname, cardClick}) => {

  return (
    <div onClick={cardClick} className="card" id={charname}>
        <img src={require(`../assets/${mapper[charname]}.jpg`)} id={charname}>
        </img>
        <div id={charname}>{charname} </div>
    </div>
  )
}

export default Card