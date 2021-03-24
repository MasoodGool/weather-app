import React, { useState, useEffect } from "react";
import Chart from "chart.js";
import styled from "styled-components";

export default function WeatherChart(weather) {
  useEffect(() => {
    var ctx = document.getElementById("myChart").getContext("2d");

    var temps = [];
    var dates = [];

    Object.entries(weather).forEach(([key, val]) => {
      temps.push(val.temp);
      dates.push(val.date);
    });
    var chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [],
        datasets: [
          {
            label: "",
            backgroundColor: "#3366ff",
            borderColor: "",
            data: temps,
          },
        ],
      },
      options: {},
    });
  }, [weather]);

  return (
    <ChartContainer>
      <canvas id="myChart"></canvas>
    </ChartContainer>
  );
}

const ChartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  font-size: 14px;
`;
