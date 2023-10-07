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

function FindPw() {
  const navigate = useNavigate();
  const [info, setInfo] = useState({
    email: "",
  });

  return (
    <>
      <MainLayout style={{ minHeight: "unset", height: "auto" }}>
        <ContentLayout style={{ alignItems: "flex-start" }}>
          <MainText
            style={{ fontSize: "24px", fontWeight: "600", lineHeight: "140%", margin: "6px 0", marginTop: "50px" }}
          >
            비밀번호 찾기
          </MainText>
          <MainText
            style={{ fontSize: "16px", fontWeight: "400", lineHeight: "140%", color: "#555", marginBottom: "33px" }}
          >
            회원가입 시에 입력했던
            <br />
            이메일을 입력해주세요
          </MainText>
          <div style={{ width: "100%", marginBottom: "15px" }}>
            <InputTitle style={{ marginBottom: "6px" }}>이메일</InputTitle>
            <MainInput
              type={"text"}
              placeholder={"이메일을 입력해주세요"}
              onChange={(e) => setInfo({ ...info, email: e.target.value })}
            />
          </div>
        </ContentLayout>
        <FootBtn
          title={"비밀번호 찾기"}
          onClick={() => {
            if (info.email !== "") {
              if (info.email !== localStorage.getItem("email")) {
                toast("이메일이 존재하지 않습니다");
                return;
              }
              navigate(route.login_find_pw_complete);
            } else {
              toast("내용을 모두 입력해주세요");
            }
          }}
        />
      </MainLayout>
    </>
  );
}

export default FindPw;

const InputTitle = styled(MainText).attrs((props) => {})`
  color: #191919;
  font-size: 15px;
  font-weight: 600;
  line-height: 21.25px;
`;
