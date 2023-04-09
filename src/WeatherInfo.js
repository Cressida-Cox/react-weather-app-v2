import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="Overview">
        <h1>{props.data.city}</h1>
        <div className="row">
          <div className="col" style={{ padding: "1.8em" }}>
            <ul>
              <li>
                <FormattedDate date={props.data.date} />
              </li>
              <li>{props.data.description}</li>
            </ul>
          </div>

          <div className="col">
            <div className="weatherTemperature">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>

          <div className="col" style={{ padding: "1.8em" }}>
            <ul>
              <li>Humidity: {props.data.humidity} %</li>
              <li>Wind: {props.data.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
