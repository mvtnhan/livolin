import React from "react";
import styled from "styled-components";
import imglogo from "../images/logo.jpg";
import { ReactComponent as SVGSearch } from "../images/icons/search.svg";

export default function NavigationBar() {
  return (
    <StyleNavigationBar>
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
    </StyleNavigationBar>
  );
}

const StyleNavigationBar = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 72px;
  overflow: hidden;
  border: 1px solid red;

  img {
    width: 156px;
  }

  .MenuList {
    display: flex;
    flex-grow: 1;
    padding: 0 154px;

    ul {
      padding: 0;
      display: flex;
      list-style: none;
    }
  }
`;
