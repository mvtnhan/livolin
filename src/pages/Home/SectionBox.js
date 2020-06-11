import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

export default function SectionBox(props) {
  return (
    <StyledSectionBox vertical={props.vertical} className={props.className}>
      <h2>{props.title}</h2>
      <div>{props.children}</div>
    </StyledSectionBox>
  );
}

SectionBox.prototype = {
  vertical: PropTypes.bool,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

SectionBox.defaultProps = {
  vertical: false,
};

const StyledSectionBox = styled.div`
  h2 {
    font-weight: ${({ theme }) => theme.fontStyle.Bold};
    color: ${({ theme }) => theme.color.Orange};
    text-transform: uppercase;
    margin-bottom: 16px;
  }

  > div {
    display: flex;
    flex-wrap: wrap;
    flex-direction: ${(props) => (props.vertical ? "column" : "row")};

    h3 {
      margin-top: 16px;
      font-weight: ${({ theme }) => theme.fontStyle.Bold};
      color: #333333;
    }
  }
`;
