import React from "react";
import Articles from "../components/Articles.js";
import Layout from "../components/Layout/Layout.js";
import { fetchAPI } from "../lib/api.js";

const Home = ({ articles, homepage, tags }) => {
  return (
    <Layout seo={homepage.attributes.seo} tags={tags} page={"home"}>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <Articles articles={articles} />
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  try {
    const [articlesRes, homepageRes, tagsRes] = await Promise.all([
      fetchAPI("/articles", { populate: "*" }),
      fetchAPI("/homepage", { populate: "*" }),
      fetchAPI("/tags", { populate: "*" }),
    ]);
    return {
      props: {
        articles: articlesRes.data,
        homepage: homepageRes.data,
        tags: tagsRes.data,
      },
      revalidate: 7200,
    };
  } catch (err) {
    console.error(err);
  }
}

export default Home;
