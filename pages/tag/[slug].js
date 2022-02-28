import Articles from "../../components/Articles.js";
import { fetchAPI } from "../../lib/api.js";
import Layout from "../../components/Layout/Layout.js";

const Tag = ({ matchingTags, allTags }) => {
  const seo = {
    metaTitle: matchingTags.attributes.name,
    metaDescription: `All ${matchingTags.attributes.name} articles`,
  };
  return (
    <Layout tags={allTags} seo={seo} page={"tag"}>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>{matchingTags.attributes.word}</h1>
          <Articles articles={matchingTags.attributes.articles.data} />
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const tagsRes = await fetchAPI("/tags", { fields: ["slug"] });

  return {
    paths: tagsRes.data.map((tag) => ({
      params: {
        slug: tag.attributes.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const matchingTags = await fetchAPI("/tags", {
    filters: { slug: params.slug },
    populate: {
      articles: {
        populate: "*",
      },
    },
  });
  const allTags = await fetchAPI("/tags", { populate: "*" });
  return {
    props: {
      matchingTags: matchingTags.data[0],
      allTags: allTags.data,
    },
    revalidate: 7200,
  };
}
export default Tag;
