import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { ReactComponent as SVGClock } from "../../images/icons/clock.svg";
import { ReactComponent as SVGPlay } from "../../images/icons/play.svg";

export default function ArticleBox(props) {
  return (
    <StyledArticleBox horizontal={props.horizontal} className="ArticleBox">
      <div>
        <img src={props.image} alt={props.title} />
        {props.time && <SVGPlay className="PlayVideo" />}
      </div>
      <h3>{props.title}</h3>
      {props.description && <p>{props.description}</p>}
      {props.time && (
        <div className="Time">
          <SVGClock />
          <span>{props.time}</span>
        </div>
      )}
    </StyledArticleBox>
  );
}

ArticleBox.prototype = {
  horizontal: PropTypes.bool,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

ArticleBox.defaultProps = {
  horizontal: false,
};

const StyledArticleBox = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.horizontal ? "row" : "column")};
  position: relative;

  img {
    border-radius: 2px;
  }

  > div {
    position: relative;
  }

  .PlayVideo {
    cursor: pointer;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  p,
  .Time {
    margin-top: 8px;
  }

  .Time {
    display: flex;
    align-items: center;

    svg {
      padding-right: 8px;
    }
  }
`;
