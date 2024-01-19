import MainLayout from "../../component/atoms/layout/mainLayout";
import MainText from "../../component/atoms/text/mainText";
import ContentLayout from "../../component/atoms/layout/contentLayout";
import DetailGoBack from "../../component/molecules/detailGoBack";
import { useNavigate, useParams } from "react-router-dom";
import { route } from "../../routes/route";
import { useEffect, useState } from "react";

function TestamentDetail() {
  const { id } = useParams();
  const itemIndex = id - 1;

  const navigate = useNavigate();

  const [list, setList] = useState([]);

  useEffect(() => {
    let arr = JSON.parse(localStorage.getItem("testamentList"));
    setList(arr);
  }, []);

  const delFunc = () => {
    const copyArr = [...list];

    copyArr.splice(itemIndex, 1);

    localStorage.setItem("testamentList", JSON.stringify(copyArr));
    navigate(-1);
  };

  return (
    <>
      <MainLayout>
        <DetailGoBack title={"편지 유언 상세보기"} style={{ marginBottom: "20px" }} />
        <ContentLayout style={{ alignItems: "flex-start" }}>
          <MainText
            style={{ fontSize: "20px", fontWeight: "600", lineHeight: "26px", color: "#191919" }}
          >
            {list[itemIndex]?.title}
          </MainText>
          <div
            style={{
              width: "100%",
              borderBottom: "1px solid #e7e7e7",
              margin: "16px 0px 20px 0px",
            }}
          ></div>
          <MainText
            style={{
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "25px",
              color: "#191919",
              minHeight: "205px",
            }}
          >
            {list[itemIndex]?.content}
          </MainText>
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: "24px",
            }}
          >
            <MainText
              style={{ fontSize: "14px", fontWeight: "500", lineHeight: "140%", color: "#999999" }}
              onClick={() => navigate(route.testament_edit + `/${id}`)}
            >
              수정
            </MainText>
            <MainText
              style={{ fontSize: "14px", fontWeight: "500", lineHeight: "140%", color: "#999999" }}
              onClick={delFunc}
            >
              삭제
            </MainText>
          </div>
          <div
            style={{
              width: "100%",
              borderBottom: "1px solid #e7e7e7",
              margin: "16px 0px 20px 0px",
            }}
          ></div>
        </ContentLayout>
      </MainLayout>
    </>
  );
}

export default TestamentDetail;
