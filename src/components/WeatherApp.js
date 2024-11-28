import React, { useState, useEffect } from "react";
import axios from "axios";
import "./WeatherApp.css";


const WeatherApp = () => {
  const [city, setCity] = useState("Toronto");
  const [weather, setWeather] = useState(null);
  const [search,setSearch]= useState("");

  const fetchWeather = async (cityName) => {
    const API_KEY = "f7bc1f016eb1934bee6d8a3ac1b24277";
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      setWeather(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  const handleSearch = (e) => {
    e.preventDefault();
    if(search.trim()){
      setCity(search);
    }
  };

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}>
      <h1>Weather App</h1>
      <form onSubmit={handleSearch}>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Enter city"
      />
      <button onClick={() => fetchWeather(city)}>Search</button>
      </form>
      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <h2>Weather Details</h2>
      <p>Predictability: 71%</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind: {weather.wind.speed} km/h</p>
      <p>Air Pressure: {weather.main.pressure} mb</p>
      <p>Max Temp: {Math.round(weather.main.temp_max)}°C</p>
      <p>Min Temp: {Math.round(weather.main.temp_min)}°C</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
