import styled from "styled-components";
import MainLayout from "../../component/atoms/layout/mainLayout";
import MainText from "../../component/atoms/text/mainText";
import ContentLayout from "../../component/atoms/layout/contentLayout";
import DetailGoBack from "../../component/molecules/detailGoBack";
import MainInput from "../../component/atoms/input/mainInput";
import TextArea from "../../component/atoms/input/textArea";
import FootBtn from "../../component/organisms/footBtn";
import { useNavigate } from "react-router-dom";
import { route } from "../../routes/route";
import { useState } from "react";

function LibraryAdd() {
  const today = new Date();

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const writeLibrary = () => {
    let arr = JSON.parse(localStorage.getItem("libraryList"));

    const year = today.getFullYear();
    const month = ("0" + (today.getMonth() + 1)).slice(-2);
    const day = ("0" + today.getDate()).slice(-2);

    const dateString = year + "." + month + "." + day;

    if (title.length > 0 && content.length > 0) {
      const obj = {
        title: title,
        content: content,
        time: dateString,
      };

      if (arr) {
        arr.push(obj);
      } else {
        arr = [obj];
      }

      localStorage.setItem("libraryList", JSON.stringify(arr));

      navigate(route.library);
    }
  };

  return (
    <>
      <MainLayout>
        <DetailGoBack title={"글 작성하기"} />
        <ContentLayout>
          <div style={{ width: "100%", marginBottom: "15px" }}>
            <InputTitle style={{ marginBottom: "6px" }}>제목</InputTitle>
            <MainInput
              type={"text"}
              placeholder={"글 제목을 입력해주세요 (최대 15자)"}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div style={{ width: "100%", marginBottom: "15px" }}>
            <InputTitle style={{ marginBottom: "6px" }}>상세내용</InputTitle>
            <TextArea
              placeholder={"상세 내용을 입력해주세요"}
              onChange={(e) => {
                setContent(e.target.value);
              }}
            />
          </div>
        </ContentLayout>
        <FootBtn title={"등록 완료"} onClick={() => writeLibrary()} />
      </MainLayout>
    </>
  );
}

export default LibraryAdd;

const InputTitle = styled(MainText).attrs((props) => {})`
  color: #191919;
  font-size: 15px;
  font-weight: 600;
  line-height: 21.25px;
`;
