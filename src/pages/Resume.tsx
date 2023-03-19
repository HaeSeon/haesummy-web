import styled from "styled-components";
import { Button, Divider } from 'antd'
import useSound from 'use-sound';
import { useEffect } from "react";
import bell from '../sounds/bell.mp3'
import { Footer } from "../components/layouts/Footer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 480px;
`
export function Resume() {

  return (
    <div>
      <Container>
        <h3>여행하는 개발자 haesummy</h3>
        <div style={{ display: "flex", textAlign: "start", padding: "0 24px", gap: "16px", alignItems: "center" }}>
          <img src="/img/sample.png" alt="" width={"30%"} />
          <p>
            #이해선
            #백엔드 개발자 <br />
            #ENTP
            #개발좋아함 #추진력 <br />
            #수학좋아함 #한다면한다  <br />
            #알코올 #대학교밴드보컬
            <p style={{ margin: "0" }} onClick={() => {
              window.open("https://github.com/HaeSeon")
            }}>GitHub</p>
            <p style={{ margin: "0" }} onClick={() => {
              window.open("https://www.instagram.com/travel.haesummy")
            }}>Instagram</p>
          </p>
        </div>

        <div style={{ padding: "24px" }}>
          구름톤 5기에 함께하게 되어서 행복합니다. <br />
          목표는 정식 서비스 출시, 경유지는 대상 <br />
          함께 좋은 팀, 좋은 서비스를 만들어가요!
          <Divider />
          <h3>Career</h3>
          <div style={{ textAlign: "start" }}>
            상명대 컴퓨터과학과 졸업 (2021.02)<br />
            엔씨소프트 - language AI lab 인턴 (2020.12~2021.09 - 9개월) <br />
            스타트업 Project Leader - 무인 주류 판매 플랫폼 AISSGO 개발 (2021.11~2022.10 - 1년) <br />
            [외주] 채팅 어플리케이션 (2022.10~2023.02 - 4개월) <br />
            별걸 다 시상하는 킹받는 어워즈 <Button onClick={() => {
              window.open("https://takingprize.com")
            }}>킹받즈</Button> <br />
            More info - Notion link
          </div>

          <Divider />
          <h3>Skills</h3>
          <div style={{ textAlign: "start" }}>
            Language - Typescript, Python <br />
            Backend - Node.js. Nest.js, express.js, Flask, Django <br />
            DevOps - AWS, Git, Docker <br />
            Database - MySQL, MongoDB <br />
            Frontend - React.js, Vue.js <br />
            Others - Notion, Figma, Adobe
          </div>
          <Divider />
          <h3>Strength</h3>
          <div style={{ textAlign: "start" }}>
            - 프로젝트 리딩 경험 <br />
            - 프로젝트 기획, 설계, 개발, 배포, 유지보수 경험 <br />
            - AWS 클라우드 환경에서 서비스 배포/운영 경험 <br />
            - 탄력적인 마인드
          </div>
        </div>


        <Footer />
      </Container>
    </div>
  )
}