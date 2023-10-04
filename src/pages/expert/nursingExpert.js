import { useState } from "react";
import { route } from "../../routes/route";
import MainLayout from "../../component/atoms/layout/mainLayout";
import MainText from "../../component/atoms/text/mainText";
import PageTop from "../../component/organisms/pageTop";
import ContentLayout from "../../component/atoms/layout/contentLayout";
import { useNavigate } from "react-router-dom";
import FootBtn from "../../component/organisms/footBtn";

function NursingExpert() {
  const navigate = useNavigate();

  const [list] = useState([
    {
      title: "실비아 요양원",
      location: "서울 은평구 증산로15길 35-8 11동",
      tel: "02-303-7001",
    },
    {
      title: "행복한노인요양원",
      location: "서울 강북구 덕릉로 46",
      tel: "02-902-6400",
    },
    {
      title: "하나효요양병원",
      location: "서울 은평구 서오릉로 149 세웅그룹빌딩",
      tel: "02-356-7007",
    },
    {
      title: "시립서부노인전문요양센터",
      location: "서울 마포구 월드컵로36길 15",
      tel: "02-376-0472",
    },
    {
      title: "꽃동네 신내노인요양원",
      location: "서울 중랑구 신내로 194 신내노인요양원",
      tel: "02-490-2600",
    },
    {
      title: "서울시립중랑노인전문요양원",
      location: "서울 중랑구 양원역로 38 시립북부노인병원및시립중랑노인전문요양원",
      tel: "02-437-0144",
    },
  ]);

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
        <ContentLayout>
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
                onClick={() => navigate(route.testament_detail)}
              >
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
                  <MainText style={{ color: "#333", fontSize: "14px", fontWeight: "400", lineHeight: "23px" }}>
                    주소
                  </MainText>
                  <MainText
                    style={{ color: "#999", fontSize: "14px", fontWeight: "400", lineHeight: "23px", width: "80%" }}
                  >
                    {item.location}
                  </MainText>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <MainText style={{ color: "#333", fontSize: "14px", fontWeight: "400", lineHeight: "23px" }}>
                    전화
                  </MainText>
                  <MainText style={{ color: "#999", fontSize: "14px", fontWeight: "400", lineHeight: "23px" }}>
                    {item.tel}
                  </MainText>
                </div>
              </div>
            );
          })}
        </ContentLayout>
        <FootBtn title={"상담하고 싶어요"} onClick={() => navigate(route.contact)} />
      </MainLayout>
    </>
  );
}

export default NursingExpert;
