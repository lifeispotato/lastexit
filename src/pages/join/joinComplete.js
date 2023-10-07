import MainLayout from "../../component/atoms/layout/mainLayout";
import FootBtn from "../../component/organisms/footBtn";
import { useNavigate } from "react-router-dom";
import ContentLayout from "../../component/atoms/layout/contentLayout";
import MainText from "../../component/atoms/text/mainText";
import { route } from "../../routes/route";

function JoinComplete() {
  const navigate = useNavigate();

  return (
    <>
      <MainLayout style={{ minHeight: "100vh", height: "auto", justifyContent: "center" }}>
        <ContentLayout style={{ display: "flex", alignItem: "center", gap: "10px" }}>
          <img src="/assets/imgs/join/join-check.svg" alt="" />
          <MainText style={{ fontSize: "20px", fontWeight: "700", lineHeight: "28px", color: "#0A94D1" }}>
            회원가입 완료
          </MainText>
          <MainText
            style={{ fontSize: "16px", fontWeight: "400", lineHeight: "24px", color: "#555", textAlign: "center" }}
          >
            이제 라스트액시트만의
            <br />
            풍성한 혜택을 누려보세요
          </MainText>
        </ContentLayout>
        <FootBtn
          style={{ position: "fixed" }}
          title={"로그인 페이지로 이동"}
          onClick={() => {
            navigate(route.login);
          }}
        />
      </MainLayout>
    </>
  );
}

export default JoinComplete;
