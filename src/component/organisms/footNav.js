import styled from "styled-components";
import MainText from "../../component/atoms/text/mainText";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { route } from "../../routes/route";

function FootNav() {
  const navigate = useNavigate();
  const [navList] = useState([
    {
      title: "홈",
      src: "/assets/imgs/footNav/home-default.svg",
      navigation: route.home,
    },
    {
      title: "홈",
      src: "/assets/imgs/footNav/home-default.svg",
      navigation: route.home,
    },
    {
      title: "홈",
      src: "/assets/imgs/footNav/home-default.svg",
      navigation: route.home,
    },
    {
      title: "홈",
      src: "/assets/imgs/footNav/home-default.svg",
      navigation: route.home,
    },
    {
      title: "홈",
      src: "/assets/imgs/footNav/home-default.svg",
      navigation: route.home,
    },
  ]);

  return (
    <FootNavWrapper>
      {navList.map((item, index) => {
        return (
          <Footer onClick={() => navigate(item.navigation)} key={index}>
            <img style={{ width: "24px", height: "24px" }} src={item.src} alt="" />
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
`;

const FooterText = styled(MainText).attrs((props) => {})`
  color: #999;
  font-size: 13px;
  font-weight: 500;
  line-height: 16.5px; /* 126.923% */
`;
