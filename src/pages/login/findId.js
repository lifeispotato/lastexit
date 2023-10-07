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

function FindId() {
  const navigate = useNavigate();
  const [info, setInfo] = useState({
    phoneNumber: "",
  });

  return (
    <>
      <MainLayout style={{ minHeight: "unset", height: "auto" }}>
        <ContentLayout style={{ alignItems: "flex-start" }}>
          <MainText
            style={{ fontSize: "24px", fontWeight: "600", lineHeight: "140%", margin: "6px 0", marginTop: "50px" }}
          >
            이메일 찾기
          </MainText>
          <MainText
            style={{ fontSize: "16px", fontWeight: "400", lineHeight: "140%", color: "#555", marginBottom: "33px" }}
          >
            회원가입 시에 입력했던
            <br />
            핸드폰 번호를 입력해주세요
          </MainText>
          <div style={{ width: "100%", marginBottom: "15px" }}>
            <InputTitle style={{ marginBottom: "6px" }}>전화번호</InputTitle>
            <MainInput
              type={"text"}
              placeholder={"전화번호를 입력해주세요"}
              onChange={(e) => setInfo({ ...info, phoneNumber: e.target.value })}
            />
          </div>
        </ContentLayout>
        <FootBtn
          title={"아이디 찾기"}
          onClick={() => {
            if (info.phoneNumber !== "") {
              navigate(route.login);
            } else {
              toast("내용을 모두 입력해주세요");
            }
          }}
        />
      </MainLayout>
    </>
  );
}

export default FindId;

const InputTitle = styled(MainText).attrs((props) => {})`
  color: #191919;
  font-size: 15px;
  font-weight: 600;
  line-height: 21.25px;
`;
