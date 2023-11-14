import styled from 'styled-components'

const PostBox = styled.div`
  margin-top: 20px;
  background-color: #F2F2F2;
  margin-left: 20px;
  border-radius: 10px;
  margin: 20px 20px;
  padding: 10px 10px;
`;

const PostBoxTitle = styled.div`
  font-family: KakaoBold;
  font-size: 12pt;
  font-weight: bold;
  margin-left: 20px;
  margin-top: 20px;
  margin: 20px 22px;
`;

const PostItemBox = styled.div`
  background-color: #FFFFFF;
  margin-left: 20px;
  margin-top: 20px;
  margin: 20px 20px;
  border-radius: 10px;
  padding: 10px 10px;
`;

const PostItemTitle = styled.div`
  font-family: KakaoBold;
  font-size: 12pt;
  font-weight: bold;
  margin-left: 20px;
  margin-top: 10px;
  margin: 10px 20px;
`;

const PostItem = styled.div`
  font-family: KakaoRegular;
  font-size: 10pt;
  color: #000000;
  margin-left: 20px;
  margin: 20px 22px;
`;

const PostItemImage = styled.img`
  width: 200px;
  height: 150px;
  margin-top: 20px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const SummaryItem = styled.div`
  font-family: KakaoBold;
  font-size: 12pt;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
  margin: 20px auto;
`;

const Tags = styled.div`
  display: flex;
  margin-top: 20px;
  margin-left: 20px;
  flex-direction: row;
  margin: 10px 20px;
`;

const TagBox = styled.div`
  background-color: #1EFFF1;
  color: #000000;
  font-family: KakaoRegular;
  font-size: 10pt;
  padding: 10px 20px;
  border-radius: 50px;
  margin-left: 10px;
`;

const subs = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  position: absolute;
`;


function PostBoxContainer(){

return(

    <PostBox>
    <PostBoxTitle>1일차 인천 - 런던</PostBoxTitle>
    <PostItemBox>
      <PostItemTitle>인천 국제 공항 - 비용 12,000원</PostItemTitle>
      <PostItem>
      공항으로 가는 길은 언제나 설레요... 저는 항상 출국하는 날에는 설레서 잠을 못이룹니다.
      비행 3시간 전에 도착을 해야 하기 때문에, 8시에 출발하는 막차를 타고 9시쯤 도착해 체크인을 마쳤습니다.
      마침내 0시 20분 비행기에 탑승하였고, 0시 55분 비행기는 이륙했습니다!
      </PostItem>
    <PostItemImage src = "Incheon.jpg" alt = "Incheon" />
    </PostItemBox>
    <SummaryItem>대한항공 / 13시간 소요 / 비용 1,400,000원</SummaryItem>
    <PostItemBox>
      <PostItemTitle>런던 히스로 공항 - 비용 14,000원</PostItemTitle>
      <PostItem>
      우리 비행기는 12시간의 긴 비행 끝에 영국 런던 히스로 국제 공항에 도착했습니다. 우리나라 사람은 자동출입국 심사가 가능해서 바로 들어갈 수 있었어요!
      </PostItem>
    </PostItemBox>
    <Tags>
      <TagBox>#런던</TagBox>
      <TagBox>#공항</TagBox>
    </Tags>
  </PostBox>





)



}
export default PostBoxContainer;
