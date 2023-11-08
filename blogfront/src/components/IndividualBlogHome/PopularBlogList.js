import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import img from "./Source/test.png";

const PopularPost = styled.div`
  width: 15vw;
  height: 20vw;
  background-color: #cbcbcb;
  padding: 20px 20px;
  border-radius: 3px;
  margin: 20px 50px;
  margin-left: 40px;
`;

const PostImage = styled.img`
  width: 10vw;
  height: 10vw;
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

function PopularBlogList() {
  const navi = useNavigate();

  return (
    <>
      <PopularPost
        onClick={() => {
          navi("/blogpost");
        }}
      >
        <PostImage src={img} alt="Europe" />
        <PostTags>#England #FRANCE</PostTags>
      </PopularPost>
      <PopularPost
        onClick={() => {
          navi("/blogpost");
        }}
      >
        <PostImage src={img} alt="New Zealand" />
        <PostTags>#NEW ZEALAND</PostTags>
      </PopularPost>
      <PopularPost
        onClick={() => {
          navi("/blogpost");
        }}
      >
        <PostImage src={img} alt="Singapore" />
        <PostTags>#SINGAPORE</PostTags>
      </PopularPost>
    </>
  );
}
export default PopularBlogList;
