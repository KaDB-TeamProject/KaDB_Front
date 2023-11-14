import styled from "styled-components";
const Comments = styled.div`
  background-color: #ffffff;
  border-radius: 20px;
  padding: 10px 10px;
  margin: 8px 8px;
  display: flex;
  flex-direction: row;
  border: 2px solid black;
`;

const Profiles = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-left: 10px;
  align-items: center;
`;

const Profile = styled.img`
  weight: 70px;
  height: 70px;
  border-radius: 50%;
  margin: 10px 10px;
  border: 2px solid black;
`;

const Nickname = styled.div`
  margin: 5px 15px;
  font-family: KakaoRegular;
  font-size: 8pt;
  margin-bottom: 10px;
`;

const CommentItem = styled.div`
  color: #000000;
  font-family: KakaoRegular;
  font-size: 10pt;
  margin: 50px 20px;
`;

const HeartItem = styled.div`
  position: absolute;
  right: 100px;
  margin-right: 40px;
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeartIcon = styled.div`
  margin-top: 8px;
  margin-right: 10px;
`;

const HeartCount = styled.div`
  margin-top: 5px;
  margin-right: 10px;
  font-family: KakaoRegular;
  font-size: 9pt;
`;

function CommentBoxContainer() {
  return (
    <>
      <Comments>
        <Profiles>
          <Profile src="Profile1.jpg" alt="Profile1" />
          <Nickname>무당이</Nickname>
        </Profiles>
        <CommentItem>
          너무 유용한 게시물이었어요. 추천해주신 음식점 가서 너무 맛있게 먹고
          왔습니다.
        </CommentItem>
        <HeartItem>
          <HeartIcon>❤️</HeartIcon>
          <HeartCount>3</HeartCount>
        </HeartItem>
      </Comments>
      <Comments>
        <Profiles>
          <Profile src="Profile2.jpg" alt="Profile2" />
          <Nickname>피치</Nickname>
        </Profiles>
        <CommentItem>
          잘 봤습니다! 정말 좋은 글이네요 다음에도 좋은 글 부탁드려요
        </CommentItem>
        <HeartItem>
          <HeartIcon>❤️</HeartIcon>
          <HeartCount>10</HeartCount>
        </HeartItem>
      </Comments>
      <Comments>
        <Profiles>
          <Profile src="Profile3.jpg" alt="Profile3" />
          <Nickname>루피</Nickname>
        </Profiles>
        <CommentItem>
          다음에 여행 갈 때 한번 가봐야겠어요! 추천합니다
        </CommentItem>
        <HeartItem>
          <HeartIcon>❤️</HeartIcon>
          <HeartCount>15</HeartCount>
        </HeartItem>
      </Comments>
    </>
  );
}
export default CommentBoxContainer;
