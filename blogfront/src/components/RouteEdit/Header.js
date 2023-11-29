import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'

const Container = styled.div`

height: 40vh;
width: 70vw;

`

const SiteName = styled.div`
height: 15vh;
 font-family: KakaoBold;
 font-size: 10vh;
 color: #FAF4C0;
 font-weight: bold;
`;

const BlogDescription = styled.div`
height: 5vh;
  font-size: 2vh;
  font-family: KakaoRegular;
  color: #FFFFFF;
`;

const ScheduleTitle = styled.div`
  height: 5vh;
  width: 70vw;
  font-size: 12pt;
  font-family: KakaoBold;
  color: #FFFFFF;
  font-weight: bold;
  text-decoration: 2px yellow underline;

`;



const Schedule = styled.div`
height: 10vh;
width: 70vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;



const ScheduleBox = styled.div`
  background-color: #FFFFFF;
  height: 7vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40vw;
  color: #000000;
  border-radius: 50px;
  font-family: KakaoBold;
  font-size: 10pt;
  font-weight: bold;
`;

const Copybutton = styled.button`
  width: 7rem;
  height: 5vh;
  background-color: #FFFFFF;
  color: #000000;
  font-family: KakaoBold;
  font-size: 10pt;
  border-radius: 50px;
  font-weight: bold;
  text-shadow: 2px 2px 2px gray;

`;

const EmptyBox = styled.div`

width: calc(40vw - 20rem);


`
const BtnBox = styled.div`

display: flex;
align-items: right;
justify-content: end;
align-items: center;
width: 9rem;
height: 7vh


`

function Header() {

    const [date, setDate] = useState('2019.07.07 ~ 2019.08.13');
    const[title, setTitle] = useState('나의 첫 유럽 6개국 여행')

    const navi = useNavigate();

    return (

        <Container>
            <div>
                <SiteName>Trip Again</SiteName>
                <BlogDescription>좌충우돌 세계일주 여행기</BlogDescription>
            </div>
            <div>
                <ScheduleTitle>{date}</ScheduleTitle>
                <Schedule>
                    <ScheduleBox>{title}</ScheduleBox>
                    <EmptyBox></EmptyBox>
                    <BtnBox>
                    <Copybutton onClick={() => { navi(`/manageroute`) }}>수정 완료</Copybutton>
                    </BtnBox>
                </Schedule>
            </div>
        </Container>

    )



}
export default Header;