import App from "next/app";
import Head from "next/head";
import { createContext } from "react";
import { getStrapiMedia } from "../lib/media.js";
import { fetchAPI } from "../lib/api.js";
// import "../styles/menu.css";
import "../styles/Home.module.css";
import "../styles/globals.css";

// Store Strapi Global object in context
export const GlobalContext = createContext({});

function MyApp({ Component, pageProps }) {
  const { global } = pageProps;
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href={getStrapiMedia(global.attributes.favicon.data.attributes.url)}
        />
      </Head>
      <GlobalContext.Provider value={global.attributes}>
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </>
  );
}
MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);
  // Fetch global site settings from Strapi
  const globalRes = await fetchAPI("/global", { populate: "*" });
  // const globalRes = await fetchAPI("/global");//こっちではdefaultSeoとfaviconが取得できない
  // Pass the data to our page via props
  return { ...appProps, pageProps: { global: globalRes.data } };
};

export default MyApp;
