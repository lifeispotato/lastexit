import { useState } from "react";
import { route } from "../../routes/route";
import MainLayout from "../../component/atoms/layout/mainLayout";
import MainText from "../../component/atoms/text/mainText";
import PageTop from "../../component/organisms/pageTop";
import ContentLayout from "../../component/atoms/layout/contentLayout";
import { useNavigate } from "react-router-dom";
import FootBtn from "../../component/organisms/footBtn";

function PhotoExpert() {
  const navigate = useNavigate();

  const [list] = useState([
    {
      title: "영정사진관",
      location: "서울 강동구 양재대로 1491 202호",
      tel: "0507-1424-7812",
    },
    {
      title: "가야영정사진",
      location: "서울 마포구 양화로 157 파라다이스텔 406호",
      tel: "02-333-2179",
    },
    {
      title: "예담영정사진",
      location: "서울 마포구 새창로8길 72 현대홈타운",
      tel: "010-2857-7770",
    },
    {
      title: "고려영정",
      location: "서울 강남구 선릉로 705 남산빌딩 3층 고려영정",
      tel: "0507-1360-0124",
    },
    {
      title: "세종포토",
      location: "서울 강동구 올림픽로 770 영림빌딩 1층",
      tel: "02-478-4093",
    },
    {
      title: "한태금사진관",
      location: "서울 송파구 중대로 183 B1",
      tel: "0507-1422-3324",
    },
  ]);

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
                onClick={() => navigate(route.testament_datail)}
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

export default PhotoExpert;
