import React, { useState, useEffect } from "react";
import axios from "axios";

export default function SunriseSunset(props) {
  const [sunrise, setSunrise] = useState("");
  const [sunset, setSunset] = useState("");

  useEffect(() => {
    const apiUrl = `https://api.sunrise-sunset.org/json?lat=${props.lat}&lng=${props.lng}&date=today&formatted=0`;

    axios
      .get(apiUrl)
      .then((response) => {
        const data = response.data.results;
        const sunriseTime = new Date(data.sunrise);
        const sunsetTime = new Date(data.sunset);

        let sunriseHours = sunriseTime.getHours();
        if (sunriseHours < 10) {
          sunriseHours = `0${sunriseHours}`;
        }
        let sunriseMinutes = sunriseTime.getMinutes();
        if (sunriseMinutes < 10) {
          sunriseMinutes = `0${sunriseMinutes}`;
        }
        setSunrise(`${sunriseHours} : ${sunriseMinutes}`);

        let sunsetHours = sunsetTime.getHours();
        if (sunsetHours < 10) {
          sunsetHours = `0${sunsetHours}`;
        }
        let sunsetMinutes = sunsetTime.getMinutes();
        if (sunsetMinutes < 10) {
          sunsetMinutes = `0${sunsetMinutes}`;
        }
        setSunset(`${sunsetHours} : ${sunsetMinutes}`);
      })

      .catch((error) => {
        console.log(error);
      });
  }, [props.lat, props.lng]);

  return (
    <div>
      {sunrise && <div>Sunrise ~~ {sunrise}</div>}
      {sunset && <div>Sunset ~~ {sunset}</div>}
    </div>
  );
}
