import { useState } from "react";
import { route } from "../../routes/route";
import MainLayout from "../../component/atoms/layout/mainLayout";
import MainText from "../../component/atoms/text/mainText";
import PageTop from "../../component/organisms/pageTop";
import ContentLayout from "../../component/atoms/layout/contentLayout";
import { useNavigate } from "react-router-dom";
import FootBtn from "../../component/organisms/footBtn";

function InheritanceExpert() {
  const navigate = useNavigate();

  const [list] = useState([
    {
      title: "세무회계도우",
      location: "서울 강동구 천호대로176길 10 4층 401호",
      tel: "0507-1378-4207",
      src: "/assets/imgs/expert/tax-expert-1.png",
    },
    {
      title: "홍순기세무사사무소",
      location: "서울 서초구 반포대로30길 81 웅진타워 15층",
      tel: "0507-1361-1717",
      src: "/assets/imgs/expert/tax-expert-none.png",
    },
    {
      title: "김수환세무회계사무소",
      location: "서울 서초구 반포대로30길 81 15층",
      tel: "0507-1387-2811",
      src: "/assets/imgs/expert/tax-expert-none.png",
    },
    {
      title: "법무법인 태승 더스마트상속",
      location: "경기 수원시 영통구 광교중앙로248번길 95-9 캡틴법조타운 6층 601호",
      tel: "0507-1329-1073",
      src: "/assets/imgs/expert/tax-expert-2.png",
    },
    {
      title: "시온세무회계&컨설팅",
      location: "경기 수원시 영통구 광교중앙로248번길 7-2 원희캐슬광교 A동 211호",
      tel: "031-994-7800",
      src: "/assets/imgs/expert/tax-expert-3.png",
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
          title={"상속/증여 전문가"}
          content={
            <>
              라스트액시트 회원을 위한
              <br />
              상속/증여 최고 전문가들입니다
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
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "20px",
                }}
                onClick={() => navigate(route.testament_detail)}
              >
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
                      style={{ color: "#333", fontSize: "14px", fontWeight: "400", lineHeight: "23px", width: "28px" }}
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
                      style={{ color: "#333", fontSize: "14px", fontWeight: "400", lineHeight: "23px", width: "28px" }}
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
            );
          })}
        </ContentLayout>
        <FootBtn title={"상담하고 싶어요"} onClick={() => navigate(route.contact)} />
      </MainLayout>
    </>
  );
}

export default InheritanceExpert;
