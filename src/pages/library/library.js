import MainLayout from "../../component/atoms/layout/mainLayout";
import MainText from "../../component/atoms/text/mainText";
import PageTop from "../../component/organisms/pageTop";
import ContentLayout from "../../component/atoms/layout/contentLayout";
import Modal from "../../component/templates/modal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { route } from "../../routes/route";

function Library() {
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <MainLayout>
        <PageTop
          qa={true}
          bg={"/assets/imgs/library/library-bg.png"}
          title={"서재"}
          content={
            <>
              가족, 지인 그리고 나에게 전하고 싶은
              <br />
              메세지와 진심을 미리 남길 수 있습니다
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
            onClick={() => navigate(route.library_detail)}
          >
            <MainText
              style={{ color: "#191919", fontSize: "18px", fontWeight: "600", lineHeight: "23px", marginBottom: "6px" }}
            >
              소중했던 하루 하루
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
          onClick={() => navigate(route.library_add)}
        />
      </MainLayout>
      {modalOpen ? (
        <Modal
          title={"유언"}
          content={
            "가족이나 친구 또는 나에게 전하고 싶은 글을 미리 남겨둘 수  있습니다. 모든 내용은 간단한 메모를 남기듯 편하게 작성해 보시고 장기적으로 보존할 내용은 안전한 개인금고에  보관하십시오."
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

export default Library;
