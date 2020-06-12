import React from "react";
import styled from "styled-components";

import { ReactComponent as SVGSearch } from "../images/icons/search.svg";
import imglogo from "../images/logo.jpg";
import imgmenu from "../images/icons/menu.png";

export default class NavigationBar extends React.Component {
  state = {
    showMenu: false,
    menu: [
      "Về Livolin",
      "Cẩm nang gan",
      "Câu hỏi thường gặp",
      "Trải nghiệm",
      "Tin tức",
      "Điểm bán",
      "Về chúng tôi",
    ],
  };

  render() {
    const { menu, showMenu } = this.state;
    return (
      <StyledNavigationBar>
        <img src={imglogo} alt="imglogo" />
        <div className="MenuList">
          <ul className="Menu">
            {menu.map((icons) => (
              <li key={menu.indexOf(icons)}>{icons}</li>
            ))}
          </ul>

          {showMenu ? (
            <ul className="ShowMenu">
              {menu.map((icons) => (
                <li key={menu.indexOf(icons)}>{icons}</li>
              ))}
            </ul>
          ) : null}

          <img
            className="IconMenu"
            src={imgmenu}
            alt="img-menu"
            onClick={() => {
              this.setState({
                showMenu: !showMenu,
              });
            }}
          />
        </div>
        <div className="SearchBar">
          <SVGSearch />
          <input type="text" placeholder="Tìm kiếm"></input>
        </div>
      </StyledNavigationBar>
    );
  }
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
    cursor: pointer;
  }

  .MenuList {
    display: flex;
    flex-grow: 1;
    justify-content: center;

    ul {
      display: flex;
      align-items: center;

      li {
        margin: 0 12px;
        font-weight: ${({ theme }) => theme.fontStyle.Medium};
      }
    }

    .IconMenu {
      position: absolute;
      right: 0;
      top: 0;
      width: 48px;
      display: none;
      color: transparent;
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

  @media (max-width: 1130px) {
    height: 64px;

    .SearchBar {
      display: none;
    }
  }

  @media (max-width: 900px) {
    height: auto;
    overflow: unset;

    img {
      width: 48px;
    }

    .SearchBar {
      display: none;
    }

    .MenuList .Menu {
      display: none;
    }

    .MenuList .ShowMenu {
      position: absolute;
      top: 48px;
      left: 0;
      width: 100%;
      display: flex;
      background-color: white;
      flex-direction: column;
      align-items: flex-start;

      li {
        margin: 4px 16px;
        font-size: 24px;
        font-weight: ${({ theme }) => theme.fontStyle.Medium};
      }
    }

    .MenuList .IconMenu {
      display: block !important;
    }
  }
`;
