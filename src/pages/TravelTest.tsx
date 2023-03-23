import styled from "styled-components";
import { Button, message, Modal, Progress } from 'antd'
import useSound from 'use-sound';
import { useEffect, useState } from "react";
import bell from '../sounds/bell.mp3'
import { Footer } from "../components/layouts/Footer";
import { useNavigate } from "react-router-dom";

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin:0 24px;
  gap:16px;
  width: 100%;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align:center;
  font-size : 0.9rem;
  align-items : center;
  margin:24px
`
interface Question {
  index: number,
  question: string,
  options: {
    index: number,
    category: string
    isPass: boolean
    failMessage?: string
  }[]
}

const questions: Question[] = [
  {
    index: 0,
    question: "파리 여행 전날, 마지막으로 꼭 하나만 챙길 수 있다면?",
    options: [
      { index: 0, category: "정신머리", isPass: true },
      { index: 1, category: "노트북", isPass: false, failMessage: "비행기에서 노트북 베터리가 폭발했다. " },
      { index: 2, category: "고량주", isPass: false, failMessage: "짐을 싸다 고량주의 유혹을 이기지 못하고 마시고 뻗어서 비행기를 놓쳤다." },
      { index: 3, category: "코로나 음성 확인서", isPass: false, failMessage: "PCR 검사를 받다가 코로나에 걸려서 여행 내내 앓았다." },

    ]
  },
  {
    index: 1,
    question: "설레는 마음으로 비행기에 탑승했다. /기내식으로 먹을 음식은?",
    options: [
      { index: 0, category: "저가항공이라 기내식은 커녕 물도 없음", isPass: false, failMessage: "참지 못한 갈증으로 비행기 창문 깨고 탈출" },
      { index: 1, category: "beef, please", isPass: false, failMessage: "맛없어서 돌연사" },
      { index: 2, category: "fish, please", isPass: false, failMessage: "물고기가 상했다. " },
      { index: 3, category: "비행기에 술 뭐있지?!", isPass: true },

    ]
  },
  {
    index: 2,
    question: "무사히 착륙했다. 입국심사관이 입국 이유를 물었다. /당신의 대답은?",
    options: [
      { index: 0, category: "영어 못해요", isPass: false, failMessage: "국적이 미국이었다. 영어를 못하는 척 하다 걸려서 실패" },
      { index: 1, category: "...", isPass: true },
      { index: 2, category: "How are you", isPass: false, failMessage: "그냥 입국 심사관의 마음에 안들었다. 입국 실패" },
      { index: 3, category: "sjoilfnsnelfkjk", isPass: false, failMessage: "이상한 언어로 마약밀매범으로 오인받았다. " },

    ]
  },
  {
    index: 3,
    question: "무사히 파리에 도착 /꿈에 그리던 에펠탑이 보이는 숙소에 체크인을 했다. /이제 무엇을 할까?",
    options: [
      { index: 0, category: "너무 배고파! 밥먹으러갈래", isPass: false, failMessage: "테라스에 앉아 맛있게 밥을 먹던 중, 방심한 나머지 모든 돈과 휴대폰, 여권을 도난당했다. " },
      { index: 1, category: "에펠탑!! 빨리 에펠탑 보러갈래!", isPass: false, failMessage: "에펠탑 앞 쥐 떼에 습격을 받았다. " },
      { index: 2, category: "숙소 너무 좋다 흠냐.. Zzz", isPass: true },
      { index: 3, category: "주변 동네 산책해볼까? 커피도 사먹고!", isPass: false, failMessage: "산책하다 길을 잘못들어 갱단의 소굴로 들어가버렸다. " },

    ]
  },
  {
    index: 4,
    question: "숙소에서 자다 깼다. /자다 깨서 창문에 보이는 에펠탑이 너무 아름답다. /어느덧 저녁이 되어서 밥을 먹으러 가기로 한다. ",
    options: [
      { index: 0, category: "신나는 로컬 분위기를 즐기러 제일 핫한 펍으로~!", isPass: true },
      { index: 1, category: "프랑스는 와인이지! 분위기 있는 와인바", isPass: false, failMessage: "와인과 요리가 너무 맛이있었던 나머지 레스토랑과 한국 가맹점을 내기로 했다. 일 때문에 여행 포기" },
      { index: 2, category: "집 뷰도 좋은데 재료 사서 집에서 해먹자", isPass: false, failMessage: "요리에 요자도 몰랐다. 괴식을 만들어버렸다. 너무 맛없어서 쇼크로 사망" },
      { index: 3, category: "에펠탑이 보이는 센느강 옆 레스토랑", isPass: false, failMessage: "분위기에 취해 에펠탑에 올라가다 현지 경찰에게 체포당했다. " },

    ]
  },
  {
    index: 5,
    question: "다음날 아침, 날씨가 너무 좋다. /오늘은 파리 시내 투어를 해보자! 어디를 갈까?",
    options: [
      { index: 0, category: "역시 파리는 에펠탑이지", isPass: true },
      { index: 1, category: "루브르! 오세르! 미술관 투어", isPass: false, failMessage: "와인과 요리가 너무 맛이있었던 나머지 레스토랑과 한국 가맹점을 내기로 했다. 일 때문에 여행 포기" },
      { index: 2, category: "베르사유의 궁전", isPass: false, failMessage: "요리에 요자도 몰랐다. 괴식을 만들어버렸다. 너무 맛없어서 쇼크로 사망" },
      { index: 3, category: "몽마르뜨 언덕", isPass: false, failMessage: "분위기에 취해 에펠탑에 올라가다 현지 경찰에게 체포당했다. " },

    ]
  },
  {
    index: 6,
    question: "오늘은 근교 노르망디 투어를 하는날!  ",
    options: [
      { index: 0, category: "", isPass: true },
      { index: 1, category: "", isPass: false, failMessage: "와인과 요리가 너무 맛이있었던 나머지 레스토랑과 한국 가맹점을 내기로 했다. 일 때문에 여행 포기" },
      { index: 2, category: "", isPass: false, failMessage: "요리에 요자도 몰랐다. 괴식을 만들어버렸다. 너무 맛없어서 쇼크로 사망" },
      { index: 3, category: "", isPass: false, failMessage: "분위기에 취해 에펠탑에 올라가다 현지 경찰에게 체포당했다. " },

    ]
  },
  {
    index: 7,
    question: "지나가던 사람이 나한테 말을 걸었다. /그 사람이 한 말은?",
    options: [
      { index: 0, category: "안녕하세요! 저도 한국사람이에요!", isPass: false, failMessage: "친해져서 함께 칵테일 한 잔 했는데 가게 안 모든 술값을 나한테 덤탱이 씌웠다. " },
      { index: 1, category: "헬로우 웨얼 이즈 더 서브웨이?", isPass: false, failMessage: "서브웨이 샌드위치 가게를 알려줬는데 장난하냐며 욕을 된통 먹었다." },
      { index: 2, category: "헤이 기브미 원달러 원달러 원달러", isPass: false, failMessage: "" },
      { index: 3, category: "이쪽으로 가시면 위험해요! 제가 같이 가드릴게요.", isPass: true }, // 착한 사람 이었다.

    ]
  },
  {
    index: 8,
    question: "파리에서의 기념품가게에 왔는데 다 너무 예쁘다. /하지만 돈을 다 써버려 하나만 고를 수 있다. /어떤걸 고를까?  ",
    options: [
      { index: 0, category: "면세 이용해야지! 명품 가방", isPass: false, failMessage: "분명 돈을 다 썼다고 했다. 명품을 살 수 있을 리 없다. " },
      { index: 1, category: "엽서와 마그넷", isPass: false, failMessage: "소중한 기념품, 공항으로 가다가 잃어버렸다. 너무 슬퍼서 찾으러가다가 비행기를 놓침" },
      { index: 2, category: "꿈에 그리던 에펠이를 내손에, 에펠탑 모형", isPass: false, failMessage: "에펠탑 모형을 가방에 넣었다가 가방이 찢어졌다. 떨어진 여권이 센느강에 빠져 떠내려갔다. " },
      { index: 3, category: "미술관 앞에서 길거리 화가가 그려주는 그림", isPass: true },

    ]
  },
  {
    index: 9,
    question: "파리에서의 마지막 한끼. 뭘 먹을까? (너무 마음에 들어 정착하기로 함 여행 실패) ",
    options: [
      { index: 0, category: "고오급 프랑스 파인다이닝", isPass: false, failMessage: "음식에 감명받아 파리가 너무 마음에 들어 정착하기로 함" },
      { index: 1, category: "영화에 환상이 있던 라따뚜이", isPass: true },
      { index: 2, category: "한식 땡겨 ㅠㅠ 한식 레스토랑", isPass: false, failMessage: "생각없이 소주를 시켰는데 소주가 15000원. 가진 돈을 다 써버려 공항으로 갈 돈이 없어서 비행기를 놓쳤다. " },
      { index: 3, category: "프랑스 왔으면 달팽이 먹어야지! 에스카르고", isPass: false, failMessage: "달팽이를 먹다 달팽이가 되었다. " },

    ]
  },

]

interface Result {
  index: number
  selectedOption: {
    index: number
    category: string
  }

}

export function TravelTest() {
  const [play] = useSound(bell);
  // useEffect(() => {
  //   play()
  // }, [play])

  const [index, setIndex] = useState(0)
  const [result, setResult] = useState([] as Result[])
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [failMessage, setFailMessage] = useState("")

  const navigate = useNavigate()
  useEffect(() => {
  }, [index])

  useEffect(() => {

  }, [result])

  const addResult = (selectedOption: { index: number, category: string }) => {
    result.push({
      index,
      selectedOption
    })
  }

  const handleOk = () => {
    navigate("/travel/main")
  };

  return (
    <div>
      <Container>
        <Progress percent={(index + 1) * 10} style={{ width: "90%", margin: 0 }} />
        <h3>{questions[index].question.split("/").map(line => {
          return <div key={line}>{line}</div>
        })}</h3>
        <div>
          <img src="/img/sample.png" alt="" width={"80%"} style={{ margin: "24px" }} />
        </div>
        <ButtonContainer>
          {questions[index].options.map(option => {
            return (
              <Button
                onClick={() => {
                  if (option.isPass) {
                    setIndex((idx) => idx + 1)
                    addResult(option)
                  } else {
                    setFailMessage(option.failMessage!!)
                    setIsModalOpen(true)
                  }
                }}
                key={option.index}
              >{option.category}</Button>
            )
          })}
          <Modal title="여행 실패!!" open={isModalOpen} footer={<Button key="submit" onClick={handleOk}>
            다시 여행하기
          </Button>}>
            {failMessage}
          </Modal>
        </ButtonContainer>
        <Footer />
      </Container>
    </div >
  )
}