import styled from "styled-components";
import MainText from "../../component/atoms/text/mainText";
import { useNavigate } from "react-router-dom";
import { route } from "../../routes/route";

function PageTop(props) {
  const navigate = useNavigate();
  return (
    <>
      <PageTopWrapper style={{ backgroundImage: `url(${props.bg})` }}>
        <img
          style={{ width: "24px", height: "24px", margin: "18px 0 24px 0" }}
          src="/assets/imgs/pageTop/goBack.svg"
          alt=""
          onClick={() => (props.goBackClick === "home" ? navigate(route.home) : navigate(-1))}
        />
        <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "6px" }}>
          <PageTopTitle>{props.title}</PageTopTitle>
          {props.qa ? (
            <img
              style={{ width: "18px", height: "18px" }}
              src="/assets/imgs/pageTop/qna.svg"
              onClick={props.onClick}
              alt=""
            />
          ) : (
            ""
          )}
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
  background-size: cover;
  background-position: bottom;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
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
