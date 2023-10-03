import MainLayout from "../../component/atoms/layout/mainLayout";
import MainText from "../../component/atoms/text/mainText";
import PageTop from "../../component/organisms/pageTop";
import ContentLayout from "../../component/atoms/layout/contentLayout";
import Modal from "../../component/templates/modal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { route } from "../../routes/route";

function Testament() {
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <MainLayout>
        <PageTop
          qa={true}
          bg={"/assets/imgs/testament/testament-bg.png"}
          title={"유언"}
          content={
            <>
              법적 효력이 있는 유언장을
              <br />
              작성하고 보관할 수 있습니다
            </>
          }
          onClick={() => {
            setModalOpen(true);
          }}
          goBackClick={"home"}
        />
        <ContentLayout>
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
          <MainText
            style={{ color: "#999", textAlign: "center", fontSize: "14px", fontWeight: "400", lineHeight: "22px" }}
          >
            개인금고에 저장한 게시물은
            <br />
            [개인금고] 메뉴에서 확인해주세요!
          </MainText>
        </ContentLayout>
        <img
          src="/assets/imgs/page-add-btn.svg"
          style={{ position: "absolute", bottom: "45px", right: "0px" }}
          alt=""
          onClick={() => navigate(route.testament_add)}
        />
      </MainLayout>
      {modalOpen ? (
        <Modal
          title={"유언"}
          content={
            "유언방식을 알아보고 유언장 문건을 자동 생성하여 법적효력이 있는 유언장을 작성할 수 있습니다. 모든 내용은 간단한 메모를 남기듯 편하게 작성해  보시고 장기적으로 보존할 내용은 안전한 개인금고에  보관하십시오."
          }
          onClick={() => {
            setModalOpen(false);
          }}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default Testament;
