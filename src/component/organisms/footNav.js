import styled from "styled-components";
import MainText from "../../component/atoms/text/mainText";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { route } from "../../routes/route";

function FootNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const [navList] = useState([
    {
      title: "홈",
      src: "/assets/imgs/footNav/home-default.svg",
      ac_src: "/assets/imgs/footNav/home-ac.svg",
      navigation: route.home,
    },
    {
      title: "금고",
      src: "/assets/imgs/footNav/lock-default.svg",
      ac_src: "/assets/imgs/footNav/lock-ac.svg",
      navigation: route.coffer,
    },
    {
      title: "서재",
      src: "/assets/imgs/footNav/library-default.svg",
      navigation: route.library,
    },
    {
      title: "전문가",
      src: "/assets/imgs/footNav/expert-default.svg",
      navigation: route.expert,
    },
  ]);

  return (
    <FootNavWrapper>
      {navList.map((item, index) => {
        return (
          <Footer onClick={() => navigate(item.navigation)} key={index}>
            <img
              style={{ width: "24px", height: "24px" }}
              src={location.pathname === item.navigation ? item.ac_src : item.src}
              alt=""
            />
            <FooterText>{item.title}</FooterText>
          </Footer>
        );
      })}
    </FootNavWrapper>
  );
}

export default FootNav;

const FootNavWrapper = styled.div.attrs((props) => {})`
  width: 100%;
  height: 91px;
  border-top: 1px solid #e6e8eb;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: flex-start;
  padding-top: 10px;
  justify-content: space-around;
  background-color: #fff;
`;

const Footer = styled.div.attrs((props) => {})`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;
  cursor: pointer;
`;

const FooterText = styled(MainText).attrs((props) => {})`
  color: #999;
  font-size: 13px;
  font-weight: 500;
  line-height: 16.5px; /* 126.923% */
`;
