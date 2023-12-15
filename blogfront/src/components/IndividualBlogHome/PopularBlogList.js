import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import data from './TempPopularPost'

const PopularPost = styled.div`
  width: 15vw;
  height: 30vh;
  background-color: #FEE1E8;
  border-radius: 15px;
  margin: 2vw;
  align-items: center;
  display:flex;
  flex-direction: column;
  transition: transform 0.3s, z-index 0.3s;
  position: relative;


  &:hover {
    transform: translateY(10vh);
    position: absolute;
    z-index: 1;
    width: 15vw;
    height: 40vh;

  }
`;



const PostTags = styled.div`
height: 10vh;
width: 15vw;
padding-top: 6%;
  font-size: 9pt;
  font-family: KakaoRegular;
  color: #000000;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const ImageBox = styled.div`

height: 20vh;
width: 15vw;
display: flex;
align-items: center;
justify-content: center;
overflow: hidden;
border-radius: 15px 15px 0 0;

`

const PostImage = styled.img`
  width: 15vw;
  height: auto;

  border-radius: 15px 15px 0 0;
`;

function PopularBlogList() {
  const navi = useNavigate();
  console.log(data)
  return (



    data.map(function (a) {

      return (


        <PopularPost
          onClick={() => {
            navi("/blogpost");
          }}>
          <ImageBox>
            <PostImage src={a.img} alt="Europe" />
          </ImageBox>
          <PostTags>{a.title}</PostTags>
        </PopularPost>


      )



    })


  );

}
export default PopularBlogList;
