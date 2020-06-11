import React from "react";
import styled from "styled-components";

import { ReactComponent as SVGChat } from "../../images/icons/chat.svg";
import ImgBgHeader from "../../images/bg-header.jpg";
import ImgLivolin from "../../images/livolin.png";
import ImgSlide from "../../images/icons/slide.png";
import ImgCalender from "../../images/icons/calender.png";

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
              <img src={ImgCalender} alt="imgcalender" />
              <span>June 27- July 8,2018</span>
            </li>
            <li>
              <SVGChat className="IconChat" />
              <span>PGS.TS Nguyễn Xuân Thành</span>
            </li>
          </ul>
          <button>Tìm hiểu thêm</button>
        </div>
      </div>
      <img className="ImgLivolin" src={ImgLivolin} alt="imglivolin" />
      <img className="ImgSlide" src={ImgSlide} alt="imgslide" />
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  margin-top: 72px;
  width: 100%;
  height: 640px;
  background: url(${ImgBgHeader}) center;
  background-size: cover;
  flex-direction: column;
  background-repeat: no-repeat;
  display: flex;
  text-align: center;
  align-items: center;
  position: relative;

  @media (max-width: 680px) {
    height: 480px;
  }

  .FindMore,
  .ImgSlide,
  ul,
  li {
    display: flex;
  }

  .HeadInfo {
    margin: auto;

    h1 {
      font-size: 56px;
      font-weight: ${({ theme }) => theme.fontStyle.SemiBold};

      @media (max-width: 680px) {
        font-size: 32px;
      }
    }

    .FindMore {
      border-radius: 2px;
      margin-top: 24px;
      padding: 8px;
      background-color: #ffffff;
      height: 48px;
      width: fit-content;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

      @media (max-width: 680px) {
        flex-direction: column;
        height: auto;
        margin: 24px auto;

        ul {
          display: flex;
          flex-direction: column;

          li {
            justify-content: center;
            margin: 0 !important;
            width: 100%;
            border-bottom: 8px solid white;
            padding: 0 8px;

            .IconChat {
              padding-left: 0 !important;
            }
          }
        }

        button {
          padding: 8px;
          padding: auto;
          margin-left: 0 !important;
          width: 100% !important;
        }
      }

      ul {
        align-items: center;
        background-color: ${({ theme }) => theme.color.Gray};
        border-radius: 2px;

        li {
          margin: auto 16px;

          .IconChat {
            padding-left: 16px;
            border-left: 1px solid #e0e0e0;
          }

          span {
            margin: auto;
            font-weight: ${({ theme }) => theme.fontStyle.Medium};
            color: #333333;
            margin: auto 0 auto 8px;
          }
        }
      }

      button {
        margin-left: 8px;
        background-color: ${({ theme }) => theme.color.Orange};
        border: none;
        border-radius: 2px;
        font-weight: ${({ theme }) => theme.fontStyle.Medium};
        color: #ffffff;
        width: 168px;
      }
    }
  }

  .ImgLivolin,
  .ImgSlide {
    position: absolute;
  }

  .ImgLivolin {
    top: 460px;
    right: 184px;

    @media (max-width: 680px) {
      display: none;
    }
  }

  .ImgSlide {
    bottom: 32px;
    margin: 0 auto;
  }
`;
