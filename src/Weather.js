import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      date: new Date(response.data.dt * 1000),
      humidity: Math.round(response.data.main.humidity),
      wind: Math.round(response.data.wind.speed * 3.6),
      city: response.data.name,
      iconURL: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="Search">
          <form id="search-form" className="mb-3">
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Type a city..."
                  class="form-control"
                  id="city-input"
                  autocomplete="off"
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary w-100"
                />
              </div>
            </div>
          </form>
        </div>

        <div className="Overview">
          <h1>{weatherData.city}</h1>
          <ul>
            <li>Wednesday</li>
            <li>{weatherData.description}</li>
          </ul>
        </div>

        <div className="Data">
          <div className="row">
            <div className="col-6">
              <div className="d-flex weather-temperature">
                <img src={weatherData.iconURL} alt={weatherData.description} />
                <div className="float-left">
                  <strong className="temp">{weatherData.temperature}</strong>
                  <span className="units">°C</span>
                </div>
              </div>
            </div>
            <div className="col-6">
              <ul>
                <li>Precipitation: Figure %</li>
                <li>Humidity: {weatherData.humidity} %</li>
                <li>Wind: {weatherData.wind} km/h</li>
              </ul>
            </div>
          </div>
          <div className="weather-forecast"></div>
        </div>
      </div>
    );
  } else {
    const apiKey = "2ff29bed3181c3526c35cc5408037f85";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
