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
`;

const HideButton = styled.button`
  background-color: #ffffff;
  color: #000000;
  font-size: 10pt;
  padding: 10px 20px;
  border-radius: 50px;
  position: absolute;
  right: 100px;
  border: none;
`;

const Container = styled.div``;

function InfoContainer(props) {
  const [cnt, setCnt] = useState(0);
  const [text, setText] = useState("댓글 숨기기");

  const handleClick = () => {

    setCnt(cnt + 1);

    if (cnt % 2 === 0) {
      setText("댓글 표시");
      const state = "hidden"
      props.changeVisbility(state)
    } else {
      setText("댓글 숨기기");
      const state = "visibile"
      props.changeVisbility(state)
    }

   
  };

  return (
    <Container>
      <HeartButton>❤️ 102 </HeartButton>
      <HideButton onClick={handleClick}>{text}</HideButton>
    </Container>
  );
}

export default InfoContainer;