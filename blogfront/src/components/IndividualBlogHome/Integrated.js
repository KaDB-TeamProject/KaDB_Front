import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #CF6E36;
`;

const SiteName = styled.h1`
 font-family: KakaoBold;
 font-size: 50pt;
 color: #FAF4C0;
 margin-top: 10px;
 margin-left: 20px;
 font-weight: bold;
`;

const BlogDescription = styled.div`
  font-size: 12pt;
  font-family: KakaoRegular;
  color: #FFFFFF;
  margin-left: 20px;
  margin-top: 5px;
`;


const CategoryTitle = styled.div`
  font-size: 12pt;
  font-family: KakaoBold;
  color: #FFFFFF;
  font-weight: bold;
  text-decoration: 2px yellow underline;
  margin-left: 80px;
  margin-top: 40px;
`;


const CategoryBox = styled.div`
  background-color: #FFFFFF;
  border-radius: 5px;
  margin: 20px 80px;
  display: flex;
  flex-direction: row;
  margin-left: 80px;
`;

const Categories = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: 10px;
  margin-top: 20px;
`;

const CategoryItem = styled.div`
  font-size: 11pt;
  font-family: KakaoBold;
  font-weight: bold;
  text-shadow: 2px 2px 2px gray;
  margin-left: 20px;
`;

const PostItem = styled.div`
  font-size: 9pt;
  font-family: KakaoRegular;
  margin-left: 22px;
  margin: 20px;
`;

const PopularPostTitle = styled.div`
  font-size: 12pt;
  font-family: KakaoBold;
  color: #FFFFFF;
  font-weight: bold;
  text-decoration: 2px yellow underline;
  margin-left: 80px;
  margin-top: 40px;
`;

const PopularPostsBox = styled.div`
  background-color: #FFFFFF;
  border-radius: 5px;
  margin: 20px 80px;
  padding: 20px 10px;
  flex: 1;
  display: flex;
  flex-direction: row;
  margin-left: 80px;
`;

const PopularPost = styled.div`
  background-color: #CBCBCB;
  padding: 20px 20px;
  border-radius: 3px;
  margin: 20px 50px;
  margin-left: 40px;
`;

const PostImage = styled.img`
  width: 250px;
  height: 200px;
  margin: 20px 20px;
  padding: 10px 20px;
  margin-top: 10px;
  margin-left: 10px;
`;

const PostTags = styled.div`
  font-size: 9pt;
  font-family: KakaoRegular;
  color: #000000;
  margin-left: 10px;
`;

function IndividualBlogHome() {

const navi = useNavigate();

  return (

    <Container>
      <div>
        <div>
          <SiteName>Trip Again</SiteName>
          <BlogDescription>좌충우돌 세계일주 여행기</BlogDescription>
        </div>
        <div>
        <CategoryTitle>CATEGORY</CategoryTitle>
        <CategoryBox>
          <Categories>
            <CategoryItem>유럽 여행</CategoryItem>
            <PostItem>
              2023.05.02~2023.05.13
              영국, 아일랜드, 프랑스, 스위스, 오스트리아, 체코
            </PostItem>
            <PostItem>
              2023.01.12~2023.02.03
              아랍에미레이트 영국 스페인 프랑스 스위스 이탈리아
            </PostItem>
            <PostItem>
              2024.03.02~2024.03.15
              영국 스위스 독일
            </PostItem>
          </Categories>
          <Categories>  
            <CategoryItem>아시아 여행</CategoryItem>
            <PostItem>
              2010.10.10~2010.10.13
              일본
            </PostItem>
            <PostItem>
              2015.07.12~2015.07.17
              필리핀
            </PostItem>
            <PostItem>
              2016.12.12~2016.12.16
              싱가포르
            </PostItem>
            <PostItem>
              2016.08.25~2019.08.31
              대만
            </PostItem>
          </Categories>
          <Categories>
            <CategoryItem>오세아니아 여행</CategoryItem>
            <PostItem>
              2007.10.12~2007.10.22
              뉴질랜드
            </PostItem>
          </Categories>
          <Categories>
            <CategoryItem>아메리카 여행</CategoryItem>
            <PostItem>
              2011.02.03~2011.03.02
              미국 캐나다
            </PostItem>
          </Categories>
        </CategoryBox>
      </div>
      <div>
      <PopularPostTitle>Popular Post</PopularPostTitle>
      <PopularPostsBox>
        <PopularPost onClick={()=>{navi("/blogpost")}}>
          <PostImage src="유럽.jpg" alt="Europe" />
          <PostTags>#UK #FRANCE</PostTags>
        </PopularPost>
        <PopularPost onClick={()=>{navi("/blogpost")}}>
          <PostImage src="뉴질랜드.jpg" alt="New Zealand" />
          <PostTags>#NEW ZEALAND</PostTags>
        </PopularPost>
        <PopularPost onClick={()=>{navi("/blogpost")}}>
          <PostImage src="싱가포르.jpg" alt="Singapore" />
          <PostTags>#SINGAPORE</PostTags>
        </PopularPost>
      </PopularPostsBox>
      </div>
      </div>
    </Container>

  );
};

export default IndividualBlogHome;