import React from 'react'

const App = () => {

  const nameMap = {
    "Edward Elric": "./assets/edward.jpg",
    "Eren Yeager": "./assets/eren.jpg",
    "Gintoki Sakata": "./assets/gintoki.jpg",
    "Satorou Gojo": "./assets/gojo.jpg",
    "Guts": "./assets/guts.jpg",
    "Hachiman Hikigaya": "./assets/hachiman.jpg",
    "Itachi Uchiha": "./assets/itachi.jpg",
    "Ken Kaneki": "./assets/kaneki.jpg",
    "Killua Zoldyck": "./assets/killua.jpg",
    "L Lawliet": "./assets/L.jpg",
    "Lelouch Lamperouge": "./assets/lelouch.jpg",
    "Levi Ackerman": "./assets/levi.jpg",
    "Light Yagami": "./assets/light.jpg",
    "Monkey D Luffy": "./assets/luffy.jpg",
    "Makise Kurisu": "./assets/makise.jpg",
    "Mikasa Ackerman": "./assets/mikasa.jpg",
    "Naruto Uzumaki": "./assets/naruto.jpg",
    "Rintarou Okabe": "./assets/rintaro.jpg",
    "Saitama": "./assets/saitama.jpg",
    "Roronoa Zoro": "./assets/zoro.jpg",
  };

  const usedSet = [];

  const unUsedSet = [];

  nameMap.forEach(name => unUsedSet.push(name));

  return (
    <div>App</div>
  )
}

export default App