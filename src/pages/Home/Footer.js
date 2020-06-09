import React from "react";
import styled from "styled-components";
import ImgLogo from "../../images/logo.jpg";

export default function Footer() {
  return (
    <StyleFooter>
      <div className="Social">
        <img src={ImgLogo} alt="imglogo" />
        <div className="IconContact"></div>
      </div>
      <div className="Contact">
        <h3>VPĐD MEGA LIFESCIENCES PUBLIC COMPANY LIMITED TẠI TP.HCM</h3>
        <ul>
          <li>Tầng 5 Toà nhà Etown 1, 364 Cộng Hoà, Quận Tân Bình, TP.HCM</li>
          <li>84-28-38 123 166</li>
          <li>Megavietnam@megawecare.com</li>
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

const StyleFooter = styled.div``;
