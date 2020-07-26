import * as React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import styled from "styled-components";
import { mainTheme } from "../../utils/theme";

interface Props {
  children: React.ReactNode;
}

const Main = styled.main`
  margin: 0 auto;
  max-width: ${(props) => props.theme.size.maxWidth};
`;

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyles />
      <Main>{children}</Main>
    </ThemeProvider>
  );
};

// font-family: 'Abel', sans-serif;

// font-family: 'Sarabun', sans-serif;

const GlobalStyles = createGlobalStyle`
  *::before,
  *::after,
  * {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }

    html {
      font-size: ${(props) => props.theme.appSize};
      font-family: 'Sarabun', sans-serif;
    }

    body {
      box-sizing: border-box;
      font-family: 'Sarabun', sans-serif;
      padding: 0;
      margin: 0;
      line-height: 2;
      background: ${({ theme }) => theme.colors.background};
      color: ${({ theme }) => theme.colors.text};
    }

    ul,li{
      list-style:none;
    }

    a {
      text-decoration: none;
      color: ${(props) => props.theme.colors.text};
      font-size: ${(props) => props.theme.size.a};
      font-family: 'Abel', sans-serif;
    }

    h1{
      font-size: ${(props) => props.theme.size.h1};
      font-family: 'Abel', sans-serif;
    }
    h2{
      font-size: ${(props) => props.theme.size.h2};
      font-family: 'Abel', sans-serif;
    }
    h3{
      font-size: ${(props) => props.theme.size.h3};
      font-family: 'Abel', sans-serif;
    }
    p{
      font-size: ${(props) => props.theme.size.p};
    }



`;

export default Layout;
