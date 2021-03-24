import React from "react";
import Icon from "./Icon";
import styled from "styled-components";

export default function Card(day) {
  return (
    <StyledCard>
      <div>{JSON.stringify(day.date)}</div>
      <Icon {...day} />
      <div>Humidity</div>
      <div>{day.humidity}%</div>
    </StyledCard>
  );
}

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 13px;
`;
