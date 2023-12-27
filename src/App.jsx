import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Clock from './assets/components/Clock'
//Tzivi Shachar 214187007 
//try to had a new clock with a timeZone :Europe/Rome and name:Rome!
function App() {
  const [publicInterval, setPublicInterval] = useState(1);
  const [timeZone, setTimeZone] = useState('');
  const [cityName, setCityName] = useState('');
  const [watches, setWatches] = useState([
    { key: 'NYC', cityName: 'NYC', timeZone: "America/New_York" },
    { key: 'LON', cityName: 'LON', timeZone: "Europe/London" },
    { key: 'JLM', cityName: 'JLM', timeZone: "Asia/Jerusalem" }
  ]);

  function handleReset() {
    setPublicInterval(1);
  }
  function handleDouble() {
    setPublicInterval((prev) => prev * 2);
  }
  function handleRandom() {
    setPublicInterval(Math.floor(Math.random() * 10))
  }
  function handleTimeZoneChange(e) {
    setTimeZone(e.target.value);
  }
  function handleCityNameChange(e) {
    setCityName(e.target.value);
  }
  function handleAddWatch() {
    let updatedWatches = watches.concat({
      key: cityName, cityName: cityName, timeZone: timeZone
    })
    setWatches(updatedWatches);
  }
  return (
    <>
      <h1>All Clocks</h1>
      <button onClick={handleReset}>Reset All Interval</button>
      <button onClick={handleDouble}>Double All Interval</button>
      <button onClick={handleRandom}>Randomize All Interval</button>
      <h2>Add a new watch:</h2>
      <div id='addWatch'>
        <input placeholder='The time zone of the watch' value={timeZone} onChange={handleTimeZoneChange}></input>
        <input placeholder='The name of the city' value={cityName} onChange={handleCityNameChange}></input>
        <button onClick={handleAddWatch}>➕</button>
      </div>
      {watches.map((w) => {
        return <Clock key={w.cityName} cityName={w.cityName} timeZone={w.timeZone} interval={publicInterval} watches={watches} setWatches={setWatches} />
      })}
    </>
  )
}

export default App
