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

function Join() {
  const navigate = useNavigate();
  const [info, setInfo] = useState({
    email: "",
    name: "",
    password: "",
  });

  return (
    <>
      <MainLayout style={{ minHeight: "unset", height: "auto" }}>
        <ContentLayout>
          <MainText style={{ fontSize: "24px", fontWeight: "600", lineHeight: "140%", margin: "50px 0" }}>
            회원가입
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
            <InputTitle style={{ marginBottom: "6px" }}>성함</InputTitle>
            <MainInput
              type={"text"}
              placeholder={"성함을 입력해주세요"}
              onChange={(e) => setInfo({ ...info, name: e.target.value })}
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
        </ContentLayout>
        <FootBtn
          title={"가입하기"}
          onClick={() => {
            if (info.name !== "" && info.email !== "" && info.password !== "") {
              localStorage.setItem("name", info.name);
              localStorage.setItem("email", info.email);
              localStorage.setItem("password", info.password);
              navigate(route.join_complete);
            } else {
              toast("내용을 모두 입력해주세요");
            }
          }}
        />
      </MainLayout>
    </>
  );
}

export default Join;

const InputTitle = styled(MainText).attrs((props) => {})`
  color: #191919;
  font-size: 15px;
  font-weight: 600;
  line-height: 21.25px;
`;
