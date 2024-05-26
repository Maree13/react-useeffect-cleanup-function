import { useState, useEffect } from 'react';

const App = () => {
  const [currentTime, setCurrentTime] = useState();

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
