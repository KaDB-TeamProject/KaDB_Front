import styled from 'styled-components'

const ScheduleTitle = styled.div`
  font-size: 12pt;
  font-family: KakaoBold;
  color: #ffffff;
  font-weight: bold;
  text-decoration: 2px yellow underline;
  margin-left: 120px;
  margin-top: 30px;
`;

const ScheduleBox = styled.div`
  background-color: #ffffff;
  color: #000000;
  padding: 20px 30px;
  border-radius: 50px;
  margin: 20px 10px;
  font-family: KakaoBold;
  font-size: 10pt;
  font-weight: bold;
  margin-left: 100px;
  margin-right: 100px;
`;

function TitleBox(){

    return(
    <>
    <ScheduleTitle>SCHEDULE</ScheduleTitle>
    <ScheduleBox>
      Europe 2019.07.07 ~ 2019.08.13 영국 아일랜드 프랑스 스위스 오스트리아
      체코
    </ScheduleBox>
    </>
    )

}
export default TitleBox;