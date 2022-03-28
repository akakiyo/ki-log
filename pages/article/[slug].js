import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import styled from "styled-components";
import { fetchAPI } from "../../lib/api.js";
import Layout from "../../components/Layout/Layout.js";
import { getStrapiURL } from "../../lib/api.js";
import CodeBlock from "../../components/MarkDownStyle/CodeBlock.js";
import TwitterShare from "../../components/TwitterShare.js";
import { MobaileSiteStyle } from "../../components/MediaQuery/styledMediaQuery";

const Article = ({ article, tags }) => {
  const seo = {
    metaTitle: article.attributes.title,
    metaDescription: article.attributes.description,
    shareImage: article.attributes.image,
    article: true,
  };
  const articleTitle = article.attributes.title;
  const publishedAt = article.attributes.publishedAt;
  const articleTags = article.attributes.tags.data;
  const imageUrl = article.attributes.image.data?.attributes.url;
  const articleContent = article.attributes.content;
  const author = article.attributes.author.data.attributes.name;
  const slug = article.attributes.slug;

  const components = {
    code: CodeBlock,
  };
  return (
    <Layout seo={seo} tags={tags} page={"article"}>
      <Container>
        <Content>
          <Title>{articleTitle}</Title>
          <p>
            作成日：
            <Moment format="YYYY年MM月DD日 HH:mm">{publishedAt}</Moment>
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
              />
            ) : (
              <>画像なし</>
            )}
          </ImageArea>
          <TextArea>
            <div>
              <ReactMarkdown components={components}>
                {articleContent}
              </ReactMarkdown>
              <hr />
              <div>
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
  try {
    const articlesRes = await fetchAPI("/articles", { fields: ["slug"] });

    return {
      paths: articlesRes.data.map((article) => ({
        params: {
          slug: article.attributes.slug,
        },
      })),
      fallback: "blocking",
    };
  } catch (err) {
    console.error(err);
  }
}

export async function getStaticProps({ params }) {
  try {
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
      revalidate: 7200, //2時間ごとに更新
    };
  } catch (err) {
    console.error(err);
  }
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
  ${MobaileSiteStyle`
    width:90%;
  `};
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
