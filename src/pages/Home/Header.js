import React from "react";
import styled from "styled-components";

import { ReactComponent as SVGCalender } from "../../images/icons/calender.svg";
import { ReactComponent as SVGChat } from "../../images/icons/chat.svg";
import ImgBgHeader from "../../images/bg-header.jpg";
import ImgLivolin from "../../images/livolin.png";

export default function Header() {
  return (
    <StyledHeader>
      <div className="HeadInfo">
        <h1>
          Chương trình tư vấn sức <br /> khoẻ các bệnh lý về gan
        </h1>
        <div className="FindMore">
          <ul>
            <li>
              <SVGCalender />
              <span>June 27- July 8,2018</span>
            </li>
            <li>
              <SVGChat />
              <span>PGS.TS Nguyễn Xuân Thành</span>
            </li>
          </ul>
          <button>Tìm hiểu thêm</button>
        </div>
        <img src={ImgLivolin} alt="imglivolin" />
      </div>
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  margin-top: 72px;
  width: 100%;
  height: 640px;
  background: url(${ImgBgHeader}) center;
  background-size: 100%;
  background-repeat: no-repeat;
  display: flex;
  text-align: center;
  position: relative;

  .HeadInfo {
    margin: auto;
    border-radius: 2px;

    h1 {
      font-size: 56px;
      font-weight: ${({ theme }) => theme.fontStyle.SemiBold};
    }

    .FindMore {
      margin-top: 24px;
      display: flex;
      padding: 8px;
      background-color: #ffffff;
      height: 48px;
      width: fit-content;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

      ul {
        display: flex;
        align-items: center;
        background-color: ${({ theme }) => theme.color.Gray};
        border-radius: 2px;

        li {
          display: flex;
          margin: auto 16px;

          span {
            margin: auto;
            font-weight: ${({ theme }) => theme.fontStyle.Medium};
            color: #333333;
            margin: auto 0 auto 8px;
          }
        }
      }

      button {
        background-color: ${({ theme }) => theme.color.Orange};
        border: none;
        border-radius: 2px;
        font-weight: ${({ theme }) => theme.fontStyle.Medium};
        color: #ffffff;
        width: 168px;
      }
    }
  }

  img {
    position: absolute;
    top: 460px;
    right: 184px;
  }
`;
