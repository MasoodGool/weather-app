import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Icon from "./Icon";

export default function Day(today) {
  return (
    <div>
      <div style={{ paddingBottom: "20px" }}>{today.date}</div>
      <Icon {...today} />
      <Container>
        <div style={{ display: "inline-block" }}>
          <strong>{today.temp}&#8451;</strong>
        </div>
      </Container>
      <div style={{ paddingBottom: "20px" }}>{today.description}</div>
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
  font-size: 14px;
  width: 90%;
`;
