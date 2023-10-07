import MainLayout from "../../component/atoms/layout/mainLayout";
import FootBtn from "../../component/organisms/footBtn";
import { useNavigate } from "react-router-dom";
import ContentLayout from "../../component/atoms/layout/contentLayout";
import MainText from "../../component/atoms/text/mainText";
import { route } from "../../routes/route";

function FindPwComplete() {
  const navigate = useNavigate();

  return (
    <>
      <MainLayout style={{ minHeight: "unset", height: "auto" }}>
        <ContentLayout style={{ alignItems: "flex-start" }}>
          <MainText
            style={{ fontSize: "24px", fontWeight: "600", lineHeight: "140%", margin: "6px 0", marginTop: "50px" }}
          >
            비밀번호 찾기 완료
          </MainText>
          <MainText
            style={{ fontSize: "16px", fontWeight: "400", lineHeight: "140%", color: "#555", marginBottom: "33px" }}
          >
            비밀번호 찾기를 완료하였습니다
          </MainText>
          <div
            style={{
              width: "100%",
              height: "48px",
              borderRadius: " 4px",
              background: "#F2F4F5",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "30px",
            }}
          >
            <MainText style={{ fontSize: "16px", fontWeight: "600" }}>{localStorage.getItem("password")}</MainText>
          </div>
        </ContentLayout>
        <FootBtn
          title={"로그인 페이지로"}
          onClick={() => {
            navigate(route.login);
          }}
        />
      </MainLayout>
    </>
  );
}

export default FindPwComplete;
