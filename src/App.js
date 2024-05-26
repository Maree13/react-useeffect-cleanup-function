import { useState, useEffect } from 'react';

const App = () => {
  const [currentTime, setCurrentTime] = useState();

  console.log(new Date().toLocaleTimeString());

  return (
    <div>
      <h2>Aktuální čas</h2>
    </div>
  );
};

export default App;

// useeffect se pouziva pro neco co se deje az nakonec, napriklad casovac, neni to po kliknuti, spousti se az na konec.

// musime ho jako useState taky naimportovat

// useState a useEffect musime pouzit uvnitr komponenty

// useState umoznuje nastavit promennu, ktera bude mit nejakou hodnotu, a tu hodnotu v te promenne zmenit a tu komponentu znova vypsat.

// To co ulozime do zavorek useState() se nam ulozi do currentTime. setCurrentTime je funkce, kdyz nekam dolu napiseme to setCurrentTime a dame tam obli zavorky a neco posleme dovnitr, tak to co posleme do tech oblich zavorek se nam ulozi do toho currentTime a ta komponenta se znova vypise.

// new Date() ==> Sun May 26 2024 20:02:37 GMT+0200 (Central European Summer Time). My by sme si z toho potrebovali jenom vytahnout ten cas. new Date().toLocaleTimeString(). Je to klasicky js. My ted tohle vemem a napiseme si to do useStatu.
