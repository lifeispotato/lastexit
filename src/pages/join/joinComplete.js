import MainLayout from "../../component/atoms/layout/mainLayout";
import FootBtn from "../../component/organisms/footBtn";
import { useNavigate } from "react-router-dom";
import ContentLayout from "../../component/atoms/layout/contentLayout";
import styled from "styled-components";
import MainInput from "../../component/atoms/input/mainInput";
import { useState } from "react";
import MainText from "../../component/atoms/text/mainText";
import { toast } from "react-toastify";
import { route } from "../../routes/route";

function JoinComplete() {
  const navigate = useNavigate();
  const [info, setInfo] = useState({
    email: "",
    name: "",
    password: "",
  });

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
          title={"시작하기"}
          onClick={() => {
            navigate(route.home);
          }}
        />
      </MainLayout>
    </>
  );
}

export default JoinComplete;

const InputTitle = styled(MainText).attrs((props) => {})`
  color: #191919;
  font-size: 15px;
  font-weight: 600;
  line-height: 21.25px;
`;