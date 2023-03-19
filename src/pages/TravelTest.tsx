import styled from "styled-components";
import { Button, Progress } from 'antd'
import useSound from 'use-sound';
import { useEffect } from "react";
import bell from '../sounds/bell.mp3'
import { Footer } from "../components/layouts/Footer";

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin:0 24px;
  gap:16px;
`
export function TravelTest() {
  const [play] = useSound(bell);
  useEffect(() => {
    play()
  }, [play])
  return (
    <div>
      <Progress percent={10} style={{ margin: "24px", width: "90%" }} />
      <h3>여행 전날, 마지막으로 꼭 하나만 챙길 수 있다면?</h3>
      <div>
        <img src="/img/sample.png" alt="" width={"80%"} style={{ margin: "24px" }} />
      </div>
      <ButtonContainer>
        <Button>에어팟</Button>
        <Button>노트북</Button>
        <Button>고량주</Button>
        <Button>코로나 음성 확인서</Button>
      </ButtonContainer>
      <Footer />
    </div>
  )
}