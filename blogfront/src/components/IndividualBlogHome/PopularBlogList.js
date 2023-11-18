import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import data from './TempPopularPost'

const PopularPost = styled.div`
  width: 15vw;
  height: 20vh;
  background-color: #cbcbcb;
  padding: 10px;
  border-radius: 3px;
  margin: 2vw;
  align-items: center;
  display:flex;
  flex-direction: column;
`;

const PostImage = styled.img`
margin-top: 10%;
  width: 8vw;
  height: 8vw;
  margin-bottom: 14px;
  margin-left: 10px;
`;

const PostTags = styled.div`
padding-top: 6%;
  font-size: 9pt;
  font-family: KakaoRegular;
  color: #000000;
  align-items: center;
  justify-content: center;
  display: flex;
`;

function PopularBlogList() {
  const navi = useNavigate();
  console.log(data)
  return (
    

      
      data.map(function(a){

        return(


          <PopularPost
          onClick={() => {
            navi("/blogpost");}}>
          <PostImage src={a.img} alt="Europe" />
          <PostTags>{a.title}</PostTags>
        </PopularPost>


        )



      })

    
  );
  
}
export default PopularBlogList;
