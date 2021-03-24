import React from "react";
import styled from "styled-components";
import Card from "./Card";

export default function Week(week) {
  return (
    <StyledCard>
      <Card {...week[0]} />
      <Card {...week[1]} />
      <Card {...week[2]} />
      <Card {...week[3]} />
    </StyledCard>
  );
}

const StyledCard = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
