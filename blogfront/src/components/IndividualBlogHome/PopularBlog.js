import styled from "styled-components"
import { useNavigate } from "react-router-dom";

const Container = styled.div`

width: calc(100vw - 7rem);
height: 60vh;
display: flex;
flex-direction: column;
align-items: center;

`

const PopularPostTitle = styled.div`
width: 70vw;
  font-size: 12pt;
  font-family: KakaoBold;
  color: #FFFFFF;
  font-weight: bold;
  text-decoration: 2px yellow underline;
  margin-left: 80px;
  margin-top: 40px;
`;

const PopularPostsBox = styled.div`
width: 70vw;
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
width: 20vw;
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



function PopularBlog() {

    const navi = useNavigate();

    return (



        <Container>


            <PopularPostTitle>Popular Post</PopularPostTitle>
            <PopularPostsBox>
                <PopularPost onClick={() => { navi("/blogpost") }}>
                    <PostImage src="유럽.jpg" alt="Europe" />
                    <PostTags>#UK #FRANCE</PostTags>
                </PopularPost>
                <PopularPost onClick={() => { navi("/blogpost") }}>
                    <PostImage src="뉴질랜드.jpg" alt="New Zealand" />
                    <PostTags>#NEW ZEALAND</PostTags>
                </PopularPost>
                <PopularPost onClick={() => { navi("/blogpost") }}>
                    <PostImage src="싱가포르.jpg" alt="Singapore" />
                    <PostTags>#SINGAPORE</PostTags>
                </PopularPost>
            </PopularPostsBox>
        </Container>
    )


}
export default PopularBlog;