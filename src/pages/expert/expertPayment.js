import MainLayout from "../../component/atoms/layout/mainLayout";
import PageTop from "../../component/organisms/pageTop";
import FootBtn from "../../component/organisms/footBtn";
import { useLocation, useNavigate } from "react-router-dom";
import { route } from "../../routes/route";
import ContentLayout from "../../component/atoms/layout/contentLayout";
import styled from "styled-components";
import TextArea from "../../component/atoms/input/textArea";
import MainInput from "../../component/atoms/input/mainInput";
import { useEffect, useState } from "react";
import MainText from "../../component/atoms/text/mainText";
import ContactModal from "../../component/templates/contactModal";
import { toast } from "react-toastify";

function ExpertPayment() {
  const navigate = useNavigate();
  const location = useLocation();

  const [pay, setPay] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [info, setInfo] = useState({
    name: "",
    tel: "",
    pay: "",
    content: "",
  });

  useEffect(() => {
    setPay({ ...location.state.pay });
  }, [location]);

  return (
    <>
      <MainLayout style={{ minHeight: "unset", height: "auto" }}>
        <PageTop
          qa={false}
          bg={"/assets/imgs/expert/expert-bg.png"}
          title={"결제하기"}
          content={
            <>
              결제 후 기입해주신 번호로
              <br />
              일정을 안내해드립니다
            </>
          }
        />
        <ContentLayout>
          <div style={{ width: "100%", marginBottom: "30px" }}>
            <InputTitle style={{ marginBottom: "6px" }}>성함</InputTitle>
            <MainInput
              // value={localStorage.getItem("name")}
              type={"text"}
              placeholder={"성함을 입력해주세요"}
              onChange={(e) => setInfo({ ...info, name: e.target.value })}
            />
          </div>
          <div style={{ width: "100%", marginBottom: "30px" }}>
            <InputTitle style={{ marginBottom: "6px" }}>전화번호</InputTitle>
            <MainInput
              // value={localStorage.getItem("phoneNumber")}
              type={"text"}
              placeholder={"전화번호를 입력해주세요"}
              onChange={(e) => setInfo({ ...info, tel: e.target.value })}
            />
          </div>
          <div style={{ width: "100%", marginBottom: "30px" }}>
            <InputTitle style={{ marginBottom: "10px" }}>상품 선택</InputTitle>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <RadioInput
                  name="pay"
                  id="basic"
                  type="radio"
                  onClick={() => {
                    setInfo({ ...info, pay: "basic" });
                  }}
                />
                <RadioLabel htmlFor="basic">{pay.basic?.price}</RadioLabel>
              </div>
              <MainText style={{ fontSize: "15px", color: "#787878", marginBottom: "10px" }}>
                {pay.basic?.explain}
              </MainText>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <RadioInput
                  name="pay"
                  id="standard"
                  type="radio"
                  onClick={() => {
                    setInfo({ ...info, pay: "standard" });
                  }}
                />
                <RadioLabel htmlFor="standard">{pay.standard?.price}</RadioLabel>
              </div>
              <MainText style={{ fontSize: "15px", color: "#787878", marginBottom: "10px" }}>
                {pay.standard?.explain}
              </MainText>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <RadioInput
                  name="pay"
                  id="pro"
                  type="radio"
                  onClick={() => {
                    setInfo({ ...info, pay: "pro" });
                  }}
                />
                <RadioLabel htmlFor="pro">{pay.pro?.price}</RadioLabel>
              </div>
              <MainText style={{ fontSize: "15px", color: "#787878", marginBottom: "10px" }}>
                {pay.pro?.explain}
              </MainText>
            </div>
          </div>
          <div style={{ width: "100%", marginBottom: "15px" }}>
            <InputTitle style={{ marginBottom: "6px" }}>요청사항</InputTitle>
            <TextArea
              placeholder={"요청사항을 입력해주세요"}
              onChange={(e) => setInfo({ ...info, content: e.target.value })}
            />
          </div>
        </ContentLayout>
        <FootBtn
          title={"결제하기"}
          onClick={() => {
            if (info.name !== "" && info.tel !== "" && info.pay !== "" && info.content !== "") {
              setModalOpen(true);
            } else {
              toast("내용을 모두 입력해주세요");
            }
          }}
        />
      </MainLayout>
      {modalOpen ? (
        <ContactModal
          title={"결제가 접수되었습니다"}
          text={"확인 후 기입해주신 번호로 연락드리겠습니다"}
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

export default ExpertPayment;

const InputTitle = styled(MainText).attrs((props) => {})`
  color: #191919;
  font-size: 15px;
  font-weight: 600;
  line-height: 21.25px;
`;

const RadioInput = styled.input.attrs((props) => {})`
  vertical-align: text-bottom;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 1px solid #ccd1d7;
`;

const RadioLabel = styled.label.attrs((props) => {})`
  color: #555;
  font-family: "Pretendard";
  font-size: 15px;
  font-weight: 600;
  line-height: 21.25px;
`;
