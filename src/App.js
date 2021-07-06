import React from "react";
import "./App.css";
import styled from "styled-components";
import Calculator from "./components/Calculator";

function App() {
  return (
    <Wrapper>
      <Calculator />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  background-color: #3a4663;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
