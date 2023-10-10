import { useState } from "react";
import { route } from "../../routes/route";
import MainLayout from "../../component/atoms/layout/mainLayout";
import MainText from "../../component/atoms/text/mainText";
import PageTop from "../../component/organisms/pageTop";
import ContentLayout from "../../component/atoms/layout/contentLayout";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function PhotoExpert() {
  const navigate = useNavigate();

  const [list] = useState([
    {
      title: "영정사진관",
      location: "서울 강동구 양재대로 1491 202호",
      tel: "0507-1424-7812",
      src: "/assets/imgs/expert/photo-expert-1.jpeg",
      pay: {
        basic: {
          price: "29,000원",
          explain: "기본 사진 1장",
        },
        standard: {
          price: "129,000원",
          explain: "기본 사진 1장 + 기본 액자 1개",
        },
        pro: {
          price: "329,000원",
          explain: "기본 사진, 배경 사진 각각 1장 + 액자",
        },
      },
    },
    {
      title: "가야영정사진",
      location: "서울 마포구 양화로 157 파라다이스텔 406호",
      tel: "02-333-2179",
      src: "/assets/imgs/expert/photo-expert-none.jpeg",
      pay: {
        basic: {
          price: "29,000원",
          explain: "기본 사진 1장",
        },
        standard: {
          price: "129,000원",
          explain: "기본 사진 1장 + 기본 액자 1개",
        },
        pro: {
          price: "329,000원",
          explain: "기본 사진, 배경 사진 각각 1장 + 액자",
        },
      },
    },
    {
      title: "예담영정사진",
      location: "서울 마포구 새창로8길 72 현대홈타운",
      tel: "010-2857-7770",
      src: "/assets/imgs/expert/photo-expert-none.jpeg",
      pay: {
        basic: {
          price: "29,000원",
          explain: "기본 사진 1장",
        },
        standard: {
          price: "129,000원",
          explain: "기본 사진 1장 + 기본 액자 1개",
        },
        pro: {
          price: "329,000원",
          explain: "기본 사진, 배경 사진 각각 1장 + 액자",
        },
      },
    },
    {
      title: "고려영정",
      location: "서울 강남구 선릉로 705 남산빌딩 3층 고려영정",
      tel: "0507-1360-0124",
      src: "/assets/imgs/expert/photo-expert-2.jpeg",
      pay: {
        basic: {
          price: "29,000원",
          explain: "기본 사진 1장",
        },
        standard: {
          price: "129,000원",
          explain: "기본 사진 1장 + 기본 액자 1개",
        },
        pro: {
          price: "329,000원",
          explain: "기본 사진, 배경 사진 각각 1장 + 액자",
        },
      },
    },
    {
      title: "세종포토",
      location: "서울 강동구 올림픽로 770 영림빌딩 1층",
      tel: "02-478-4093",
      src: "/assets/imgs/expert/photo-expert-3.jpeg",
      pay: {
        basic: {
          price: "29,000원",
          explain: "기본 사진 1장",
        },
        standard: {
          price: "129,000원",
          explain: "기본 사진 1장 + 기본 액자 1개",
        },
        pro: {
          price: "329,000원",
          explain: "기본 사진, 배경 사진 각각 1장 + 액자",
        },
      },
    },
    {
      title: "한태금사진관",
      location: "서울 송파구 중대로 183 B1",
      tel: "0507-1422-3324",
      src: "/assets/imgs/expert/photo-expert-4.jpeg",
      pay: {
        basic: {
          price: "29,000원",
          explain: "기본 사진 1장",
        },
        standard: {
          price: "129,000원",
          explain: "기본 사진 1장 + 기본 액자 1개",
        },
        pro: {
          price: "329,000원",
          explain: "기본 사진, 배경 사진 각각 1장 + 액자",
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
          title={"영정사진 전문가"}
          content={
            <>
              마지막 순간의 아름다움을
              <br />
              평생 간직하세요
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

export default PhotoExpert;

const ContactButton = styled.button.attrs((props) => {})`
  width: 100%;
  height: 38px;
  border-radius: 4px;
  color: #555;
  font-size: 13px;
  font-weight: 600;
  line-height: 21.25px;
`;
