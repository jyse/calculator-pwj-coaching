import React, { useState, useEffect } from "react";
import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import Calculator from "./components/Calculator";
import { useTheme } from "./theme/useTheme";
import { GlobalStyles } from "./theme/GlobalStyles";
import ThemeSelector from "./components/ThemeSelector";
import WebFont from "webfontloader";

function App() {
  const { theme, themeLoaded, getFonts } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  useEffect(() => {
    setSelectedTheme(theme);
  }, []);

  useEffect(() => {
    WebFont.load({
      google: {
        families: getFonts(),
      },
    });
  });

  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyles />
      <Wrapper>
        <ThemeSelector setter={setSelectedTheme} />
        <Calculator />
      </Wrapper>
    </ThemeProvider>
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
