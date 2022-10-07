import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import TempConvert from "./TempConvert";

export default function WeatherDisplay(props) {
  return (
    <div className="WeatherDisplay">
      <h1 className="mt-4">
        {props.info.city}, {props.info.country}
      </h1>
      <div className="date mb-4">
        <span>
          <FormattedDate date={props.info.date} />
        </span>
      </div>
      <div className="row currentWeather">
        <div className="col-6 d-flex justify-content-evenly">
          <div>
            <WeatherIcon code={props.info.icon} alt={props.info.description} />
          </div>
          <div>
            <TempConvert celsius={props.info.temperature} />
          </div>
        </div>
        <div className="col-6">
          <ul className="conditions">
            <li className="conditionDescription">{props.info.description}</li>
            <li>Wind: {props.info.wind} km/h</li>
            <li>Humidity: {props.info.humidity}%</li>
            <li>Pressure: {props.info.pressure} hPa</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
