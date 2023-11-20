import React from "react";
import styled from "styled-components";
import AddCity from "../EnrollPost/AddCity/Integrated";
import { useState } from "react";
import AddPlace from "../EnrollPost/AddPlace/Integrated";
import AddTransport from "../EnrollPost/AddTransport/Integrated";
import CategorySelector from "./CategorySelector";
import PostInput from "./PostBox";
import TitleBox from "./TitleBox";

const Container = styled.div`
  height: 100vh;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  display: flex;
  background-color: #cf6e36;
`;

const PostTitle = styled.div`
  font-size: 12pt;
  font-family: KakaoBold;
  color: #ffffff;
  font-weight: bold;
  text-decoration: 2px yellow underline;
  margin-left: 120px;
  margin-top: 20px;
`;

const Postcontainer = styled.div`
  padding: 20px;
  width: calc(100vh-7rem);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column; 
`;

const Posts = styled.div`
  width: 75vw;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
`;

const PostBox = styled.div`
  width: 70vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f2f2f2;
  border-radius: 10px;
  padding: 15px;
`;

const PostBoxTitle = styled.div`
  width: 70vw;
  text-align: start;
  padding: 10px;
  font-family: KakaoBold;
  font-size: 12pt;
  font-weight: bold;
  margin-bottom: 10px;
`;

const SaveButton = styled.button`
  background-color: #fbfb49;
  color: #000000;
  border-radius: 50px;
  padding: 10px;
  width: 5rem;
  height: 35px;
  font-family: KakaoBold;
  font-size: 10pt;
  font-weight: bold;
  border: none;
`;

const PostItemBox = styled.div`
  width: 65vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  margin-bottom: 3vh;
  border-radius: 10px;
  padding: 10px;
`;

const Manages = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 15px;
`;

const TagButton = styled.button`
  background-color: #1efff1;
  color: #000000;
  font-family: KakaoBold;
  font-weight: bold;
  font-size: 10pt;
  padding: 10px 20px;
  border-radius: 50px;
  margin-left: 20px;
  border: none;
`;

const ManageButton = styled.button`
  background-color: #fbfb49;
  color: #000000;
  font-family: KakaoBold;
  font-weight: bold;
  font-size: 10pt;
  width: 8rem;
  padding: 14px;
  border: none;
  border-radius: 50px;
  margin-left: 10px;
`;

const AddButton = styled.button`
  background-color: #f9b507;
  color: black;
  padding: 20px;
  justify-content: center;
  border-radius: 50px;
  border: none;
  align-items: center;
  font-family: KakaoBold;
  font-size: 10pt;
  margin-top: 10px;
`;

const PlaceTitle = styled.div`
  text-align: left;
  display: flex;
  width: 60vw;
  margin-top: 1rem;
`;

const HeaderBox = styled.div`
  display: flex;
  width: 60vw;
`;

const PostButton = styled.div`

display: flex;
flex-direction: row;
width: 75vw;
align-items: center;
justify-content: center;


`
const EmptyBox = styled.div`

width: 20vw;


`

function ManagePost() {
  const [click, setClick] = useState(false);
  const [click2, setClick2] = useState(false);
  const [click3, setClick3] = useState(false);
  const [container, SetContainer] = useState([{}]);
  const [boxes, setBoxes] = useState([]);
  const [city, setCty] = useState("")
  const [place, setPl] = useState("")

  const closeWindow = (val) => {
    setClick(val);
  };

  const closeWindow2 = (val) => {
    setClick2(val);
  };
  const closeWindow3 = (val) => {
    setClick3(val);
  };

  const addBox = () => {
    setBoxes([...boxes, {}]);
  };

  const addContainer = () => {
    SetContainer([...container, {}]);
  };

  const removeBox = (index) => {
    const newBoxes = [...boxes];
    newBoxes.splice(index, 1);
    setBoxes(newBoxes);
  };

  const removeContainer = (index) => {

    const newContainer = [...container]
    newContainer.splice(index, 1)
    SetContainer(newContainer)


  }

  const setCity = (val) => {

    const c = val;
    setCty(c);

  }

  const setPlace = (val)=> {

    const p = val;
    setPl(p)

  }

  return (
    <Container>
      <CategorySelector />
      <TitleBox />

      <PostTitle>POST</PostTitle>

      {container.map(function (c, i) {
        return (
          <Postcontainer>
            <Posts>
              <PostBox>
                <HeaderBox>
                  <PostBoxTitle>{i+1}일차 {city}</PostBoxTitle>
                  <SaveButton>저장</SaveButton>
                </HeaderBox>

                {boxes.map(function (b, i) {
                  return (
                    <div key={i}>
                      <PostItemBox>
                        <PlaceTitle>{place}</PlaceTitle>
                        <PostInput />
                      </PostItemBox>
                    </div>
                  );
                })}

                <Manages>
                  <TagButton>#태그 추가</TagButton>
                  <ManageButton
                    onClick={() => {
                      setClick3(true);
                      setClick(false);
                      setClick2(false);
                    }}
                  >
                    이동수단 추가
                  </ManageButton>
                  <ManageButton
                    onClick={() => {
                      setClick2(true);
                      setClick(false);
                      setClick3(false);
                    }}
                  >
                    장소 추가
                  </ManageButton>
                  <ManageButton
                    onClick={removeBox}
                  >
                    장소 삭제
                  </ManageButton>
                </Manages>
              </PostBox>

              {click && (
                <AddCity
                  closeWindow={closeWindow}
                  addContainer={addContainer}
                  setCity={setCity}
                />
              )}
              {click2 && (
                <AddPlace closeWindow2={closeWindow2} addBox={addBox} setPlace={setPlace}/>
              )}
              {click3 && <AddTransport closeWindow3={closeWindow3} />}
            </Posts>
            <PostButton>

              <AddButton
                onClick={() => {
                  setClick(true);
                  setClick2(false);
                  setClick3(false);
                }}

                
              >
                일정 추가하기
              </AddButton>

                <EmptyBox />

              <AddButton
                onClick={removeContainer}>
                일정 제거하기
              </AddButton>
            </PostButton>

          </Postcontainer>



        );
      })}
    </Container>
  );
}

export default ManagePost;