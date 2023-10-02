import MainLayout from "../../component/atoms/layout/mainLayout";
import MainText from "../../component/atoms/text/mainText";
import ContentLayout from "../../component/atoms/layout/contentLayout";
import { useNavigate } from "react-router-dom";
import { route } from "../../routes/route";
import FootNav from "../../component/organisms/footNav";
import CofferTab from "../../component/organisms/cofferTab";
import styled from "styled-components";

function Coffer() {
  const navigate = useNavigate();

  return (
    <>
      <MainLayout>
        <PageTopWrapper>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "6px" }}>
            <PageTopTitle>금고</PageTopTitle>
          </div>
          <PageTopContent>
            장기적 보존을 위한 기록은
            <br />
            금고에 안전하게 보관하십시오
          </PageTopContent>
        </PageTopWrapper>
        <ContentLayout>
          <CofferTab />
          <div
            style={{
              width: "100%",
              height: "84px",
              borderRadius: "8px",
              backgroundColor: "#fff",
              boxShadow: "0px 0px 9px 0px rgba(0, 0, 0, 0.20)",
              padding: "16px",
              marginBottom: "24px",
            }}
            onClick={() => navigate(route.testament_datail)}
          >
            <MainText
              style={{ color: "#191919", fontSize: "18px", fontWeight: "600", lineHeight: "23px", marginBottom: "6px" }}
            >
              2023.09.15 작성 유언
            </MainText>
            <MainText style={{ color: "#999", fontSize: "14px", fontWeight: "400", lineHeight: "23px" }}>
              2023.09.15
            </MainText>
          </div>
        </ContentLayout>
        <FootNav />
      </MainLayout>
    </>
  );
}

export default Coffer;

const PageTopWrapper = styled.div.attrs((props) => {})`
  width: 100%;
  height: 180px;
  background: url("/assets/imgs/coffer/coffer-bg.png") no-repeat;
  background-size: 100% 100%;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 16px;
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
