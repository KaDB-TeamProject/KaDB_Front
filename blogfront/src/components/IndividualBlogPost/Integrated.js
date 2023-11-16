import React, { useState } from "react";
import styled from "styled-components";
import CommentBoxContainer from "./CommentBoxContainer";
import PostBoxContainer from "./PostBoxContainer";
import TitleBoxContainer from "./TitleBoxContainer";
import InfoContainer from "./InfoContainer";

const Container = styled.div`
width: calc(100vw - 8.1rem);
  display: flex;
  flex-direction: column;
  background-color: #cf6e36;
`;

const SiteName = styled.h1`
  font-family: KakaoBold;
  font-size: 50pt;
  color: #faf4c0;
  margin-top: 10px;
  margin-left: 20px;
  font-weight: bold;
`;

const BlogDescription = styled.div`
  font-size: 12pt;
  font-family: KakaoRegular;
  color: #ffffff;
  margin-left: 20px;
  margin-top: 5px;
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

const Posts = styled.div`
  display: flex;
  margin-top: 10px;
  flex-direction: column;
  background-color: #ffffff;
  margin: 20px 20px;
  margin-left: 100px;
  margin-right: 100px;
  border-radius: 10px;
  padding: 10px 10px;
`;



const CommentBox = styled.div`
  width: 75vw;
  background-color: #fef0f9;
  border-radius: 10px;
  margin: 10px 20px;
  margin-left: 100px;
  margin-right: 100px;
  padding: 8px 10px;
  display: flex;
  flex-direction: column;
  visibility: ${(props) => props.visibility};
`;

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin: 8px 10px;
`;



function IndividualBlogPost() {

  const [visbility, setVisibility] = useState("visible");


  const changeVisbility = (value) => {

    setVisibility(value)

  }




  return (
    <Container>
      <SiteName>Trip Again</SiteName>
      <BlogDescription>좌충우돌 세계일주 여행기</BlogDescription>

      <TitleBoxContainer />

      <PostTitle>POST</PostTitle>
      <Posts>
        <PostBoxContainer />
      </Posts>

      <InfoContainer changeVisbility={changeVisbility} />

      <CommentBox visibility={visbility}>
        <CommentContainer>
          <CommentBoxContainer />
        </CommentContainer>
      </CommentBox>
    </Container>
  );
}

export default IndividualBlogPost;
