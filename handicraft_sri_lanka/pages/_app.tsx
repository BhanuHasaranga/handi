// pages/_app.js

// 1. Import `createTheme`
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { AppProps } from "next/app";
import Head from "next/head";

// 2. Call `createTheme` and pass your custom theme values
const theme = createTheme({
  type: "light", // it could be "light" or "dark"
  theme: {
    colors: {
      primary: "#5A2A27",
      secondary: "#5C4742",
      error: "#FCC5D8",
    },
    fonts: {
      sans: "'Manrope'"
    },
    fontSizes: {},
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    radii: {},
    borderWeights: {},
    breakpoints: {},
    zIndices: {},
    shadows: {},
    dropShadows: {},
  },
});

// 3. Pass the new `theme`` to the `NextUIProvider`
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={theme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
