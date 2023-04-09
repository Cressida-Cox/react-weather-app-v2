import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import SunriseSunset from "./SunriseSunset";
import WindDirection from "./WindDirection";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="Overview">
        <h1>
          {props.data.city}, {props.data.country}
        </h1>
        <p>
          <FormattedDate date={props.data.date} />
        </p>
        <div className="row">
          <div className="col" style={{ padding: "1.8em" }}>
            <ul>
              <li>
                <SunriseSunset />
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
              <li>Feels Like: {props.data.feelsLike}°C</li>
              <li>Humidity: {props.data.humidity} %</li>
              <li>
                Wind: {props.data.wind} km/h |{" "}
                <WindDirection direction={props.data.direction} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
