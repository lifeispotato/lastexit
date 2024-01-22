import MainLayout from "../../component/atoms/layout/mainLayout";
import MainText from "../../component/atoms/text/mainText";
import ContentLayout from "../../component/atoms/layout/contentLayout";
import { useNavigate } from "react-router-dom";
import { route } from "../../routes/route";
import FootNav from "../../component/organisms/footNav";
import CofferTab from "../../component/organisms/cofferTab";
import styled from "styled-components";
import { useEffect, useState } from "react";
import CofferModal from "../../component/templates/cofferModal";

function Coffer() {
  const navigate = useNavigate();
  const [tab, setTab] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const [testmentList, setTestmentList] = useState([]);
  const [libraryList, setLibraryList] = useState([]);
  const [propertyList, setPropertyList] = useState([]);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const arr = JSON.parse(localStorage.getItem("testamentList"));
    setTestmentList(arr);
  }, []);

  useEffect(() => {
    const arr = JSON.parse(localStorage.getItem("libraryList"));
    setLibraryList(arr);
  }, []);

  useEffect(() => {
    priceAdd();
  }, [isOpen]);

  const priceAdd = () => {
    let a = 0;
    const arr = JSON.parse(localStorage.getItem("propertyList"));
    setPropertyList(arr);

    arr?.map((item) => {
      a += Number(item.price);
    });

    setTotal(a);
  };

  const delPrice = (index) => {
    const list = JSON.parse(localStorage.getItem("propertyList"));

    list?.splice(index, 1);

    localStorage.setItem("propertyList", JSON.stringify(list));

    priceAdd();
  };

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
          <CofferTab tab={tab} setTab={setTab} />
          {tab === 0 ? (
            <>
              {testmentList?.map((item, index) => {
                return (
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
                    onClick={() => navigate(route.testament_detail + `/${index + 1}`)}
                  >
                    <MainText
                      style={{
                        color: "#191919",
                        fontSize: "18px",
                        fontWeight: "600",
                        lineHeight: "23px",
                        marginBottom: "6px",
                      }}
                    >
                      {item.title}
                    </MainText>
                    <MainText
                      style={{
                        color: "#999",
                        fontSize: "14px",
                        fontWeight: "400",
                        lineHeight: "23px",
                      }}
                    >
                      {item.time}
                    </MainText>
                  </div>
                );
              })}
            </>
          ) : tab === 1 ? (
            <>
              {libraryList?.map((item, index) => {
                return (
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
                    onClick={() => navigate(route.testament_detail + `/${index + 1}`)}
                  >
                    <MainText
                      style={{
                        color: "#191919",
                        fontSize: "18px",
                        fontWeight: "600",
                        lineHeight: "23px",
                        marginBottom: "6px",
                      }}
                    >
                      {item.title}
                    </MainText>
                    <MainText
                      style={{
                        color: "#999",
                        fontSize: "14px",
                        fontWeight: "400",
                        lineHeight: "23px",
                      }}
                    >
                      {item.time}
                    </MainText>
                  </div>
                );
              })}
            </>
          ) : (
            <>
              <div style={{ width: "100%", display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
                <MainText
                  style={{
                    minWidth: "50px",
                    color: "#999",
                    fontSize: "20px",
                    fontWeight: "400",
                    lineHeight: "23px",
                  }}
                >
                  합계
                </MainText>
                <MainText
                  style={{
                    color: "#000",
                    fontSize: "20px",
                    fontWeight: "600",
                    lineHeight: "23px",
                  }}
                >
                  {total.toLocaleString("ko-KR")} 원
                </MainText>
              </div>

              {/* list */}
              <div style={{ width: "100%", marginBottom: "60px" }}>
                {propertyList?.map((item, index) => {
                  return (
                    <div key={index} style={{ marginBottom: "10px" }}>
                      <div style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
                        <MainText
                          style={{
                            minWidth: "50px",
                            color: "#999",
                            fontSize: "14px",
                            fontWeight: "400",
                            lineHeight: "23px",
                          }}
                        >
                          {item.title}
                        </MainText>
                        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                          <MainText
                            style={{
                              color: "#999",
                              fontSize: "16px",
                              fontWeight: "600",
                              lineHeight: "23px",
                            }}
                          >
                            {Number(item.price)?.toLocaleString("ko-KR")}원
                          </MainText>
                          <div
                            style={{
                              width: "20px",
                              height: "20px",
                              backgroundColor: "#dddddd",
                              borderRadius: "20px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                            onClick={() => {
                              delPrice(index);
                            }}
                          >
                            <MainText
                              style={{
                                color: "#000",
                                fontSize: "20px",
                                fontWeight: "600",
                                marginTop: "-3px",
                              }}
                            >
                              -
                            </MainText>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div
                style={{
                  width: "30px",
                  height: "30px",
                  backgroundColor: "#dddddd",
                  borderRadius: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={() => {
                  setIsOpen(true);
                }}
              >
                <MainText
                  style={{
                    color: "#000",
                    fontSize: "26px",
                    fontWeight: "600",
                    marginTop: "-3px",
                  }}
                >
                  +
                </MainText>
              </div>
            </>
          )}
        </ContentLayout>
        <FootNav />
      </MainLayout>
      {isOpen ? <CofferModal setIsOpen={setIsOpen} /> : ""}
    </>
  );
}

export default Coffer;

const PageTopWrapper = styled.div.attrs((props) => {})`
  width: 100%;
  height: 180px;
  background: url("/assets/imgs/coffer/coffer-bg.png");
  background-size: cover;
  background-position: center;
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
