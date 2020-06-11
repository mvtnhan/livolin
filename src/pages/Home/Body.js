import React from "react";
import styled from "styled-components";

import ArticleBox from "./ActicleBox.js";
import Container from "../../components/Container";
import SectionBox from "./SectionBox.js";

import ImgAskExpert from "../../images/ask-expert.jpg";
import ImgCustomerReviews from "../../images/customer-reviews.jpg";
import ImgHandbookAlzheimer from "../../images/handbook-alzheimer-treatment.jpg";
import ImgHandbookBreakfast from "../../images/handbook-healthy-breakfast-time.jpg";
import ImgHandbookEgg from "../../images/handbook-egg-laying-or-live-birth.jpg";
import ImgHandbookOrange from "../../images/handbook-orange.jpg";
import ImgNewsAmpoule from "../../images/news-ampoule.jpg";
import ImgNewsLiver from "../../images/news-liver.jpg";
import ImgNewsVirut from "../../images/news-virut.jpg";
import ImgShare1 from "../../images/share-from-experts1.jpg";
import ImgShare2 from "../../images/share-from-experts2.jpg";
import ImgShare3 from "../../images/share-from-experts3.jpg";
import ImgShare4 from "../../images/share-from-experts4.jpg";

export default function Body() {
  return (
    <StyledBody>
      <Container>
        <div className="Ask">
          <SectionBox className="AskExpert" title="Hỏi chuyên gia">
            <ArticleBox
              image={ImgAskExpert}
              title="Xét nghiệm chẩn đoán viêm gan C là hoạt động được khuyến khích và vô cùng cần thiết."
              description="Một lượng nhỏ chất béo và dầu có vai trò rất quan trọng trong việc dự trữ năng lượng, bảo vệ các mô của cơ thể và vận chuyển vitamin. Tuy nhiên, quá nhiều chất béo lại gây ra tình trạng tích tụ mỡ trong gan, "
            />
          </SectionBox>
          <SectionBox className="CustomerReview" title="Nhận xét khách hàng">
            <ArticleBox
              image={ImgCustomerReviews}
              title="Viêm gan C kiêng ăn gì? Thực phẩm và thuốc nên tránh"
              description="Một chế độ ăn uống không khoa học, kém hợp lý có thể khiến bệnh nhân viêm gan C chậm hồi phục và tăng nguy cơ tổn thương gan nặng hơn. Do đó, người bệnh cần đặc biệt lưu ý khi lựa chọn thực phẩm tiêu thụ hàng ngày. "
            />
          </SectionBox>
          <p />
          <SectionBox className="News" title="Tin tức" vertical>
            <ArticleBox
              horizontal
              image={ImgNewsVirut}
              title="Viêm gan C thường không có biểu hiện rõ ràng vào các giai đoạn đầu của bệnh. D.."
            />
            <ArticleBox
              horizontal
              image={ImgNewsLiver}
              title="Xét nghiệm chẩn đoán viêm gan C là hoạt động được khuyến khích và vô cùng cần thiết."
            />
            <ArticleBox
              horizontal
              image={ImgNewsAmpoule}
              title="Viêm gan C là căn bệnh có thể lây lan qua đường máu, đường tình dục và mẹ truyền sang con."
            />
            <div className="SeeMore">
              <h3>Xem Thêm</h3>
              <RightTriangle />
            </div>
          </SectionBox>
        </div>
        <div className="Health">
          <SectionBox className="HealthBox" title="Cẩm nang gan khoẻ">
            <>
              <ArticleBox
                image={ImgHandbookOrange}
                title="Symbolic Mathematics Finally Yields to Neural Networks"
                description="Researchers found picky eating to be a stable trait throughout ages 4 to 9. They reported that the eating habit appears to be associated"
              />
              <ArticleBox
                image={ImgHandbookEgg}
                title="Egg Laying or Live Birth: How Evolution Chooses "
                description="Discoveries that transcend boundaries are among the greatest delights of scientific research, but such leaps are often overlooked because they "
              />
              <ArticleBox
                image={ImgHandbookBreakfast}
                title="Inside Deep Undersea Rocks, Life Thrives Without the Sun"
                description="I understood: Scientists must specialize to succeed. Biologists studying microglia don’t tend to read papers about brain waves, and brain "
              />
              <ArticleBox
                image={ImgHandbookAlzheimer}
                title="Spreading the Word on a Possible Alzheimer’s Treatment"
                description="Today, brain waves are a vital part of neuroscience research and medical diagnosis, though doctors have never manipulated them"
              />
            </>
          </SectionBox>
        </div>
        <SectionBox className="ShareFromExpert" title="Chia sẻ từ chuyên gia">
          <>
            <ArticleBox
              image={ImgShare1}
              title="Symbolic Mathematics Finally Yields to Neural Networks"
              time="2:46"
            />
            <ArticleBox
              image={ImgShare2}
              title="Egg Laying or Live Birth: How Evolution Chooses "
              time="2:46"
            />
            <ArticleBox
              image={ImgShare3}
              title="Inside Deep Undersea Rocks, Life Thrives Without the Sun"
              time="2:46"
            />
            <ArticleBox
              image={ImgShare4}
              title="Spreading the Word on a Possible Alzheimer’s Treatment"
              time="2:46"
            />
          </>
        </SectionBox>
      </Container>
    </StyledBody>
  );
}

