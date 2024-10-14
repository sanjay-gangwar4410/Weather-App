import { useState } from "react";
import InfoBox from "../infoBox";
import SearchBox from "../searchBox";

export default function WeatherWidget() {
  let [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    temp: 24,
    minTemp: 19.4,
    maxTemp: 34.5,
    humidity: 60,
    feelsLike: 34.4,
    weather: "haze",
  });

  let handleUpdateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div>
      <SearchBox updateInfo={handleUpdateInfo}/>
      <InfoBox info={weatherInfo} />
    </div>
  );
}
