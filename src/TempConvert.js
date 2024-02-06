import React, { useState } from "react";

export default function TempConvert(props) {
  let [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="TempConvert">
        <span className="temperature">{props.tempNumber}</span>{" "}
        <span className="unitBlock">
          ºC |{" "}
          <a href="/" onClick={showFahrenheit} className="units">
            ºF
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="TempConvert">
        <span className="temperature">{Math.round(fahrenheit())}</span>{" "}
        <span className="unitBlock">
          <a href="/" onClick={showCelsius} className="units">
            ºC
          </a>{" "}
          | ºF
        </span>
      </div>
    );
  }
}
