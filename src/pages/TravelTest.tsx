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
    question: "여행 전날, 마지막으로 꼭 하나만 챙길 수 있다면?",
    options: [
      { index: 0, category: "정신머리", isPass: true },
      { index: 1, category: "노트북", isPass: false, failMessage: "비행기에서 노트북 베터리가 폭발했다. " },
      { index: 2, category: "고량주", isPass: false, failMessage: "짐을 싸다 고량주의 유혹을 이기지 못하고 마시고 뻗어서 비행기를 놓쳤다." },
      { index: 3, category: "코로나 음성 확인서", isPass: false, failMessage: "PCR 검사를 받다가 코로나에 걸려서 여행 내내 앓았다." },

    ]
  },
  {
    index: 1,
    question: "설레는 마음으로 비행기에 탑승했다. 기내식으로 먹을 음식은?",
    options: [
      { index: 0, category: "저가항공이라 기내식은 커녕 물도 없음", isPass: false, failMessage: "참지 못한 갈증으로 비행기 창문 깨고 탈출" },
      { index: 1, category: "beef, please", isPass: false, failMessage: "맛없어서 돌연사" },
      { index: 2, category: "fish, please", isPass: false, failMessage: "물고기가 상했다. " },
      { index: 3, category: "비행기에 술 뭐있지?!", isPass: true },

    ]
  },
  {
    index: 2,
    question: "무사히 착륙했다. 입국심사관이 입국 이유를 물었다. 당신의 대답은?",
    options: [
      { index: 0, category: "영어 못해요", isPass: false, failMessage: "국적이 미국이었다. 영어를 못하는 척 하다 걸려서 실패" },
      { index: 1, category: "...", isPass: true },
      { index: 2, category: "How are you", isPass: false, failMessage: "그냥 입국 심사관의 마음에 안들었다. 입국 실패" },
      { index: 3, category: "sjoilfnsnelfkjk", isPass: false, failMessage: "이상한 언어로 마약밀매범으로 오인받았다. " },

    ]
  },
  {
    index: 3,
    question: "ㅏㅏㄴ",
    options: [
      { index: 0, category: "영어 못해요", isPass: false, failMessage: "국적이 미국이었다. 영어를 못하는 척 하다 걸려서 실패" },
      { index: 1, category: "...", isPass: true },
      { index: 2, category: "How are you", isPass: false, failMessage: "그냥 입국 심사관의 마음에 안들었다. 입국 실패" },
      { index: 3, category: "sjoilfnsnelfkjk", isPass: false, failMessage: "이상한 언어로 마약밀매범으로 오인받았다. " },

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
        <h3>{questions[index].question.split(".").map(line => {
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