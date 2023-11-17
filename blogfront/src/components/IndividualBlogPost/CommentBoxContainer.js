import styled from "styled-components";
import comments from './TempComment'

const Comments = styled.div`

  height: 18vh;
  background-color: #ffffff;
  border-radius: 20px;
  padding: 10px 10px;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  border: 2px solid black;
`;

const Profiles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 10vw;

`;

const Profile = styled.img`
  weight: 70px;
  height: 70px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
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
  width: 55vw;
`;

const HeartItem = styled.div`

  height: 18vh;
  position: absolute;
  right: 100px;
  margin-right: 40px;
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 5vw;
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

      {comments.map(function (a) {

        return (

          <Comments>
            <Profiles>
              <Profile src={a.profile} />
              <Nickname>{a.nickname}</Nickname>
            </Profiles>
            <CommentItem>
              {a.text}
            </CommentItem>
            <HeartItem>
              <HeartIcon>❤️</HeartIcon>
              <HeartCount>{a.like}</HeartCount>
            </HeartItem>
          </Comments>



        )




      })}


    </>
  );
}
export default CommentBoxContainer;