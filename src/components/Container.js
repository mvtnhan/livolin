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
`;
