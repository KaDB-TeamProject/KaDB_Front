import styled from 'styled-components'

const PostBox = styled.div`
  margin-top: 30px;
  background-color: #F2F2F2;
  margin-left: 20px;
  margin: 20px 20px;
  border-radius: 10px;
  padding: 10px 20px;
`;

const PostBoxTitle = styled.div`
  font-family: KakaoBold;
  font-size: 12pt;
  font-weight: bold;
  margin-left: 20px;
  margin-top: 10px;
  margin: 20px 20px;
`;

const PostItemBox = styled.div`
  background-color: #FFFFFF;
  margin-left: 20px;
  border-radius: 10px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  position: relative;
  padding: 20px 20px;
  margin: 30px 20px;
`;

const ManageButton = styled.button`
  background-color: #FDE8C4;
  color: #000000;
  padding: 5px 10px;
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 1;
  font-family: KakaoRegular;
  font-size: 9pt;
  border: none;
`;

const PostItemimage = styled.img`
  width: 100px;
  height: 60px;
  margin-top: 20px;
  margin-left: 20px;
`;

const PostItems = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  margin-top: 20px;
`;

const PostItemTitle = styled.div`
  font-family: KakaoBold;
  font-size: 12pt;
  font-weight: bold;
  margin-left: 20px;
`;

const PostItem = styled.div`
  font-family: KakaoRegular;
  font-size: 9pt;
  color: #000000;
  margin-left: 25px;
  margin-top: 10px;
`;

const SummaryItem = styled.div`
  font-family: KakaoBold;
  font-size: 10pt;
  color: #000000;
  font-weight: bold;
  position: absolute;
  bottom: 10px;
  right: 20px;
  `;

const AddButton = styled.button`
  background-color: #C6FF8C;
  color: black;
  padding: 10px 22px;
  align-items: center;
  margin-top: 40px;
  border-radius: 50px;
  margin: 20px auto;
  display: block;
  border: none;
`;

function RouteBox() {

    



    return (
        <PostBox>
            <PostBoxTitle>1일차 인천 - 런던</PostBoxTitle>
            <PostItemBox>
                <PostItemimage src="Incheon.jpg" alt="Incheon" />
                <PostItems>
                    <PostItemTitle>인천 국제 공항</PostItemTitle>
                    <PostItem>여행 가기 전, 필수로 거쳐야 하는 관문</PostItem>
                    <SummaryItem>대한항공 / 13시간 소요 / 예상비용: 1,400,000원</SummaryItem>
                    <ManageButton>수정</ManageButton>
                </PostItems>
            </PostItemBox>
            <PostItemBox>
                <PostItemimage src="Hisro.jpg" alt="Hisro" />
                <PostItems>
                    <PostItemTitle>런던 히스로 공항</PostItemTitle>
                    <PostItem>런던의 관문 공항. 시내까지 약 50분 소요</PostItem>
                    <SummaryItem>히스로 익스프레스 / 20분 소요 / 예상비용: 14,000원</SummaryItem>
                    <ManageButton>수정</ManageButton>
                </PostItems>
            </PostItemBox>
            <PostItemBox>
                <PostItemimage src="Hotel.jpg" alt="Hotel" />
                <PostItems>
                    <PostItemTitle>그랜드 하얏트 호텔</PostItemTitle>
                    <PostItem>런던에서 가장 비싸고 유명한 호텔</PostItem>
                    <SummaryItem>예상비용: 14,000원</SummaryItem>
                    <ManageButton>수정</ManageButton>
                </PostItems>
            </PostItemBox>
            <PostBoxTitle>2일차 런던</PostBoxTitle>
            <AddButton>수정 완료</AddButton>
        </PostBox>




    )



}
export default RouteBox;