import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./Themes/darkMode";
import { Theme, normalTheme } from "./Themes/normalMode";
import { H1, H2, H3, H4 } from "./Components/Atoms/Headings";

import { NormalBtn } from "./Components/Atoms/Buttons";
import GlobalStyles from "./GlobalStyles";
import { OkCancelBtns } from "./Components/molecules/TowBtns";

function App() {
  const [isDarkMode, setIsDarkMode] = useState<Boolean>(false);
  const theme = isDarkMode ? darkTheme : normalTheme;

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Main>
          <div style={{ marginTop: 10 }}>
            <NormalBtn onClick={toggleTheme}>Change Theme</NormalBtn>
            <H1>Design System - DDS</H1>
            <H2>Design System - DDS</H2>
            <H3>Design System - DDS</H3>
            <H4>Design System - DDS</H4>
            <NormalBtn>Normal Button</NormalBtn>
            <NormalBtn color={theme.main_color}>MainColor Button</NormalBtn>
            <NormalBtn color={theme.sub_color}>SubColor Button</NormalBtn>
            <OkCancelBtns />
          </div>
        </Main>
      </ThemeProvider>
    </>
  );
}

const Main = styled.main`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }: { theme: Theme }) => theme.background_color};
  width: 100vw;
  height: 100vh;
`;

export default App;
