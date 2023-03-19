import styled from "styled-components";
import { Button, Divider } from 'antd'
import useSound from 'use-sound';
import { useEffect } from "react";
import bell from '../sounds/bell.mp3'
import { Footer } from "../components/layouts/Footer";
import { GithubOutlined, InstagramOutlined } from "@ant-design/icons";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 480px;
  font-weight:500
`
export function Resume() {

  return (
    <div>
      <Container>
        <h3>백엔드 개발자 이해선</h3>
        <div style={{ display: "flex", textAlign: "start", padding: "0 24px", gap: "16px", alignItems: "center" }}>
          <img src="/img/profile.jpg" alt="" height={"124px"} />
          <div style={{ padding: "8px" }}>
            #ENTP
            #개발좋아함 #추진력 <br />
            #수학좋아함 #한다면한다 <br />
            #알코올 #대학교밴드보컬 <br />
            <div style={{ paddingTop: "8px", textAlign: "center" }}>
              <GithubOutlined style={{ fontSize: "32px", marginRight: "16px", textAlign: "center" }} onClick={() => {
                window.open("https://github.com/HaeSeon")
              }} />
              <InstagramOutlined style={{ fontSize: "32px", textAlign: "center", color: "purple" }} onClick={() => {
                window.open("https://www.instagram.com/travel.haesummy")
              }} />
            </div>

          </div>
        </div>

        <div style={{ padding: "24px" }}>
          <div style={{ backgroundColor: "lightYellow", padding: "16px" }}>
            <b>구름톤</b> 5기에 함께하게 되어서 행복합니다. <br />
            목표는 정식 <b>서비스 출시</b>, 경유지는 <b>대상</b><br />
            함께 <b>좋은 팀</b>, <b>좋은 서비스</b>를 만들어가요!
          </div>
          <Divider />
          <h3>Career</h3>
          <div style={{ textAlign: "start", fontSize: "0.9rem" }}>
            상명대 컴퓨터과학과 졸업 (2021.02)<br /> <br />
            엔씨소프트 인턴 (2020.12~2021.09 - 9개월) <br /> <br />
            스타트업 Project Leader (2021.11~2022.10 - 1년) <br />
            무인 주류 판매 플랫폼 AISSGO 개발 <br /> <br />
            [외주] 채팅 어플리케이션 (2022.10~2023.02 - 4개월) <br /> <br />
            별걸 다 시상하는 킹받는 어워즈
            <span
              style={{
                fontWeight: 600,
                textDecoration: "underline",
                marginLeft: "8px"
              }}
              onClick={() => {
                window.open("https://takingprize.com")

              }}>킹받즈</span> <br /> <br />
            More info - Notion link
          </div>

          <Divider />
          <h3>Skills</h3>
          <div style={{ textAlign: "start", fontSize: "0.9rem" }}>
            Language - Typescript, Python <br />
            Backend - Node.js. Nest.js, express.js, Flask, Django <br />
            DevOps - AWS, Git, Docker <br />
            Database - MySQL, MongoDB <br />
            Frontend - React.js, Vue.js <br />
            Others - Notion, Figma, Adobe
          </div>
          <Divider />
          <h3>Strength</h3>
          <div style={{ textAlign: "start", fontSize: "0.9rem" }}>
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