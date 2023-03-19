import styled from "styled-components";
import { Button } from 'antd'
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/layouts/Footer";



export function Main() {
  const navigate = useNavigate();
  return (
    <div>
      <h3>파리로 여행을 떠나볼까?</h3>
      <div>
        <img src="/img/sample.png" alt="" width={"80%"} style={{ margin: "24px" }} />
        <Button onClick={() => { navigate('/travel/test') }}>시작하기</Button>
      </div>
      <Footer />
    </div>
  )
}