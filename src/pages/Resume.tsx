import styled from "styled-components";
import { Divider } from 'antd'
import { Footer } from "../components/layouts/Footer";
import { GithubOutlined, InstagramOutlined } from "@ant-design/icons";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align:start;
  font-size : 0.9rem;
`
export function Resume() {

  return (
    <div>
      <Container>
        <h3 style={{ padding: "0 24px", textAlign: "start" }}>Backend Developer 이해선</h3>
        <div style={{ display: "flex", textAlign: "start", padding: "0 24px", gap: "16px", alignItems: "center" }}>

          <div style={{ padding: "8px" }}>
            <div style={{ paddingTop: "8px" }}>
              <GithubOutlined style={{ fontSize: "32px", marginRight: "16px", textAlign: "center" }} onClick={() => {
                window.open("https://github.com/HaeSeon")
              }} />
              <img src="/img/blog.png"
                onClick={() => {
                  window.open("https://haesummy.tistory.com")
                }}
                alt="" height={"28px"} style={{ marginRight: "16px", textAlign: "center", marginBottom: 0 }} />
              <InstagramOutlined style={{ fontSize: "32px", textAlign: "center", color: "purple" }} onClick={() => {
                window.open("https://www.instagram.com/travel.haesummy")
              }} />
            </div>
            <br />
            #개발좋아함 #수학좋아함 #문제해결능력<br />
            #추진력 #한다면한다 #긍정왕<br />
            #프로여행러 #몰입왕 #창의력<br />
          </div>
          <img src="/img/profile.jpg" alt="" height={"124px"} style={{ marginLeft: "auto" }} />
        </div>

        <div style={{ padding: "24px" }}>
          <div style={{ backgroundColor: "#e9e9e9", padding: "16px", textAlign: "center", fontSize: "0.95rem" }}>
            여행하는 개발자 이해선입니다. <br />
            <b>몰입 </b>하여 함께 배우며 <b>성장</b>하는것을 좋아해요.<br />
            함께 좋은 팀, 좋은 서비스를 만들어가요!
          </div>
          <Divider />
          <h3>Career</h3>
          <div style={{ textAlign: "start", fontSize: "0.9rem" }}>
            <table width={"100%"}>
              <tbody>

                <tr>
                  <td width={"25%"}>2021.02</td>
                  <td>상명대 컴퓨터과학과 졸업</td>
                </tr>
                <tr>
                  <td width={"25%"}>2020.12</td>
                  <td>엔씨소프트 인턴 (9개월)</td>
                </tr>
                <tr>
                  <td width={"25%"}>2021.11</td>
                  <td>스타트업 Project Leader (1년) <br />
                    <span style={{ color: "grey" }}>
                      무인 주류 판매 플랫폼 AISSGO 개발
                    </span>
                  </td>
                </tr>
                <tr>
                  <td width={"25%"}>2022.10</td>
                  <td>[외주] 채팅 어플리케이션 개발</td>
                </tr>
                <tr>
                  <td width={"25%"}>2023.01</td>
                  <td>별걸 다 시상하는 어워즈 <span
                    style={{
                      fontWeight: 600,
                      textDecoration: "underline",
                      // marginLeft: "8px"
                    }}
                    onClick={() => {
                      window.open("https://takingprize.com/users/421ea804-0952-4216-93c6-340fab88fac9/prizeList")

                    }}>킹받즈</span> 출시</td>
                </tr>
                <tr>
                  <td width={"25%"}>2023.03</td>
                  <td>[kakao X groom] 해커톤 최우수상 <span
                    style={{
                      fontWeight: 600,
                      textDecoration: "underline",
                      // marginLeft: "8px"
                    }}
                    onClick={() => {
                      window.open("https://ddokdarman.site")

                    }}>똑닮안</span> <br />
                    <span
                      style={{
                        color: "gray",
                        textDecoration: "underline",
                        // marginLeft: "8px"
                      }}
                      onClick={() => { window.open("https://9oormthon.goorm.io/30a437a5-e256-4e9f-8512-1dcfacc0f8af") }}>
                      소개자료 보러가기
                    </span>
                  </td>
                </tr>
                <tr>
                  <td width={"25%"}>2023.06~ </td>
                  <td>혁신공공서비스 발굴을 위한 서울시 생성 AI 해커톤 <br />진행중</td>
                </tr>
              </tbody>
            </table>
            <div style={{ textAlign: "end", color: "purple" }} onClick={() => { window.open("https://circular-height-089.notion.site/63925eed1fed4ecf8f8d5647fbf4de24") }}>
              More info - 이력서 보러가기
            </div>
          </div>

          <Divider />
          <h3>Skills</h3>
          <div style={{ textAlign: "start", fontSize: "0.9rem" }}>
            <table width={"100%"}>
              <tbody>

                <tr>
                  <td width={"25%"}>Language</td>
                  <td>Typescript, Python</td>
                </tr>
                <tr>
                  <td width={"25%"}>Backend</td>
                  <td>Node.js. Nest.js, express.js, Flask, Django</td>
                </tr>
                <tr>
                  <td width={"25%"}>DevOps</td>
                  <td>AWS, Git, Docker</td>
                </tr>
                <tr>
                  <td width={"25%"}>Database</td>
                  <td>MySQL, MongoDB</td>
                </tr>
                <tr>
                  <td width={"25%"}>Frontend</td>
                  <td>React.js, Vue.js</td>
                </tr>
                <tr>
                  <td width={"25%"}>Others</td>
                  <td>Notion, Figma, Adobe</td>
                </tr>
              </tbody>
            </table>
          </div>
          <Divider />
          <h3>Strength</h3>
          <div style={{ textAlign: "start", fontSize: "0.9rem" }}>
            - 프로젝트 리딩 경험 <br />
            - 프로젝트 기획, 설계, 개발, 배포, 유지보수 경험 <br />
            - AWS 클라우드 환경에서 서비스 배포/운영 경험 <br />
            - 인공지능 활용 경험 多 <br />
            - 개발할 때 옆에서 춤춰도 모르는 집중력
          </div>

          <Divider />
          <h3>About 이해선</h3>
          <div style={{ textAlign: "start", fontSize: "0.9rem" }}>
            - 아이디어를 기획하고 서비스를 만드는 것을 좋아함 <br />
            - 인공지능, 디자인, 기획 다양한 분야에 관심이 있음 <br />
            - 세상 심플한 성격 <br />
            - 밤 잘 새워요 <br />
            - 발상의 전환, 아이디어뱅크
          </div>
        </div>


        <Footer />
      </Container>
    </div>
  )
}