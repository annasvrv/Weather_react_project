import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import TempConvert from "./TempConvert";

export default function WeatherDisplay(props) {
  return (
    <div className="WeatherDisplay">
      <h1 className="mt-4">
        {props.weatherData.city}, {props.weatherData.country}
      </h1>
      <div className="date mb-4">
        <span>
          <FormattedDate date={props.weatherData.date} />
        </span>
      </div>
      <div className="row currentWeather">
        <div className="col-6 d-flex justify-content-evenly">
          <div>
            <WeatherIcon
              code={props.weatherData.icon}
              alt={props.weatherData.description}
            />
          </div>
          <div>
            <TempConvert tempNumber={props.weatherData.temperature} />
          </div>
        </div>
        <div className="col-6">
          <ul className="conditions">
            <li className="conditionDescription">
              {props.weatherData.description}
            </li>
            <li>Wind: {props.weatherData.wind} km/h</li>
            <li>Humidity: {props.weatherData.humidity}%</li>
            <li>Pressure: {props.weatherData.pressure} hPa</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
