import "../styles/globals.css";
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/700.css";
import type { AppProps } from "next/app";
import { themeOptions } from "../src/theme";
import { createTheme, ThemeProvider, GlobalStyles } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Head from "next/head";

const theme = createTheme(themeOptions);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Derek Dapp</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />

        <title>Derek Dapp</title>
        <meta name="title" content="Derek Dapp" />
        <meta
          name="description"
          content="I design and develop apps and websites, come see what I've done."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="Derek Dapp" />
        <meta
          property="og:description"
          content="I design and develop apps and websites, come see what I've done."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dutainan/image/upload/v1672460102/hello_halsfd.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="Derek Dapp" />
        <meta
          property="twitter:description"
          content="I design and develop apps and websites, come see what I've done."
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/dutainan/image/upload/v1672460102/hello_halsfd.png"
        ></meta>
      </Head>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
