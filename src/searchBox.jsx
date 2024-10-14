import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./searchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = import.meta.env.VITE_API_KEY;
  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse = await response.json();

      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        minTemp: jsonResponse.main.temp_min,
        maxTemp: jsonResponse.main.temp_max,
        weather: jsonResponse.weather[0].description,
        feelsLike: jsonResponse.main.feels_like,
        humidity: jsonResponse.main.humidity,
      };
      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleInput = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      console.log(city);
      setCity("");
      let info = await getWeatherInfo();
      updateInfo(info);
      setError("");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="searchBox">
      <h2>Search for Weather</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          onChange={handleInput}
          value={city}
        />
        <br />
        <br />
        <Button type="submit" variant="contained">
          Submit
        </Button>
        {error && <p style={{ color: "red" }}>No such place exists!</p>}
      </form>
    </div>
  );
}
