import styled from "styled-components";
import MainText from "../../component/atoms/text/mainText";

function PageTop(props) {
  return (
    <>
      <PageTopWrapper style={{ background: `url(${props.bg}) no-repeat` }}>
        <img style={{ width: "24px", height: "24px", margin: "18px 0 24px 0" }} src="/assets/imgs/pageTop/goBack.svg" />
        <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "6px" }}>
          <PageTopTitle>{props.title}</PageTopTitle>
          <img style={{ width: "18px", height: "18px" }} src="/assets/imgs/pageTop/qna.svg" onClick={props.onClick} />
        </div>
        <PageTopContent>{props.content}</PageTopContent>
      </PageTopWrapper>
    </>
  );
}

export default PageTop;

const PageTopWrapper = styled.div.attrs((props) => {})`
  width: 100%;
  height: 200px;
  background-size: 100% 100%;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const PageTopTitle = styled(MainText).attrs((props) => {})`
  color: #fff;
  font-size: 26px;
  font-weight: 600;
  line-height: 120%; /* 31.2px */
`;

const PageTopContent = styled(MainText).attrs((props) => {})`
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  line-height: 143.75%;
`;
