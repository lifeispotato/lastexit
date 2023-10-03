import MainLayout from "../../component/atoms/layout/mainLayout";
import PageTop from "../../component/organisms/pageTop";
import FootBtn from "../../component/organisms/footBtn";
import { useNavigate } from "react-router-dom";
import { route } from "../../routes/route";
import ContentLayout from "../../component/atoms/layout/contentLayout";
import styled from "styled-components";
import TextArea from "../../component/atoms/input/textArea";
import MainInput from "../../component/atoms/input/mainInput";
import { useState } from "react";
import MainText from "../../component/atoms/text/mainText";
import ContactModal from "../../component/templates/contactModal";

function Contact() {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [info, setInfo] = useState({
    name: "",
    tel: "",
    content: "",
  });

  return (
    <>
      <MainLayout style={{ minHeight: "unset", height: "auto" }}>
        <PageTop
          qa={false}
          bg={"/assets/imgs/expert/expert-bg.png"}
          title={"상담하기"}
          content={
            <>
              문의 내용을 입력해주시면
              <br />
              신속하게 응대드리겠습니다.
            </>
          }
        />
        <ContentLayout>
          <div style={{ width: "100%", marginBottom: "15px" }}>
            <InputTitle style={{ marginBottom: "6px" }}>성함</InputTitle>
            <MainInput
              type={"text"}
              placeholder={"성함을 입력해주세요"}
              onChange={(e) => setInfo({ ...info, name: e.target.value })}
            />
          </div>
          <div style={{ width: "100%", marginBottom: "15px" }}>
            <InputTitle style={{ marginBottom: "6px" }}>전화번호</InputTitle>
            <MainInput
              type={"text"}
              placeholder={"전화번호를 입력해주세요"}
              onChange={(e) => setInfo({ ...info, tel: e.target.value })}
            />
          </div>
          <div style={{ width: "100%", marginBottom: "15px" }}>
            <InputTitle style={{ marginBottom: "6px" }}>상세내용</InputTitle>
            <TextArea
              placeholder={"상세 내용을 입력해주세요"}
              onChange={(e) => setInfo({ ...info, content: e.target.value })}
            />
          </div>
        </ContentLayout>
        <FootBtn
          title={"제출하기"}
          onClick={() => {
            if (info.name !== "" && info.tel !== "" && info.content !== "") {
              setModalOpen(true);
            }
          }}
        />
      </MainLayout>
      {modalOpen ? (
        <ContactModal
          onClick={() => {
            setModalOpen(false);
            navigate(route.expert);
          }}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default Contact;

const InputTitle = styled(MainText).attrs((props) => {})`
  color: #191919;
  font-size: 15px;
  font-weight: 600;
  line-height: 21.25px;
`;
