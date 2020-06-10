import styled from "styled-components";
import React from "react";

export default function Container(props) {
  return (
    <StyleContainer className="Container">{props.children}</StyleContainer>
  );
}

const StyleContainer = styled.div`
  max-width: 1168px;
  margin: 64px 24px;
`;
