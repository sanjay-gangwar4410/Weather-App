import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./infoBox.css";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

export default function InfoBox({ info }) {
  const RAIN_URL =
    "https://static.vecteezy.com/system/resources/previews/012/098/044/non_2x/illustration-of-heavy-rain-cloudy-weather-with-cartoon-animation-style-rainy-scenery-background-free-vector.jpg";
  const SUMMER_URL =
    "https://img.freepik.com/premium-photo/blazing-sun-noon-intense-sunlight-bright-sky-strong-shadows-midday-atmosphere-sunny-weather_1126694-77475.jpg?w=996";
  const WINTER_URL =
    "https://cdn.pixabay.com/photo/2022/01/13/16/37/trees-6935614_1280.jpg";
  return (
    <div className="infoBox">
      <div className="card">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp < 15
                ? WINTER_URL
                : SUMMER_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}&nbsp;{ info.humidity > 80
                ? <ThunderstormIcon/>
                : info.temp < 15
                ? <AcUnitIcon/>
                : <WbSunnyIcon/>}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component="span"
            >
              <p>Temperature: {info.temp}&deg;C</p>
              <p>Humidity: {info.humidity}</p>
              <p>Max Temperature: {info.maxTemp}&deg;C</p>
              <p>Min Temperature: {info.minTemp}&deg;C</p>
              <p>
                The weather can be described as {info.weather} and feels like{" "}
                {info.feelsLike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
