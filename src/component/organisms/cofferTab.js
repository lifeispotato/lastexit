import styled from "styled-components";
import MainText from "../../component/atoms/text/mainText";
import { useState } from "react";

function CofferTab(props) {
  const [navList] = useState([
    {
      id: 0,
      title: "편지 유언",
      // navigation: route.home,
    },
    {
      id: 1,
      title: "서재",
      // navigation: route.home,
    },
    {
      id: 2,
      title: "재산",
      // navigation: route.home,
    },
  ]);

  return (
    <CofferTabWrapper>
      {navList.map((item, index) => {
        return (
          <CofferTabList key={index} onClick={() => props.setTab(index)}>
            <CofferTabText
              style={{
                color: `${item.id === props.tab ? "#0A94D1" : ""}`,
                fontWeight: `${item.id === props.tab ? "#600" : ""}`,
                borderBottom: `${item.id === props.tab ? "3px solid #0A94D1" : ""}`,
              }}
            >
              {item.title}
            </CofferTabText>
          </CofferTabList>
        );
      })}
    </CofferTabWrapper>
  );
}

export default CofferTab;

const CofferTabWrapper = styled.div.attrs((props) => {})`
  width: 100%;
  height: 25px;
  border-bottom: 1px solid #e7e7e7;
  background-color: #fff;
  margin-bottom: 20px;
  display: flex;
  align-items: column;
  justify-content: flex-start;
  gap: 20px;
`;

const CofferTabList = styled.div.attrs((props) => {})`
  display: flex;
  cursor: pointer;
`;

const CofferTabText = styled(MainText).attrs((props) => {})`
  color: #767676;
  font-size: 14px;
  font-weight: 400;
`;
