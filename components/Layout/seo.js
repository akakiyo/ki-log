import Head from "next/head";
import { useContext } from "react";
import { GlobalContext } from "../../pages/_app.js";

const Seo = ({ seo }) => {
  const { defaultSeo, siteName } = useContext(GlobalContext);

  const fullSeo = {
    ...defaultSeo,
    ...seo,
    // metaTitle: `${seoWithDefaults.metaTitle}`,
    title: `${siteName}`,
  };

  return (
    <Head>
      {fullSeo.title && <title>{fullSeo.title}</title>}
      {fullSeo.metaTitle && (
        <>
          <title>{fullSeo.metaTitle}</title>
          <meta property="og:title" content={fullSeo.metaTitle} />
          <meta name="twitter:title" content={fullSeo.metaTitle} />
        </>
      )}
      {fullSeo.metaDescription && (
        <>
          <meta name="description" content={fullSeo.metaDescription} />
          <meta property="og:description" content={fullSeo.metaDescription} />
          <meta name="twitter:description" content={fullSeo.metaDescription} />
        </>
      )}
      {fullSeo.shareImage && (
        <>
          <meta property="og:image" content={fullSeo.shareImage} />
          <meta name="twitter:image" content={fullSeo.shareImage} />
          <meta name="image" content={fullSeo.shareImage} />
        </>
      )}
      {fullSeo.article && <meta property="og:type" content="article" />}
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default Seo;
