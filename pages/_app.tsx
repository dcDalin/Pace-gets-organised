import { AppProps } from "next/app";
import PageLayout from "pages/components/PageLayout";

import "../styles/global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
