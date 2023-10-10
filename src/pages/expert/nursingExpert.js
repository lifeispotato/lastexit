import { useState } from "react";
import { route } from "../../routes/route";
import MainLayout from "../../component/atoms/layout/mainLayout";
import MainText from "../../component/atoms/text/mainText";
import PageTop from "../../component/organisms/pageTop";
import ContentLayout from "../../component/atoms/layout/contentLayout";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function NursingExpert() {
  const navigate = useNavigate();

  const [list] = useState([
    {
      title: "실비아 요양원",
      location: "서울 은평구 증산로15길 35-8 11동",
      tel: "02-303-7001",
      src: "/assets/imgs/expert/nursing-expert-1.png",
      pay: {
        basic: {
          price: "600,000원 / 달",
          explain: "기본 생활 패키지",
        },
        standard: {
          price: "1,290,000원",
          explain: "기본 생활 패키지(2인실)",
        },
        pro: {
          price: "3,900,000원",
          explain: "1인실 프리미엄 서비스",
        },
      },
    },
    {
      title: "행복한노인요양원",
      location: "서울 강북구 덕릉로 46",
      tel: "02-902-6400",
      src: "/assets/imgs/expert/nursing-expert-none.png",
      pay: {
        basic: {
          price: "600,000원 / 달",
          explain: "기본 생활 패키지",
        },
        standard: {
          price: "1,290,000원",
          explain: "기본 생활 패키지(2인실)",
        },
        pro: {
          price: "3,900,000원",
          explain: "1인실 프리미엄 서비스",
        },
      },
    },
    {
      title: "하나효요양병원",
      location: "서울 은평구 서오릉로 149 세웅그룹빌딩",
      tel: "02-356-7007",
      src: "/assets/imgs/expert/nursing-expert-2.png",
      pay: {
        basic: {
          price: "600,000원 / 달",
          explain: "기본 생활 패키지",
        },
        standard: {
          price: "1,290,000원",
          explain: "기본 생활 패키지(2인실)",
        },
        pro: {
          price: "3,900,000원",
          explain: "1인실 프리미엄 서비스",
        },
      },
    },
    {
      title: "시립서부노인전문요양센터",
      location: "서울 마포구 월드컵로36길 15",
      tel: "02-376-0472",
      src: "/assets/imgs/expert/nursing-expert-3.png",
      pay: {
        basic: {
          price: "600,000원 / 달",
          explain: "기본 생활 패키지",
        },
        standard: {
          price: "1,290,000원",
          explain: "기본 생활 패키지(2인실)",
        },
        pro: {
          price: "3,900,000원",
          explain: "1인실 프리미엄 서비스",
        },
      },
    },
    {
      title: "꽃동네 신내노인요양원",
      location: "서울 중랑구 신내로 194 신내노인요양원",
      tel: "02-490-2600",
      src: "/assets/imgs/expert/nursing-expert-4.png",
      pay: {
        basic: {
          price: "600,000원 / 달",
          explain: "기본 생활 패키지",
        },
        standard: {
          price: "1,290,000원",
          explain: "기본 생활 패키지(2인실)",
        },
        pro: {
          price: "3,900,000원",
          explain: "1인실 프리미엄 서비스",
        },
      },
    },
    {
      title: "서울시립중랑노인전문요양원",
      location: "서울 중랑구 양원역로 38 시립북부노인병원및시립중랑노인전문요양원",
      tel: "02-437-0144",
      src: "/assets/imgs/expert/nursing-expert-5.png",
      pay: {
        basic: {
          price: "600,000원 / 달",
          explain: "기본 생활 패키지",
        },
        standard: {
          price: "1,290,000원",
          explain: "기본 생활 패키지(2인실)",
        },
        pro: {
          price: "3,900,000원",
          explain: "1인실 프리미엄 서비스",
        },
      },
    },
  ]);

  const onErrorImg = (e) => {
    e.target.src = "/assets/imgs/expert/error-img.png";
  };

  return (
    <>
      <MainLayout>
        <PageTop
          qa={false}
          bg={"/assets/imgs/expert/expert-detail-bg.png"}
          title={"요양원"}
          content={
            <>
              편안하고 안전한 노후를 위해
              <br />
              요양원 서비스를 이용해보세요
            </>
          }
        />
        <ContentLayout style={{ marginBottom: "20px" }}>
          {list.map((item, index) => {
            return (
              <div
                key={index}
                style={{
                  width: "100%",
                  minHeight: "84px",
                  height: "auto",
                  borderRadius: "8px",
                  backgroundColor: "#fff",
                  boxShadow: "0px 0px 9px 0px rgba(0, 0, 0, 0.20)",
                  padding: "16px",
                  marginBottom: "12px",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "20px" }}>
                  <div>
                    <MainText
                      style={{
                        color: "#191919",
                        fontSize: "18px",
                        fontWeight: "600",
                        lineHeight: "23px",
                        marginBottom: "9px",
                      }}
                    >
                      {item.title}
                    </MainText>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                      <MainText
                        style={{
                          color: "#333",
                          fontSize: "14px",
                          fontWeight: "400",
                          lineHeight: "23px",
                          width: "28px",
                        }}
                      >
                        주소
                      </MainText>
                      <MainText
                        style={{ color: "#999", fontSize: "14px", fontWeight: "400", lineHeight: "23px", width: "80%" }}
                      >
                        {item.location}
                      </MainText>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <MainText
                        style={{
                          color: "#333",
                          fontSize: "14px",
                          fontWeight: "400",
                          lineHeight: "23px",
                          width: "28px",
                        }}
                      >
                        전화
                      </MainText>
                      <MainText style={{ color: "#999", fontSize: "14px", fontWeight: "400", lineHeight: "23px" }}>
                        {item.tel}
                      </MainText>
                    </div>
                  </div>
                  <div>
                    <img
                      style={{ width: "80px", height: "80px", borderRadius: "7px" }}
                      src={item.src}
                      alt=""
                      onError={onErrorImg}
                    />
                  </div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", marginTop: "20px" }}>
                  <ContactButton
                    onClick={() =>
                      navigate(route.contact_expert, {
                        state: {
                          pay: item.pay,
                        },
                      })
                    }
                  >
                    문의하기
                  </ContactButton>
                  <ContactButton
                    style={{ color: "#fff", backgroundColor: "#0694d1" }}
                    onClick={() =>
                      navigate(route.contact_payment, {
                        state: {
                          pay: item.pay,
                        },
                      })
                    }
                  >
                    결제하기
                  </ContactButton>
                </div>
              </div>
            );
          })}
        </ContentLayout>
        {/* <FootBtn title={"상담하고 싶어요"} onClick={() => navigate(route.contact)} /> */}
      </MainLayout>
    </>
  );
}

export default NursingExpert;

const ContactButton = styled.button.attrs((props) => {})`
  width: 100%;
  height: 38px;
  border-radius: 4px;
  color: #555;
  font-size: 13px;
  font-weight: 600;
  line-height: 21.25px;
`;
