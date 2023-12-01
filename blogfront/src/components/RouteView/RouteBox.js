import styled from 'styled-components'
import data from './TempData'


const PostItemBox = styled.div`

  width: 60vw;
  height: 20vh;
  display: flex;
  flex-direction: row;
  background-color: #FFFFFF;
  border-radius: 10px;
  margin-top: 20px;

`;

const ImgBox = styled.div`

width: 15vw;
height: 20vh;
display: flex;
align-items: center;
justify-content: center;


`

const PostItemimage = styled.img`
  
  height: 15vh;
  width: auto;

`;

const PostItems = styled.div`
  display: flex;
  flex-direction: column;
  width: 45vw;
  height: 20vh;
  justify-content: center;
  align-items: start;
`;

const PostItemTitle = styled.div`
  font-family: KakaoBold;
  font-size: 12pt;
  font-weight: bold;

`;

const PostItem = styled.div`
  font-family: KakaoRegular;
  font-size: 9pt;
  color: #000000;
  
`;

const SummaryItem = styled.div`
  font-family: KakaoBold;
  font-size: 10pt;
  color: #000000;
  font-weight: bold;

  `;

function RouteBox() {

  return (
    <>

      {data.map(function (a) {

        return (
          <>
          
            <PostItemBox>
              <ImgBox>
                <PostItemimage src={a.img} alt="Incheon" />
              </ImgBox>
              <PostItems>
                <PostItemTitle>{a.title}</PostItemTitle>
                <PostItem>{a.desc}</PostItem>
                <SummaryItem>{a.transport}</SummaryItem>
              </PostItems>
            </PostItemBox>

          </>
        )

      })}

    </>


  )


}
export default RouteBox;