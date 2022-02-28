import React from "react";
import Articles from "../components/Articles.js";
import Layout from "../components/Layout/Layout.js";
import { fetchAPI } from "../lib/api.js";
import styled from "styled-components";

const Home = ({ articles, homepage, tags }) => {
  const homeTitle = homepage.attributes.hero.title;
  return (
    <Layout seo={homepage.attributes.seo} tags={tags} page={"home"}>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <Title>{homeTitle}</Title>
          <Articles articles={articles} />
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
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
}

const Title = styled.h1`
  color: #000000;
`;

export default Home;
