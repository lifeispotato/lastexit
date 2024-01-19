import styled from "styled-components";
import MainLayout from "../../component/atoms/layout/mainLayout";
import MainText from "../../component/atoms/text/mainText";
import ContentLayout from "../../component/atoms/layout/contentLayout";
import DetailGoBack from "../../component/molecules/detailGoBack";
import MainInput from "../../component/atoms/input/mainInput";
import TextArea from "../../component/atoms/input/textArea";
import FootBtn from "../../component/organisms/footBtn";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function LibraryEdit() {
  const { id } = useParams();
  const itemIndex = id - 1;
  const today = new Date();

  const navigate = useNavigate();

  const [list, setList] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    let arr = JSON.parse(localStorage.getItem("libraryList"));
    setList(arr);
    setTitle(arr[itemIndex].title);
    setContent(arr[itemIndex].content);
  }, []);

  useEffect(() => {
    if (list.length <= 0) return;
    const arr = [...list];

    const year = today.getFullYear();
    const month = ("0" + (today.getMonth() + 1)).slice(-2);
    const day = ("0" + today.getDate()).slice(-2);

    const dateString = year + "." + month + "." + day;

    const obj = {
      title: title,
      content: content,
      time: dateString,
    };

    arr.splice(itemIndex, 1, obj);
    setList(arr);
  }, [title, content]);

  const editFunc = () => {
    localStorage.setItem("libraryList", JSON.stringify(list));
    navigate(-1);
  };

  return (
    <>
      <MainLayout>
        <DetailGoBack title={"글 수정하기"} />
        <ContentLayout>
          <div style={{ width: "100%", marginBottom: "15px" }}>
            <InputTitle style={{ marginBottom: "6px" }}>제목</InputTitle>
            <MainInput
              type={"text"}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder={"유언 제목을 입력해주세요 (최대 15자)"}
            />
          </div>
          <div style={{ width: "100%", marginBottom: "15px" }}>
            <InputTitle style={{ marginBottom: "6px" }}>상세내용</InputTitle>
            <TextArea
              placeholder={"상세 내용을 입력해주세요"}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
        </ContentLayout>
        <FootBtn title={"수정 완료"} onClick={editFunc} />
      </MainLayout>
    </>
  );
}

export default LibraryEdit;

const InputTitle = styled(MainText).attrs((props) => {})`
  color: #191919;
  font-size: 15px;
  font-weight: 600;
  line-height: 21.25px;
`;
