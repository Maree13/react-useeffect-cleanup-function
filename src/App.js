// useEffect a zavisle promenna
// useEffect se nemusi spustit vzdycky, ale jen kdy se zmeni nejaka promenna

import { useState, useEffect } from 'react';

const App = () => {
  // count

  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);

  useEffect(() => {
    document.title = `Počet kliknutí ${count}`;
  }, [count]); // useEffect se ma spustit pouze kdyz se zmeni to count: [count]

  return (
    <div>
      <p>Počet kliknuti na tlačítko: {count}</p>
      <button onClick={() => setCount(count + 1)}>Klikni na mē</button>

      <p>Obsah promenne value: {value}</p>
      <button onClick={() => setValue(value + 1)}>Opēt klikni</button>
    </div>
  );
};

export default App;

// PRIKLAD POCITANI CASU
// import { useState, useEffect } from 'react';

// const App = () => {
//   const [currentTime, setCurrentTime] = useState(
//     new Date().toLocaleTimeString(),
//   );

//   useEffect(() => {
//     setInterval(() => {
//       setCurrentTime(new Date().toLocaleTimeString());
//     }, 1000);
//   }, []);

//   return (
//     <div>
//       <h2>Aktuální čas</h2>
//       <p>{currentTime}</p>
//     </div>
//   );
// };

// export default App;

// useeffect se pouziva pro neco co se deje az nakonec, napriklad casovac, neni to po kliknuti, spousti se az na konec.

// musime ho jako useState taky naimportovat

// useState a useEffect musime pouzit uvnitr komponenty

// useState umoznuje nastavit promennu, ktera bude mit nejakou hodnotu, a tu hodnotu v te promenne zmenit a tu komponentu znova vypsat.

// To co ulozime do zavorek useState() se nam ulozi do currentTime. setCurrentTime je funkce, kdyz nekam dolu napiseme to setCurrentTime a dame tam obli zavorky a neco posleme dovnitr, tak to co posleme do tech oblich zavorek se nam ulozi do toho currentTime a ta komponenta se znova vypise.

// new Date() ==> Sun May 26 2024 20:02:37 GMT+0200 (Central European Summer Time). My by sme si z toho potrebovali jenom vytahnout ten cas. new Date().toLocaleTimeString(). Je to klasicky js. My ted tohle vemem a napiseme si to do useStatu. const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString); Pak currentTime vlozim do returnu jako npr. odstavec <p>{currentTime}</p>

// aktualni cas vlozim do currentTime a komponenta se musi znova refreshut. Jak zapezpecime, ze se bude komponenta refreshovat kazdou vterinu? aby se cas vypisoval dokola. "Nastartuj mi az na konci to pocitani."- to znamena, ze kazdu vterinu mi ten cas nastav. Na to pouzijem useEffect. useEffect(() => {});

// pouziju setInterval ==> nastavi, jak casto se neco ma opakovat. setInterval(() => {console.log('test');}, 3000); 3000 = opakovani po 3 sec, a do hranatych zavorek napisem co se ma provest. === kazde 3 vteriny se do console vypise 'test'

// useEffect pouzivame na vedlejsi efekty. Chceme vypsat soucasny cas, kdyz prijede na tu stranku poprve ==> prijde, stranka se nacte, vypise se ten soucasny stav. Vedlejsi efekt je to, ze mu to porad refreshujeme.

// Po tom co se nastavi setInterval, tak uz nepotrebujeme, aby useEffect bezal na pozadi. Pomocou zavorek [] zaistime, ze sa useEffect spusti jen jednou.
