import React from "react";
import WeatherIcon from "./WeatherIcon";


export default function WeatherForecastDay(props) {
  function tempDaily() {
    return Math.round(props.data.temp.day);
  }

  function weekDay() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <strong className="forecastWeekDay">{weekDay()}</strong>
      <div className="forecastIcon">
        <WeatherIcon code={props.data.weather[0].icon} />
      </div>
      <span>{tempDaily()}º</span>
    </div>
  );
}
