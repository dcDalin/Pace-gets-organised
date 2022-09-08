import { AppProps } from "next/app";
import PageLayout from "pages/components/PageLayout";

import "../styles/global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PageLayout>
      <Component {...pageProps} />
    </PageLayout>
  );
}

export default MyApp;
