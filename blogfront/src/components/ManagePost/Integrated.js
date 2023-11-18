import React from 'react';
import styled from 'styled-components';
import AddCity from '../EnrollPost/AddCity/Integrated'
import { useState } from 'react';
import AddPlace from '../EnrollPost/AddPlace/Integrated'
import AddTransport from '../EnrollPost/AddTransport/Integrated'
import CategorySelector from './CategorySelector';
import PostInput from './PostBox'

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  display: flex;
  
  background-color: #CF6E36;
  position: relative;
`;



const ScheduleTitle = styled.div`
  font-size: 12pt;
  font-family: KakaoBold;
  color: #FFFFFF;
  font-weight: bold;
  text-decoration: 2px yellow underline;
  margin-left: 120px;
  margin-top: 30px;
`;

const ScheduleBox = styled.div`
  background-color: #FFFFFF;
  color: #000000;
  padding: 20px 30px;
  border-radius: 50px;
  margin: 20px 10px;
  font-family: KakaoBold;
  font-size: 10pt;
  font-weight: bold;
  margin-left: 100px;
  margin-right: 100px;
`;

const PostTitle = styled.div`
  font-size: 12pt;
  font-family: KakaoBold;
  color: #FFFFFF;
  font-weight: bold;
  text-decoration: 2px yellow underline;
  margin-left: 120px;
  margin-top: 20px;
`;

const Postcontainer = styled.div`

width: calc(100vh-7rem);
display:flex;
align-items: center;
justify-content: center;


`


const Posts = styled.div`

  width: 73vw;
  display: flex;
  margin-top: 10px;
  flex-direction: column;
  background-color: #FFFFFF;
  margin: 20px 20px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

const PostBox = styled.div`

  width: 66vw;
  background-color: #F2F2F2;
  margin-left: 20px;
  margin: 20px 20px;
  margin-top: 30px;
  border-radius: 10px;
  position: relative;
  padding: 10px 20px;
`;

const PostBoxTitle = styled.div`
  font-family: KakaoBold;
  font-size: 12pt;
  font-weight: bold;
  margin-left: 20px;
  margin-top: 10px;
  margin: 20px 20px;
`;

const SaveButton = styled.button`
  background-color: #FBFB49;
  color: #000000;
  border-radius: 50px;
  padding: 10px 20px;
  position: absolute;
  top: 22px;
  right: 40px;
  z-index: 1;
  font-family: KakaoBold;
  font-size: 10pt;
  font-weight: bold;
  border: none;
`;

const PostItemBox = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FFFFFF;

  border-radius: 10px;

`;


const Manages = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 15px;
`;

const TagButton = styled.button`
  background-color: #1EFFF1;
  color: #000000;
  font-family: KakaoBold;
  font-weight: bold;
  font-size: 10pt;
  padding: 10px 20px;
  border-radius: 50px;
  position: absolute;
  left: 20px;
  margin-left: 20px;
  border: none;
`;

const ManageButton = styled.button`
  background-color: #FBFB49;
  color: #000000;
  font-family: KakaoBold;
  font-weight: bold;
  font-size: 10pt;
  padding: 10px 20px;
  border: none;
  border-radius: 50px;
  margin-left: 10px;
`;

const AddButton = styled.button`
  background-color: #F9B507;
  color: black;
  padding: 20px 30px;
  justify-content: center;
  border-radius: 50px;
  border: none;
  align-items: center;
  margin-bottom: 20px;
  font-family: KakaoBold;
  font-size: 10pt;
`

function ManagePost() {

  const [click, setClick] = useState(false);
  const [click2, setClick2] = useState(false);
  const [click3, setClick3] = useState(false);

  const closeWindow = (val) => {

    setClick(val)


  }

  const closeWindow2 = (val) => {

    setClick2(val)


  }
  const closeWindow3 = (val) => {

    setClick3(val)
  }

  return (
    <Container>

      <CategorySelector />

      <ScheduleTitle>SCHEDULE</ScheduleTitle>
      <ScheduleBox>Europe 2019.07.07 ~ 2019.08.13 영국 아일랜드 프랑스 스위스 오스트리아 체코</ScheduleBox>
      <PostTitle>POST</PostTitle>
      <Postcontainer>
      <Posts>
        <PostBox>
          <PostBoxTitle>1일차 인천 - 런던</PostBoxTitle>
          <SaveButton>저장</SaveButton>
          <PostItemBox>

            <PostInput />
 
          </PostItemBox>
          <Manages>
            <TagButton>#태그 추가</TagButton>
            <ManageButton onClick={() => {

              setClick3(true)
              setClick(false)
              setClick2(false)

            }}>이동수단 추가</ManageButton>
            <ManageButton onClick={() => {
              setClick2(true)
              setClick(false)
              setClick3(false)
            }}>장소 추가</ManageButton>

          </Manages>
        </PostBox>
        <AddButton onClick={() => {

          setClick(true)
          setClick2(false)
          setClick3(false)

        }}>일정 추가하기</AddButton>
        {click && <AddCity closeWindow={closeWindow} />}
        {click2 && <AddPlace closeWindow2={closeWindow2} />}
        {click3 && <AddTransport closeWindow3={closeWindow3}/>}
      </Posts>
      </Postcontainer>
    </Container>
  );
}

export default ManagePost;