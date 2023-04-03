import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  <div className="Overview">
    <h1>{props.data.city}</h1>
    <ul>
      <li>
        <FormattedDate date={props.data.date} />
      </li>
      <li>{props.data.description}</li>
    </ul>
  </div>;

  <div className="Data">
    <div className="row">
      <div className="col-6">
        <div className="d-flex weather-temperature">
          <img src={props.data.iconURL} alt={props.data.description} />
          <div className="float-left">
            <strong className="temp">{props.data.temperature}</strong>
            <span className="units">°C</span>
          </div>
        </div>
      </div>
      <div className="col-6">
        <ul>
          <li>Precipitation: Figure %</li>
          <li>Humidity: {props.data.humidity} %</li>
          <li>Wind: {props.data.wind} km/h</li>
        </ul>
      </div>
    </div>
    <div className="weather-forecast"></div>
  </div>;
}
