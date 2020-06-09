import React from "react";
import styled from "styled-components";

import { ReactComponent as SVGCalender } from "../../images/icons/calender.svg";
import { ReactComponent as SVGChat } from "../../images/icons/chat.svg";

export default function Header() {
  return (
    <StyledHeader>
      <div className="HeadInfo">
        <h1>Chương trình tư vấn sức khoẻ các bệnh lý về gan</h1>
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
            <li>
              <button>Tìm hiểu thêm</button>
            </li>
          </ul>
        </div>
      </div>
    </StyledHeader>
  );
}

const StyledHeader = styled.div``;
