import styled from "styled-components";

const Container = styled.div`

height: 20vh;
width: 100%;
display: flex;


`;


const TitleBox = styled.div`

height: 20vh;
width: 70%;


`;

const InfoContainer = styled.div`

height: 20vh;
width: 30%;
display: flex;
align-items: center;
justify-content: center;


`

const InfoBox = styled.div`

height: 18vh;
width: 17vw;
background-color: #FFDB31;
border-radius: 20%;



`

const SiteName = styled.h1`
  font-family: KakaoBold;
  font-size: 50pt;
  color: #faf4c0;
  margin-top: 10px;
  margin-left: 20px;
  font-weight: bold;
  width: calc(100vw - 8rem);
`;

const BlogDescription = styled.div`
  font-size: 12pt;
  font-family: KakaoRegular;
  color: #ffffff;
  margin-left: 20px;
  margin-top: 5px;
  width: calc(100vw - 7rem);
`;

const ProfileBox = styled.div`

`
const IntroBox = styled.div`

`
const FollowBox = styled.div`

`
const ProfileImg = styled.img`

`
const ProfileName = styled.div`

`
const FollowerBox = styled.div`

`
const FollowingBox = styled.div`

`
const FollowButton = styled.div`

`


function Header() {
  return (
    <Container>
      <TitleBox>
        <SiteName>Trip Again</SiteName>
        <BlogDescription>좌충우돌 세계일주 여행기</BlogDescription>
      </TitleBox>
      <InfoContainer>
        <InfoBox>
            <ProfileBox>
                <ProfileImg>

                </ProfileImg>
                <ProfileName>

                </ProfileName>

            </ProfileBox>

            <IntroBox>

            </IntroBox>

            <FollowBox>
                <FollowingBox>

                </FollowingBox>
                <FollowerBox>

                </FollowerBox>

            </FollowBox>

        </InfoBox>
        <FollowButton>

        </FollowButton>

      </InfoContainer>
    </Container>
  );
}
export default Header;
