import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import styled from "styled-components";
import { fetchAPI } from "../../lib/api.js";
import Layout from "../../components/Layout/Layout.js";
import Image from "../../components/Image.js";
import gfm from "remark-gfm";
import { getStrapiURL } from "../../lib/api.js";

import TwitterShare from "../../components/TwitterShare.js";

const Article = ({ article, tags }) => {
  let imageUrl;
  if (article.attributes.image.data)
    // imageUrl = getStrapiMedia(article.attributes.image.data.attributes.url);
    imageUrl = article.attributes.image.data.attributes.url;
  else {
    imageUrl = undefined;
  }
  const articleTitle = article.attributes.title;
  const articleContent = article.attributes.content;
  const author = article.attributes.author.data.attributes.name;
  const createddAt = article.attributes.createdAt;
  const picture = article.attributes.author.picture;
  const slug = article.attributes.slug;
  const articleTags = article.attributes.tags.data;
  // const tags = article.attributes.tags.data.map((obj) => obj.word);
  const seo = {
    metaTitle: article.attributes.title,
    metaDescription: article.attributes.description,
    shareImage: article.attributes.image,
    article: true,
  };
  return (
    <Layout seo={seo} tags={tags} page={"article"}>
      <Container>
        <Content>
          <Title>{articleTitle}</Title>
          <p>
            作成日：
            <Moment format="YYYY年MM月DD日 HH:mm">{createddAt}</Moment>
          </p>
          {articleTags.map((tag) => {
            return <Tags key={tag.attributes.word}>{tag.attributes.word}</Tags>;
          })}

          <ImageArea>
            {imageUrl ? (
              <img
                width="600px"
                height="500px"
                objectFit="contain"
                src={imageUrl}
                // alt={alternativeText || ""}
              />
            ) : (
              <>画像なし</>
            )}
          </ImageArea>
          <TextArea>
            <div>
              <ReactMarkdown plugins={gfm} unwrapDisallowed={false}>
                {articleContent}
              </ReactMarkdown>
              <hr />
              <div>
                <div>{picture && <Image image={picture} />}</div>
                <div>
                  <p>By {author}</p>
                </div>
              </div>
            </div>
          </TextArea>
          <TwitterShare
            url={getStrapiURL(`/article/${slug}`)}
            title={articleTitle}
            text={"share"}
          />
        </Content>
      </Container>
    </Layout>
  );
};

export async function getStaticPaths() {
  const articlesRes = await fetchAPI("/articles", { fields: ["slug"] });

  return {
    paths: articlesRes.data.map((article) => ({
      params: {
        slug: article.attributes.slug,
      },
    })),
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const articlesRes = await fetchAPI("/articles", {
    filters: {
      slug: params.slug,
    },
    populate: "*",
  });
  const tagsRes = await fetchAPI("/tags", { populate: "*" });

  return {
    props: {
      article: articlesRes.data[0],
      tags: tagsRes.data,
    },
    revalidate: 1,
  };
}

const ImageArea = styled.div`
  text-align: center;
  position: relative;
  top: 0;
  width: 100%;
  margin: 30px 0;
`;
const Title = styled.h1`
  font-size: 40px;
`;
const TextArea = styled.div``;
const Content = styled.div`
  width: 80%;
  background-color: #ffffff;
  border-radius: 20px; /* 線幅の半分 */
  padding: 5%;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Tags = styled.div`
  display: inline-block;
  padding: 0.3em 1em;
  text-decoration: none;
  background: #67c5ff;
  color: white;
  border: solid 2px #67c5ff;
  border-radius: 20px;
  transition: 0.4s;
  margin-left: 5px;
`;
export default Article;
