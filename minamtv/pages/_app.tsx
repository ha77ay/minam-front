import "../styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";

import { Provider } from "react-redux"; // react앱에 redux store를 제공해줌
import { store } from "../provider"; // redux-store
// import "../styles/bootstrap-custom.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
