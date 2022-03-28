import App from "next/app";
import { createContext } from "react";
import { fetchAPI } from "../lib/api.js";
import "../styles/Home.module.css";
import "../styles/globals.css";

export const GlobalContext = createContext({});

function MyApp({ Component, pageProps }) {
  const { global } = pageProps;
  return (
    <>
      <GlobalContext.Provider value={global.attributes}>
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </>
  );
}
MyApp.getInitialProps = async () => {
  try {
    const globalRes = await fetchAPI("/global");
    return { pageProps: { global: globalRes.data } };
  } catch (err) {
    console.error(err);
  }
};

export default MyApp;
