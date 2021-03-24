import React, { Component } from "react";
import { WEATHER_KEY } from "../keys";
const axios = require("axios");

export default class Day extends Component {
  constructor(props) {
    super(props);
    this.state = {
      today: {
        temp: 0,
        humidity: 0,
        wind_speed: 0,
      },
      week: {
        temp: 0,
        humidity: 0,
        wind_speed: 0,
      },
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <div className="card__date">{this.state.today.date}</div>
        <div className="card__image">{this.state.today.description}</div>
        <div className="card__detail">
          <h3>Humidity</h3>
          <p>{this.state.today.humidity}%</p>
        </div>
        <div className="card__detail">
          <h3>Wind Speed</h3>
          <p>{this.state.today.wind_speed}km/j</p>
        </div>
      </div>
    );
  }
}
