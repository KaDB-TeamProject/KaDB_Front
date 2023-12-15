import img from './temp.jpg'
import img2 from './moojuk.jpg'
import img3 from './lg.jpg'
import img4 from './liv.jpg'

const post = {
    title: "2019.07.07 ~ 08.13 나의 첫 유럽 여행기", category: "유럽 여행", schedule: [
        {
            paragraph: [
                {
                    place: "인천국제공항",
                    text: "10살 어린이 야구팬이었던 어린 팬은 어느덧 자녀의 나이가 10살이 된 시간을 보냈습니다. 30대의 가장은 어느덧 환갑의 나이를 훌쩍 넘겼고, 우승이 무엇인지 한번도 경험해보지 못했던 지금 20대의 팬들이 있습니다. 그토록 긴 시간, 29년의 시간, 7명의 대통령을 맞이했던 시간이었고요, 故 구본무 회장이 아와모리 소주를 담가놓고 다음 우승을 기다린 지 이렇게 많은 시간이 흘렀습니다.내 삶의 29년 전을 돌아보게 만드는 이 순간...! 2볼 2스트라이크! 이 타구는 2루수가 잡아냅니다! 경기 종료! 1994년 가을, 당신은 누구였습니까? 그리고 오늘, 당신은 누구입니까! 긴 세월에도 포기하지 않고 간직해 온 가슴 속 깊은 곳의 외침! 29년 만의 메아리! 2023년 통합 우승 챔피언은 LG 트윈스입니다!",
                    images: [img, img2, img3, img4],
                    tags: ["공항", "비행기"],
                    transports: [
                        { transport: "비행기", transport_name: "KLM", money: "500,000", time: "12시간" }
                    ]
                },

                {
                    place: "암스테르담 스키폴 공항",
                    text: "오오오오 오오 오오오오오 오오오오오 오오 (무! 적! L! G!) 오오오오 오오 오오오오오 오오오오오 오오 (무! 적! L! G!)사랑한다 (사!랑!한!다!) 나의 LG여 (나!의!L!G!) 사랑한다 (사!랑!한!다!) 나의 LG여 (나!의!L!G!)영원하라 (영!원!하!라!) 무적 LG여 (무!적!L!G!)  영원하라 (영!원!하!라!) 무적 LG여 (무!적!L!G!)오오오오 오오 오오오오오 오오오오오 오오 (무! 적! L! G!) 오오오오 오오 오오오오오 오오오오오 오오 (무! 적! L! G!)",
                    images: [img, img3],
                    tags: ["공항", "비행기"],
                    transports: [
                        { transport: "비행기", transport_name: "KLM", money: "100,000", time: "1시간" }
                    ]
                },

                {
                    place: "버밍엄 국제공항",
                    text: "오오오오 오오 오오오오오 오오오오오 오오 (무! 적! L! G!) 오오오오 오오 오오오오오 오오오오오 오오 (무! 적! L! G!)사랑한다 (사!랑!한!다!) 나의 LG여 (나!의!L!G!) 사랑한다 (사!랑!한!다!) 나의 LG여 (나!의!L!G!)영원하라 (영!원!하!라!) 무적 LG여 (무!적!L!G!)  영원하라 (영!원!하!라!) 무적 LG여 (무!적!L!G!)오오오오 오오 오오오오오 오오오오오 오오 (무! 적! L! G!) 오오오오 오오 오오오오오 오오오오오 오오 (무! 적! L! G!)",
                    images: [img],
                    tags: ["공항", "입국"],
                    transports: [
                        { transport: "고속버스", transport_name: "고속버스", money: "0", time: "1시간" }, 
                        { transport: "도보", transport_name: "도보", money: "0", time: "10분" }
                    ]
                },
            ]
        }, 
        {
            paragraph: [
                {
                    place: "더비 기숙사",
                    text: "희망의 새아침이 밝아오면은 (서울 LG!) 발걸음 가벼운 태양의 거리 (서울 LG!) 푸르른 하늘을 쳐다보면서 (서울 LG!) 오늘도 LG와 둘이서 (서울 LG!) 나가자 LG 싸우자 LG 서울 LG 트윈스 (LG!) 이기자 LG 승리의 LG 언제 언제까지나 랄랄라랄라 랄라랄라라 랄랄라랄라 랄라랄라라 랄랄라랄라 랄라랄라라 랄랄라랄라 랄라랄라라 남산의 오솔길을 걸어가면서 (서울 LG!) 그리운 그 노래를 불러봅니다 (서울 LG!) 흘러가는 강물 영원한 사랑 (서울 LG!) 변함없는 내사랑 LG여 (서울 LG!) 나가자 LG 싸우자 LG 서울 LG 트윈스 (LG!) 이기자 LG 승리의 LG 언제 언제까지나 (PLAY PLAY LG! PLAY PLAY HOMERUN!!) (Oh- LG! Oh- LG! Oh- LG 트윈스!)",
                    images: [img],
                    tags: ["숙소", "기숙사"],
                    transports: [
                        { transport: "도보", transport_name: "도보", money: "0", time: "10분" }
                    ]
                },

                {
                    place: "인투더비",
                    text: "희망의 새아침이 밝아오면은 (서울 LG!) 발걸음 가벼운 태양의 거리 (서울 LG!) 푸르른 하늘을 쳐다보면서 (서울 LG!) 오늘도 LG와 둘이서 (서울 LG!) 나가자 LG 싸우자 LG 서울 LG 트윈스 (LG!) 이기자 LG 승리의 LG 언제 언제까지나 랄랄라랄라 랄라랄라라 랄랄라랄라 랄라랄라라 랄랄라랄라 랄라랄라라 랄랄라랄라 랄라랄라라 남산의 오솔길을 걸어가면서 (서울 LG!) 그리운 그 노래를 불러봅니다 (서울 LG!) 흘러가는 강물 영원한 사랑 (서울 LG!) 변함없는 내사랑 LG여 (서울 LG!) 나가자 LG 싸우자 LG 서울 LG 트윈스 (LG!) 이기자 LG 승리의 LG 언제 언제까지나 (PLAY PLAY LG! PLAY PLAY HOMERUN!!) (Oh- LG! Oh- LG! Oh- LG 트윈스!)",
                    images: [img],
                    tags: ["쇼핑몰", "점심"],
                    transports: [
                        { transport: "", transport_name: "", money: "", time: "" }
                    ]
                },

            ]
        }
    ]
}

export default post;
