import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Icon from "./Icon";

export default function Day(today) {
  return (
    <div>
      <div>{today.date}</div>
      <Container>
        <Icon {...today} style={{ display: "inline-block" }} />
        <div style={{ display: "inline-block" }}>
          <strong>{today.temp}&#8451;</strong>
        </div>
      </Container>
      <div>{today.description}</div>
      <Container>
        <div style={{ display: "inline-block" }}>
          <h3>Humidity</h3>
          <p>{today.humidity}%</p>
        </div>
        <div style={{ display: "inline-block" }}>
          <h3>Wind Speed</h3>
          <p>{today.wind_speed}km/j</p>
        </div>
      </Container>
    </div>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
  width: 90%;
  border: 1px solid green;
`;
