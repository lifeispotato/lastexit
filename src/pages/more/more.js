import MainLayout from "../../component/atoms/layout/mainLayout";
import MainText from "../../component/atoms/text/mainText";
import ContentLayout from "../../component/atoms/layout/contentLayout";
import DetailGoBack from "../../component/molecules/detailGoBack";
import { useNavigate } from "react-router-dom";
import { route } from "../../routes/route";
import ContactModal from "../../component/templates/contactModal";
import { useState } from "react";

function More() {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <MainLayout>
        <DetailGoBack title={"더보기"} style={{ marginBottom: "20px" }} />
        <ContentLayout style={{ marginTop: "20px", gap: "20px" }}>
          <div
            style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}
            onClick={() => {
              navigate(route.terms);
            }}
          >
            <MainText style={{ fontSize: "16px", fontWeight: "400", lineHeight: "23px", color: "#191919" }}>
              이용약관
            </MainText>
            <img src="assets/imgs/more/more-arrow.svg" alt="" />
          </div>
          <div
            style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}
            onClick={() => {
              navigate(route.policy);
            }}
          >
            <MainText style={{ fontSize: "16px", fontWeight: "600", lineHeight: "23px", color: "#191919" }}>
              개인정보처리방침
            </MainText>
            <img src="assets/imgs/more/more-arrow.svg" alt="" />
          </div>
          <div
            style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}
            onClick={() => {
              sessionStorage.clear();
              navigate(route.login);
            }}
          >
            <MainText style={{ fontSize: "16px", fontWeight: "400", lineHeight: "23px", color: "#999" }}>
              로그아웃
            </MainText>
          </div>
          <div
            style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}
            onClick={() => setModalOpen(true)}
          >
            <MainText style={{ fontSize: "16px", fontWeight: "400", lineHeight: "23px", color: "#999" }}>
              계정삭제
            </MainText>
          </div>
        </ContentLayout>
      </MainLayout>
      {modalOpen ? (
        <ContactModal
          title={"계정을 삭제하시겠습니까?"}
          text={"정보가 모두 삭제됩니다"}
          onClick={() => {
            sessionStorage.clear();
            localStorage.clear();
            setModalOpen(false);
            navigate(route.login);
          }}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default More;
