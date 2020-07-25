import { DefaultTheme } from "styled-components";

export const mainTheme: DefaultTheme = {
  appSize: "10px",
  colors: {
    text: "#000",
    button: "#f04437",
    secondary: "#8693AD",
    background: "#fff",
  },
  size: {
    h1: "50px",
    h2: "40px",
    h3: "30px",
    h4: "27px",
    h5: "22px",
    p: "18px",
    a: "16px",
    maxWidth: "900px",
  },
  shadow: {
    elevations: [
      "box-shadow: inset 0 7px 9px -7px rgba(0,0,0, 0.7)",
      "box-shadow: 0 1px 3px rgba(0,0,0, 0.12), 0 1px 2px rgba(0,0,0, 0.24)",
      "box-shadow: 0 3px 6px rgba(0,0,0, 0.16), 0 3px 6px rgba(0,0,0, 0.23)",
      "box-shadow: 3px 2px rgba(42, 43, 49,.3)",
    ],
  },
  transition: {
    mainTransition: "all .3s linear",
    secondaryTransition: "all 1s ease",
    quickTransition: "all 200ms ease-in-out",
  },
};

export const secondaryTheme: DefaultTheme = {
  appSize: "10px",
  colors: {
    text: "#fff",
    button: "#8693AD",
    secondary: "#f04437",
    background: "#000",
  },
  size: {
    h1: "50px",
    h2: "40px",
    h3: "30px",
    h4: "27px",
    h5: "22px",
    p: "18px",
    a: "16px",
    maxWidth: "900px",
  },
  shadow: {
    elevations: [
      "box-shadow: inset 0 7px 9px -7px rgba(0,0,0, 0.7)",
      "box-shadow: 0 1px 3px rgba(0,0,0, 0.12), 0 1px 2px rgba(0,0,0, 0.24)",
      "box-shadow: 0 3px 6px rgba(0,0,0, 0.16), 0 3px 6px rgba(0,0,0, 0.23)",
      "box-shadow: 3px 2px rgba(42, 43, 49,.3)",
    ],
  },
  transition: {
    mainTransition: "all .3s linear",
    secondaryTransition: "all 1s ease",
    quickTransition: "all 200ms ease-in-out",
  },
};
