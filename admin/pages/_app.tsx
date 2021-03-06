import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import "../styles/bootstrap-custom.scss";
import type { AppProps } from "next/app";

import { Provider } from "react-redux";
import { store } from "../provider";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
