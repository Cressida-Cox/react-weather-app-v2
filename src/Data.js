import React from "react";
import "./Data.css";

export default function Data() {
  return (
    <div className="Data">
      <div class="row">
        <div class="col-6">
          <div className="d-flex weather-temperature">
            <img src="" alt="" id="icon" />
            <div class="float-left">
              <strong>14</strong>
              <span className="units">°C</span>
            </div>
          </div>
        </div>
        <div class="col-6">
          <ul>
            <li>Humidity: Figure %</li>
            <li>Wind: Figure km/h</li>
          </ul>
        </div>
      </div>
      <div className="weather-forecast"></div>
    </div>
  );
}
