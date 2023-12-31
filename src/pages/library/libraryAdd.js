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

function LibraryAdd() {
  const navigate = useNavigate();

  return (
    <>
      <MainLayout>
        <DetailGoBack title={"글 작성하기"} />
        <ContentLayout>
          <div style={{ width: "100%", marginBottom: "15px" }}>
            <InputTitle style={{ marginBottom: "6px" }}>제목</InputTitle>
            <MainInput type={"text"} placeholder={"글 제목을 입력해주세요 (최대 15자)"} />
          </div>
          <div style={{ width: "100%", marginBottom: "15px" }}>
            <InputTitle style={{ marginBottom: "6px" }}>상세내용</InputTitle>
            <TextArea placeholder={"상세 내용을 입력해주세요"} />
          </div>
        </ContentLayout>
        <FootBtn title={"등록 완료"} onClick={() => navigate(route.library)} />
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
