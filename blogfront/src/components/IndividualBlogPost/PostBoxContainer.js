import styled from "styled-components";
import data from "./TempData";
import GlobalStyle from "../Fonts/GlobalStyle";

const PostBox = styled.div`
  margin-top: 20px;
  background-color: #f2f2f2;
  margin-left: 20px;
  border-radius: 10px;
  margin: 20px 20px;
  padding: 10px 10px;
`;

const PostBoxTitle = styled.div`
  font-family: KakaoBold;
  font-size: 12pt;
  font-weight: bold;
  margin-left: 20px;
  margin-top: 20px;
  margin: 20px 22px;
`;

const PostItemBox = styled.div`
  background-color: #ffffff;
  margin-left: 20px;
  margin-top: 20px;
  margin: 20px 20px;
  border-radius: 10px;
  padding: 10px 10px;
`;

const PostItemTitle = styled.div`
  font-family: KakaoBold;
  font-size: 12pt;
  font-weight: bold;
  margin-left: 20px;
  margin-top: 10px;
  margin: 10px 20px;
`;

const PostItem = styled.div`
  font-family: KakaoRegular;
  font-size: 10pt;
  color: #000000;
  margin-left: 20px;
  margin: 20px 22px;
`;

const PostItemImage = styled.img`
  width: 200px;
  height: 150px;
  margin-top: 20px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const SummaryItem = styled.div`
  font-family: KakaoBold;
  font-size: 12pt;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
  margin: 20px auto;
`;

const Tags = styled.div`
  display: flex;
  margin-top: 20px;
  margin-left: 20px;
  flex-direction: row;
  margin: 10px 20px;
`;

const TagBox = styled.div`
  background-color: #1efff1;
  color: #000000;
  font-family: KakaoRegular;
  font-size: 10pt;
  padding: 10px 20px;
  border-radius: 50px;
  margin-left: 10px;
`;

function PostBoxContainer() {
  const group = data.reduce((a, i) => {
    const key = i.date;

    if (!a[key]) {
      a[key] = [];
    }

    a[key].push(i);

    return a;
  }, {});

  const render = Object.entries(group).map(([a, i],x ) => (
    <>
      <GlobalStyle />
      <PostBox>
        <PostBoxTitle>{a}일차</PostBoxTitle>
        {i.map((a, y) => (
          <>
            {(x !== 0 || y !== 0) && <SummaryItem>&#8595;{a.transport}</SummaryItem>}
            <PostItemBox>
              <PostItemTitle>{a.place}</PostItemTitle>
              <PostItem>{a.text}</PostItem>
              <PostItemImage src="Incheon.jpg" alt="Incheon" />
            </PostItemBox>
          
            <Tags>
              <TagBox>#런던</TagBox>
              <TagBox>#공항</TagBox>
            </Tags>
          </>
        ))}
      </PostBox>
    </>
  ));

  return <>{render}</>;


}
export default PostBoxContainer;
