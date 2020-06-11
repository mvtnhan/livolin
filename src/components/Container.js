import React from "react";
import styled from "styled-components";

export default function Container(props) {
  return (
    <StyledContainer className="Container">{props.children}</StyledContainer>
  );
}

const StyledContainer = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  padding: 64px 16px;

  @media (max-width: 1130px) {
    width: 760px;
  }

  @media (max-width: 860px) {
    width: 680px;
    padding: 64px 16px;
  }

  @media (max-width: 680px) {
    width: auto;
    padding: 64px 32px;
  }
`;
