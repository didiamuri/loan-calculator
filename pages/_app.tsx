import { Fragment } from "react";
import type { AppProps } from "next/app";
import { Header, Footer } from "components";
import "@styles/style.css";

const LeanCalculatorApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Fragment>
      <Header />
      <main className="block">
        <Component {...pageProps} />
      </main>
      <Footer />
    </Fragment>
  );
};

export default LeanCalculatorApp;

