import styled from "styled-components";
import { useState } from "react";

const HeartButton = styled.button`  

  background-color: #ffd9fa;
  font-family: KakaoRegular;
  font-size: 10pt;
  padding: 10px 20px;
  border-radius: 50px;
  margin-left: 100px;
  color: #000000;
  border: none;
  width: 10vw
`;

const HideButton = styled.button`
  background-color: #ffffff;
  color: #000000;
  font-size: 10pt;
  padding: 10px 20px;
  border-radius: 50px;
  position: absolute;
  border: none;
  width: 10vw
`;

const Container = styled.div`

width: calc(100vw - 8.1rem);
display: flex;
flex-direction: row;


`;

const EmptyBox = styled.div`

width: 65vw;

`
const HeartContainer = styled.div`

width: 8vw

`

const HideContainer = styled.div`

width: 8vw

`

function InfoContainer(props) {

  let [like, setLike] = useState(10)
  const [cnt, setCnt] = useState(0);
  const [text, setText] = useState("댓글 숨기기");
  const [clickState, setClickState] = useState(false)

  const handleClick = () => {

    console.log("ededed")

    setCnt(cnt + 1);

    if (cnt % 2 === 0) {
      setText("댓글 표시");
      const state = "hidden"
      props.changeVisbility(state)
    }
    else {
      setText("댓글 숨기기");
      const state = "visibile"
      props.changeVisbility(state)
    }


  };

  const updateLike = () => {

    console.log("ededed")

    if (clickState) {

      const i = like + 1;

      setLike(i)
      setClickState(false)

    }
    else {

      const i = like - 1;

      setLike(i)
      setClickState(true)


    }


  }
  

  return (
    <Container>
      <HeartContainer>
        <HeartButton onClick={updateLike}>❤️ {like} </HeartButton>
      </HeartContainer>
      <EmptyBox />
      <HideContainer>
        <HideButton onClick={handleClick}>{text}</HideButton>
      </HideContainer>
    </Container>
  );
}

export default InfoContainer;