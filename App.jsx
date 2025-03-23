import React, { useState } from 'react';
import axios from 'axios';
import {motion } from "framer-motion"

const Weather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    try {
      const apiKey = "45419d6e147b0e16b9f9c5d4cd79b631"; // Replace with your actual API key
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );
      setWeather(response.data);
      setCity('');
    } catch (error) {
      alert("City not found or an error occurred!");
      setWeather(null); // Reset weather data on error
      setCity('');
    }
  };

  return (
    <div className="bg-gray-400 text-white p-6 rounded-lg shadow-md min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Weather App</h2>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="p-2 rounded-md text-black border focus:outline-none"
      />
      <button
        onClick={fetchWeather}
        className="bg-blue-400 p-2 rounded-md ml-2 hover:bg-blue-600"
      >
        Get Weather
      </button>

      {weather && weather.main && weather.weather && (
        <div className="mt-4">
          <h3 className="text-xl font-semibold">
            {weather.name}, {weather.sys.country}
          </h3>
            <p>Temperature: {weather.main.temp}°C</p>
         <p>Weather: {weather.weather[0].description}</p> 
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
