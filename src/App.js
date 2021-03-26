import React, { useState, useEffect } from "react";
import { WEATHER_KEY, GEO_KEY } from "./keys";
import "./App.css";
import Day from "./Components/Day";
import Header from "./Components/Header";
import WeatherChart from "./Components/WeatherChart";
import styled from "styled-components";
import Week from "./Components/Week";
const axios = require("axios");

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function App() {
  const [today, setToday] = useState({
    temp: 0,
    humidity: 0,
    wind_speed: 0,
  });

  const [week, setWeek] = useState({});

  const [location, setLocatoin] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeather(
        position.coords.latitude,
        position.coords.longitude,
        WEATHER_KEY
      );
    });
  }, []);

  const formatDate = (date) => {
    return `${date.getHours()}:${date.getMinutes()}, ${days[date.getDay()]}, ${
      months[date.getMonth()]
    } ${date.getUTCDate()}, ${date.getUTCFullYear()}`;
  };

  let getWeather = (lat, lon, WEATHER_KEY) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,hourly,alerts&appid=${WEATHER_KEY}`
      )
      .then((res) => {
        setToday({
          date: formatDate(new Date(res.data.current.dt * 1000)),
          temp: res.data.current.temp,
          humidity: res.data.current.humidity,
          wind_speed: res.data.current.wind_speed,
          description: res.data.current.weather[0].description,
          main: res.data.current.weather[0].main,
        });
        setWeek({
          0: {
            date: new Date(res.data.daily[0].dt * 1000),
            temp: res.data.daily[0].temp.max,
            humidity: res.data.daily[0].humidity,
            description: res.data.daily[0].weather[0].description,
            main: res.data.daily[0].weather[0].main,
          },
          1: {
            date: new Date(res.data.daily[1].dt * 1000).toUTCString(),
            temp: res.data.daily[1].temp.max,
            humidity: res.data.daily[1].humidity,
            description: res.data.daily[1].weather[0].description,
            main: res.data.daily[1].weather[0].main,
          },
          2: {
            date: new Date(res.data.daily[2].dt * 1000).toUTCString(),
            temp: res.data.daily[2].temp.max,
            humidity: res.data.daily[2].humidity,
            description: res.data.daily[2].weather[0].description,
            main: res.data.daily[2].weather[0].main,
          },
          3: {
            date: new Date(res.data.daily[3].dt * 1000).toUTCString(),
            temp: res.data.daily[3].temp.max,
            humidity: res.data.daily[3].humidity,
            description: res.data.daily[3].weather[0].description,
            main: res.data.daily[3].weather[0].main,
          },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    e.preventDefault();
    setLocatoin(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://eu1.locationiq.com/v1/search.php?key=${GEO_KEY}&q=${location}&format=json`
      )
      .then((res) => {
        getWeather(res.data[0].lat, res.data[0].lon, WEATHER_KEY);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <StyledApp className="App">
      <StyledCard>
        <DayContainer>
          <form onSubmit={handleSubmit}>
            <label>
              <span>Enter Location: </span>
              <input
                type="text"
                name="location"
                placeholder="Please enter location"
                onChange={handleChange}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
          <Day {...today} />
        </DayContainer>
        <WeekContainer>
          <WeatherChart {...week} />
          <Week {...week} />
        </WeekContainer>
      </StyledCard>
    </StyledApp>
  );
}

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f3f6fa;
  height: 100vh;
`;

const StyledCard = styled.div`
  display: flex;
  justify-content: center;
  height: 80vh;
  width: 80vw;
  align-items: center;
  background: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 13px;
`;

const DayContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80%;
  width: 33.3%;

  input {
    font-size: 14px;
  }

  form {
    margin-bottom: 40px;
  }
`;

const WeekContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 80%;
  width: 66.7%;
  font-size: 10px;
  padding: 20px;
`;

export default App;
