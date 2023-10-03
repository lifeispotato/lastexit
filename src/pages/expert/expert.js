import MainLayout from "../../component/atoms/layout/mainLayout";
import PageTop from "../../component/organisms/pageTop";
import { useState } from "react";
import Modal from "../../component/templates/modal";
import FootBtn from "../../component/organisms/footBtn";
import { route } from "../../routes/route";
import { useNavigate } from "react-router-dom";

function Expert() {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);

  const [list] = useState([
    {
      title: "영정사진",
      src: "/assets/imgs/expert/001.png",
      navigate: route.expert_photo,
    },
    {
      title: "상속/증여",
      src: "/assets/imgs/expert/002.png",
      navigate: route.expert_inheritance,
    },
    {
      title: "요양원",
      src: "/assets/imgs/expert/003.png",
      navigate: route.expert_nursing,
    },
    {
      title: "상조회사",
      src: "/assets/imgs/expert/004.png",
      navigate: route.expert_funeral,
    },
  ]);

  return (
    <>
      <MainLayout style={{ minHeight: "unset", height: "auto" }}>
        <PageTop
          qa={true}
          bg={"assets/imgs/expert/expert-bg.png"}
          title={"전문가"}
          content={
            <>
              전문가의 도움이 필요하신가요?
              <br />한 번의 클릭으로 웰다잉 전문가들을 만나보세요
            </>
          }
          onClick={() => setModalOpen(true)}
          goBackClick={"home"}
        />
        <div className="expert-wrapper">
          <div className="expert-nav-wrapper">
            <div className="expert-nav-list">
              {list.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="expert-list"
                    style={{ position: "relative" }}
                    onClick={() => navigate(item.navigate)}
                  >
                    <img className="expert-ico" src={item.src} alt="" />
                    <span className="expert-list-title" style={{ color: "#191919" }}>
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <FootBtn title={"상담하고 싶어요"} onClick={() => navigate(route.contact)} />
      </MainLayout>
      {modalOpen ? (
        <Modal
          title={"전문가"}
          content={"라스트엑시트에서 회원분들을 위한 웰다잉 전문가를 소개해드립니다."}
          onClick={() => setModalOpen(false)}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default Expert;
