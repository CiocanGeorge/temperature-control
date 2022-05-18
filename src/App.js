/* eslint-disable no-template-curly-in-string */
import React, { useState } from 'react';

const App = () => {
  const [temperatureValue, setTemperatureValue] = useState(20);
  const [temperatureColor, setTemperatureColor] = useState("hot");

  const incrementTemperatur = () => {
    const newTemperature = temperatureValue + 1;
    if (newTemperature >= 15) {
      setTemperatureColor('hot');
    }
    setTemperatureValue(newTemperature);
  }
  const decrementTemperatur = () => {
    const newTemperature = temperatureValue - 1;
    if (newTemperature < 15) {
      setTemperatureColor('cold');
    }
    setTemperatureValue(newTemperature);
  }

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={"temperature-display " + temperatureColor}>
          {temperatureValue}ºC
        </div>
      </div>
      <div className="button-container">
        <button onClick={incrementTemperatur}>+</button>
        <button onClick={decrementTemperatur}>-</button>
      </div>
    </div>
  )
}

export default App;
