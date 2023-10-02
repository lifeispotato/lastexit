import MainLayout from "../../component/atoms/layout/mainLayout";
import PageTop from "../../component/organisms/pageTop";
import { useState } from "react";
import Modal from "../../component/templates/modal";
import FootBtn from "../../component/organisms/footBtn";

function Expert() {
  const [modalOpen, setModalOpen] = useState(false);
  const [menu, setMenu] = useState(-1);

  const [list] = useState([
    {
      title: "영정사진",
      src: "/assets/imgs/expert/001.png",
      id: 0,
    },
    {
      title: "상속/증여",
      src: "/assets/imgs/expert/002.png",
      id: 1,
    },
    {
      title: "요양원",
      src: "/assets/imgs/expert/003.png",
      id: 2,
    },
    {
      title: "상조회사",
      src: "/assets/imgs/expert/004.png",
      id: 3,
    },
  ]);

  return (
    <>
      <MainLayout>
        <PageTop
          bg={"assets/imgs/expert/expert-bg.png"}
          title={"전문가"}
          content={<>전문가의 도움이 필요하신가요?</>}
          onClick={() => setModalOpen(true)}
        />
        <div className="expert-wrapper">
          <div className="expert-nav-wrapper">
            <div className="expert-nav-list">
              {list.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="expert-list"
                    style={{ position: "relative", border: `${menu === item.id ? "4px solid #0694d1" : ""}` }}
                    onClick={() => (menu === index ? setMenu(-1) : setMenu(item.id))}
                  >
                    <img className="expert-ico" src={item.src} alt="" />
                    <span className="expert-list-title" style={{ color: "#191919" }}>
                      {item.title}
                    </span>
                    {menu === index ? <div className="expert-list-check">✓</div> : ""}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <FootBtn title={"상담하고 싶어요"} />
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
