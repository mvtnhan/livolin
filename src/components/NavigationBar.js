import React from "react";
import styled from "styled-components";

import { ReactComponent as SVGSearch } from "../images/icons/search.svg";
import imglogo from "../images/logo.jpg";

export default function NavigationBar() {
  return (
    <StyledNavigationBar>
      <img src={imglogo} alt="imglogo" />
      <div className="MenuList">
        <ul>
          <li>Về Livolin</li>
          <li>Cẩm nang gan</li>
          <li>Câu hỏi thường gặp</li>
          <li>Trải nghiệm</li>
          <li>Tin tức</li>
          <li>Điểm bán</li>
          <li>Về chúng tôi</li>
        </ul>
      </div>
      <div className="SearchBar">
        <SVGSearch />
        <input type="text" placeholder="Tìm kiếm"></input>
      </div>
    </StyledNavigationBar>
  );
}

const StyledNavigationBar = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: 72px;
  z-index: 1;
  overflow: hidden;
  background-color: white;

  img {
    width: 136px;
  }

  .MenuList {
    font-weight: ${({ theme }) => theme.fontStyle.Medium};
    display: flex;
    flex-grow: 1;
    justify-content: center;

    ul {
      display: flex;

      li {
        margin: 0 12px;
      }
    }
  }

  .SearchBar {
    align-items: center;
    padding-left: 32px;
    height: 100%;
    border-left: 1px solid #ebebeb;
    display: flex;

    input {
      border: none;
      margin-left: 8px;
    }
  }
`;
