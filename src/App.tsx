
import './App.css';
import { Router } from "./Router";

import styled from "styled-components";
import { Header } from './components/layouts/Header';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color : white;
  max-width: 480px;
  min-width: 340px;
  width: 100%;
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 480px;
  min-height:100vh;
`

function App() {
  return (
    <div className="App">
      <Container>
        <Header title="haesummy" />
        <ContentContainer>
          <Router />
        </ContentContainer>
      </Container>
    </div>
  );
}

export default App;
