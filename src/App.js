import { useEffect } from 'react';

const App = () => {
  console.log('Text na zacatku komponenty');

  useEffect(() => {
    console.log('Ja jsem useEffect'); // useEffect se vykonzoluje jako posledni
  });

  return (
    <div>
      <h1>Učíme se useEffect</h1>
      {console.log('Text uvnitr return')}
    </div>
  );
};

export default App;

// useeffect se pouziva pro neco co se deje az nakonec, napriklad casovac, neni to po kliknuti, spousti se az na konec.

// musime ho jako useState taky naimportovat
