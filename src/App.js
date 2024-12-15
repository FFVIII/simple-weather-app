import { useState } from "react";

function App() {
  
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState('');
  const apiKey = '';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  const fetchWeather = async () => {
    if(!city) return;
    const response = await fetch(url);
    const data = await response.json();
    setWeather(data);
  }

  return (
    <div className="App">
      <h1>Weather App</h1>
      <div>
        <input 
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
         <button onClick={fetchWeather}>Get Weather</button>
      </div>
      { weather && (
        <div className="weather-info">
          <h2>In {weather.name}</h2>
          <p>Temperature: {Math.round(weather.main.temp - 273.15)}°C</p>
          <p>Condition: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default App;