const RightTriangle = styled.div`
  width: 0;
  height: 0;
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  border-left: 12px solid #ea650f;
`;

const StyledBody = styled.div`
  .Container {
    padding-bottom: 0;
  }

  .Ask {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 96px;

    @media (max-width: 1130px) {
      margin-bottom: 0;

      > p {
        display: none;
      }

      > div {
        margin-bottom: 0;

        > div {
          margin-bottom: 32px;
        }
      }
    }

    .AskExpert,
    .CustomerReview {
      .ArticleBox {
        width: 368px;

        img {
          width: 100%;
          height: 276px;
        }

        @media (max-width: 1130px) {
          img {
            height: 160px;
          }
        }
      }
    }

    > p {
      border: 0.1px solid #e8e8e8;
      margin: 0 38px;
    }

    .News {
      .ArticleBox {
        height: 134px;
        width: 268px;

        img {
          width: 134px;
        }

        h3 {
          margin: 0 0 0 8px;
        }
      }

      .SeeMore {
        display: flex;
        align-items: center;

        > div {
          margin-left: 8px;
        }
      }

      > div {
        h3 {
          margin-top: 0;
        }

        > div > img {
          padding-bottom: 16px;
        }
      }
    }

    @media (max-width: 1130px) {
      .AskExpert,
      .CustomerReview {
        .ArticleBox {
          width: 222px;

          img {
            height: 180px;
          }
        }
      }

      .News {
        .ArticleBox {
          width: 268px;
          height: 122px;

          img {
            width: 110px;
          }
        }
      }
    }

    @media (max-width: 860px) {
      .AskExpert,
      .CustomerReview {
        .ArticleBox {
          width: 100%;

          img {
            height: 360px;
          }
        }
      }

      .News {
        .ArticleBox {
          width: 100%;
          height: 124px;

          img {
            width: 40%;
          }
        }
      }
    }

    @media (max-width: 680px) {
      .AskExpert,
      .CustomerReview {
        .ArticleBox {
          img {
            height: 260px;
          }
        }
      }
    }
  }

  .HealthBox,
  .ShareFromExpert {
    margin-bottom: 96px;

    > div {
      justify-content: space-between;

      .ArticleBox {
        width: 268px;

        img {
          width: 100%;
          height: 151px;
        }
      }
    }

    @media (max-width: 1130px) {
      margin-bottom: 0px;

      > div > div {
        margin-bottom: 32px;
      }
    }
  }
`;
