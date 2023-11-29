import { useState } from 'react';
import styled from 'styled-components'

const Head = styled.div`

display: flex;
flex-direction: column;
height: 35vh;


`

const SiteName = styled.div`
height: 15vh;
width: calc(100vh-7rem);
align-items: center;
display: flex;
 font-family: KakaoBold;
 font-size: 11vh;
 color: #FAF4C0;
 margin-left: 2vw;
 font-weight: bold;
`;

const BlogDescription = styled.div`
height: 5vh;
width: calc(100vh-7rem);
display: flex;
align-items: center;
  font-size: 2.3vh;
  font-family: KakaoRegular;
  color: #FFFFFF;
  margin-left: 3vw;
`;


const ScheduleTitle = styled.div`
display: flex;
height: 5vh;
  font-size: 3vh;
  font-family: KakaoBold;
  color: #FFFFFF;
  font-weight: bold;
  text-decoration: 2px yellow underline;

  align-items: center;
  justify-content: center;
`;

const Blank = styled.div`

height: 10vh;
width: calc(100vh-7rem);


`




function Header() {

    const [title, setTitle] = useState("Trip Again")
    const [subtitle, setSubTitle] = useState("좌충우돌 세계일주 여행기")


    return (

        <Head>
            <SiteName>{title}</SiteName>
            <BlogDescription>{subtitle}</BlogDescription>
            <Blank></Blank>
            <ScheduleTitle>나의 일정</ScheduleTitle>
        </Head>


    )




}
export default Header;