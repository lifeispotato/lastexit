import styled from "styled-components";
import MainLayout from "../../component/atoms/layout/mainLayout";
import MainText from "../../component/atoms/text/mainText";
import FootNav from "../../component/organisms/footNav";
import { useNavigate } from "react-router-dom";
import { route } from "../../routes/route";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <MainLayout>
        <HomeBg>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "24px", paddingTop: "155px" }}>
            <img src="/assets/imgs/home/profile.svg" alt="" />
            <MainText style={{ fontSize: "24px", fontWeight: "600", lineHeight: "140%", color: "#ffffff" }}>
              오늘 남기고 싶은
              <br />
              홍길동님의 이야기는
              <br />
              무엇인가요?
            </MainText>
          </div>
        </HomeBg>
        <QuickMenuWrapper>
          <QuickMenu onClick={() => navigate(route.testament)}>
            <div>
              <MainText
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  lineHeight: "140%",
                  color: "#A464C3",
                  marginBottom: "5px",
                }}
              >
                편지유언
              </MainText>
              <MainText style={{ fontSize: "16px", fontWeight: "400", lineHeight: "143.75%", color: "#333333" }}>
                법적 효력이 있는 유언장을
                <br />
                작성하고 보관할 수 있습니다
              </MainText>
            </div>
            <img src="/assets/imgs/home/main-banner2.svg" style={{ width: "60px", height: "60px" }} alt="" />
          </QuickMenu>
          <div style={{ marginTop: "20px", padding: "20px 16px", borderRadius: "8px", background: "#F2F4F5" }}>
            <MainText style={{ fontSize: "16px", color: "#778088" }}>
              <span style={{ fontWeight: "600" }}>프리미엄 서비스가 곧 출시될 예정입니다.</span>
              <br />
              프리미엄 버전에서는 더욱더 다양한 기능을 제공드릴 예정이오니 많은 관심 부탁드립니다.
            </MainText>
          </div>
        </QuickMenuWrapper>
        <FootNav />
      </MainLayout>
    </>
  );
}

export default Home;

const HomeBg = styled.div.attrs((props) => {})`
  width: 100%;
  height: 313px;
  background: url("/assets/imgs/home/home-bg.png") center center no-repeat;
  background-size: 100% 100%;
  padding: 0 4.27%;
`;

const QuickMenuWrapper = styled.div.attrs((props) => {})`
  width: 100%;
  padding: 0 4.27%;
`;

const QuickMenu = styled.div.attrs((props) => {})`
  width: 100%;
  height: 160px;
  flex-shrink: 0;
  padding: 29px 32px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 2px 2px 9px 0px rgba(0, 0, 0, 0.18);
  margin-top: -28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
