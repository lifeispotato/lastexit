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

function Login() {
  const navigate = useNavigate();
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });

  return (
    <>
      <MainLayout style={{ minHeight: "unset", height: "auto" }}>
        <ContentLayout>
          <MainText style={{ fontSize: "24px", fontWeight: "600", lineHeight: "140%", margin: "50px 0" }}>
            로그인
          </MainText>
          <div style={{ width: "100%", marginBottom: "15px" }}>
            <InputTitle style={{ marginBottom: "6px" }}>이메일</InputTitle>
            <MainInput
              type={"text"}
              placeholder={"이메일을 입력해주세요"}
              onChange={(e) => setInfo({ ...info, email: e.target.value })}
            />
          </div>
          <div style={{ width: "100%", marginBottom: "15px" }}>
            <InputTitle style={{ marginBottom: "6px" }}>비밀번호</InputTitle>
            <MainInput
              type={"password"}
              placeholder={"비밀번호를 입력해주세요"}
              onChange={(e) => setInfo({ ...info, password: e.target.value })}
            />
          </div>
          <div
            style={{ width: "100%", display: "flex", justifyContent: "flex-end", gap: "10px", marginBottom: "20px" }}
          >
            <MainText
              style={{ fontSize: "13px", fontWeight: "400", lineHeight: "140%", color: "#767676" }}
              onClick={() => {
                navigate(route.login_find_id);
              }}
            >
              <u>이메일 찾기</u>
            </MainText>
            <MainText
              style={{ fontSize: "13px", fontWeight: "400", lineHeight: "140%", color: "#767676" }}
              onClick={() => {
                navigate(route.login_find_pw);
              }}
            >
              <u>비밀번호 찾기</u>
            </MainText>
          </div>
        </ContentLayout>
        <FootBtn
          style={{ marginBottom: "20px", height: "auto" }}
          title={"로그인"}
          onClick={() => {
            if (info.email !== "" && info.password !== "") {
              if (info.email !== localStorage.getItem("email")) {
                toast("아이디가 존재하지 않습니다");
                return;
              }
              if (info.password !== localStorage.getItem("password")) {
                toast("비밀번호가 틀렸습니다");
                return;
              }
              sessionStorage.setItem("email", info.email);
              sessionStorage.setItem("password", info.password);
              navigate(route.home);
            } else {
              toast("내용을 모두 입력해주세요");
            }
          }}
        />
        <div
          style={{ width: "100%", padding: "0 4.27%", display: "flex", flexDirection: "column", alignItems: "center" }}
        >
          <div style={{ width: "100%", border: "1px solid #cccccc50" }}></div>
          <MainText
            style={{
              width: "50%",
              marginTop: "-10px",
              marginBottom: "20px",
              textAlign: "center",
              fontSize: "13px",
              fontWeight: "400",
              lineHeight: "140%",
              color: "#555",
              backgroundColor: "#fff",
            }}
          >
            특별한 유산이 처음이신가요?
          </MainText>
          <JoinBtn onClick={() => navigate(route.join)}>이메일로 회원가입 하기</JoinBtn>
        </div>
      </MainLayout>
    </>
  );
}

export default Login;

const InputTitle = styled(MainText).attrs((props) => {})`
  color: #191919;
  font-size: 15px;
  font-weight: 600;
  line-height: 21.25px;
`;

const JoinBtn = styled.button.attrs((props) => {})`
  width: 100%;
  height: 48px;
  border-radius: 31px;
  background: #f2f4f5;
  color: #555;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 137.5% */
`;
