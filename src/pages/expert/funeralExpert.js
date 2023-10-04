import { useState } from "react";
import { route } from "../../routes/route";
import MainLayout from "../../component/atoms/layout/mainLayout";
import MainText from "../../component/atoms/text/mainText";
import PageTop from "../../component/organisms/pageTop";
import ContentLayout from "../../component/atoms/layout/contentLayout";
import { useNavigate } from "react-router-dom";
import FootBtn from "../../component/organisms/footBtn";

function FuneralExpert() {
  const navigate = useNavigate();

  const [list] = useState([
    {
      title: "보람상조",
      tel: "1588-7979",
      src: "/assets/imgs/expert/funeral-expert-1.png",
    },
    {
      title: "프리드라이프",
      tel: "1588-3740",
      src: "/assets/imgs/expert/funeral-expert-2.png",
    },
    {
      title: "예다함",
      tel: "1566-6644",
      src: "/assets/imgs/expert/funeral-expert-3.png",
    },
    {
      title: "별이되어 상조",
      tel: "1600-6340",
      src: "/assets/imgs/expert/funeral-expert-4.png",
    },
    {
      title: "예담라이프",
      tel: "1660-0959",
      src: "/assets/imgs/expert/funeral-expert-5.png",
    },
    {
      title: "에노스 장례",
      tel: "010-2229-0320",
      src: "/assets/imgs/expert/funeral-expert-6.png",
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
          title={"상조회사"}
          content={
            <>
              모두를 위한 마지막
              <br />
              프리미엄 상조 서비스와 함께하세요
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

export default FuneralExpert;
