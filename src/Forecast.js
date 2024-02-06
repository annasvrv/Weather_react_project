import React, { useState, useEffect } from "react";
import "./Forecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [predictWeather, setPredictWeather] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.location]);

  function showForecast(response) {
    setPredictWeather(response.data.daily.slice(1, 8));
    setLoaded(true);
  }

  function load() {
    let latitude = props.location.lat;
    let longitude = props.location.lon;
    let unit = "metric";
    let apiKey = "74a1988810687be79d98c8fd17e5884a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${unit}`;

    axios.get(apiUrl).then(showForecast);
  }
  if (loaded) {
    return (
      <div className="Forecast">
        <div className=" weather-forecast">
          <div className="row">
            {predictWeather.map(function (dailyForecast, index) {
              if (index < 7) {
                return (
                  <div className="col forecastDay" key={index}>
                    <WeatherForecastDay data={dailyForecast} />
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>
    );
  } else {
    load();
  }
  return "Loading...";
}
