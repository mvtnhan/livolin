import React from "react";
import styled from "styled-components";
import ImgLogo from "../../images/logo.jpg";
import { ReactComponent as SVGTwitter } from "../../images/icons/twitter.svg";
import { ReactComponent as SVGFacebook } from "../../images/icons/facebook.svg";
import { ReactComponent as SVGInstagram } from "../../images/icons/instagram.svg";
import { ReactComponent as SVGLinkedin } from "../../images/icons/linkedin.svg";
import { ReactComponent as SVGLocation } from "../../images/icons/location.svg";
import { ReactComponent as SVGPhone } from "../../images/icons/phone.svg";
import { ReactComponent as SVGMail } from "../../images/icons/mail.svg";

export default function Footer() {
  return (
    <StyleFooter>
      <div className="Social">
        <img src={ImgLogo} alt="imglogo" />

        <ul className="IconContact">
          <li>
            <SVGTwitter />
          </li>
          <li>
            <SVGFacebook />
          </li>
          <li>
            <SVGInstagram />
          </li>
          <li>
            <SVGLinkedin />
          </li>
        </ul>
      </div>
      <div className="Contact">
        <h3>VPĐD MEGA LIFESCIENCES PUBLIC COMPANY LIMITED TẠI TP.HCM</h3>
        <ul>
          <li>
            <SVGLocation />
            <span>
              Tầng 5 Toà nhà Etown 1, 364 Cộng Hoà, Quận Tân Bình, TP.HCM
            </span>
          </li>
          <li>
            <SVGPhone />
            <span>84-28-38 123 166</span>
          </li>
          <li>
            <SVGMail />
            <span>Megavietnam@megawecare.com</span>
          </li>
        </ul>
      </div>
      <div className="Info">
        <div className="Ads">
          <h3>GIẤY PHÉP QUẢNG CÁO</h3>
          <ul>
            <li>Số giấy phép: 79-03724-01</li>
            <li>Số giấy xác nhận quảng cáo thuốc</li>
          </ul>
        </div>
        <div className="Support">
          <h3>THÔNG TIN HỖ TRỢ</h3>
          <ul>
            <li>Điều khoản sử dụng</li>
            <li>Quy trình đăng tải thông tin </li>
            <li>Chính sách bảo mật</li>
          </ul>
        </div>
      </div>
      <p>
        Inter LIVOLIN FORTE 2020 - 2028 | Privacy Policy | Responsible
        Disclosure
      </p>
    </StyleFooter>
  );
}

const StyleFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.color.Gray};
  padding: 64px 136px;
  justify-content: space-between;

  div > h3,
  span,
  p {
    font-size: 13px;
    line-height: 19px;
  }

  div > h3 {
    font-weight: ${({ theme }) => theme.fontStyle.Bold};
  }

  div > span {
    font-weight: ${({ theme }) => theme.fontStyle.Bold};
  }

  .Social {
    display: flex;
    flex-direction: column;

    img {
      width: 136px;
      height: 56px;
    }

    .IconContact {
      margin-top: 32px;
      display: flex;

      li {
        margin-right: 16px;
      }
    }
  }

  .Contact {
    ul {
      margin-top: 12px;
    }

    li {
      margin-bottom: 12px;
      display: flex;

      span {
        margin-left: 8px;
      }
    }
  }

  .Info {
    ul {
      margin-top: 12px;

      li {
        margin-bottom: 8px;
      }
    }

    .Ads {
      margin-bottom: 32px;
    }
  }

  p {
    margin-top: 24px;
    padding-top: 12px;
    border-top: 1px solid #e0e0e0;
    height: 20px;
    width: 100%;
  }
`;
