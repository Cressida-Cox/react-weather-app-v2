import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function formatDay() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  return (
    <div>
      <div className="WeatherForecast-date">{formatDay()}</div>
      <WeatherIcon code={props.data.icon} size={36} />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">
          {" "}
          {maxTemperature()}°{" "}
        </span>
        <span className="WeatherForecast-temperature-min">
          {" "}
          {minTemperature()}°{" "}
        </span>
      </div>
    </div>
  );
}
