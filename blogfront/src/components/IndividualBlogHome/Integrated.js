import React from 'react';
import styled from 'styled-components';
import CategoryBlog from './CategoryBlog';
import PopularBlog from './PopularBlog';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #CF6E36;

  overflow-x: hidden;
  width: calc(100vw - 8.1rem);
`;

const SiteName = styled.h1`
 font-family: KakaoBold;
 font-size: 50pt;
 color: #FAF4C0;
 margin-top: 10px;
 margin-left: 20px;
 font-weight: bold;
 width: calc(100vw - 8rem)
`;

const BlogDescription = styled.div`
  font-size: 12pt;
  font-family: KakaoRegular;
  color: #FFFFFF;
  margin-left: 20px;
  margin-top: 5px;
  width: calc(100vw - 7rem)
`;





function IndividualBlogHome() {



  return (

    <Container>

      <SiteName>Trip Again</SiteName>
      <BlogDescription>좌충우돌 세계일주 여행기</BlogDescription>


      <CategoryBlog />
  
      <PopularBlog />


    </Container>

  );
};

export default IndividualBlogHome;