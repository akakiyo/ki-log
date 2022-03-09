import { useState, useEffect } from "react";
import styled from "styled-components";
import CardComponet from "./Card.js";
import { MobaileSiteStyle } from "./styledMediaQuery";

const Articles = ({ articles }) => {
  const [sortMethod, setSortMethod] = useState("descending_order");
  const [sortedArticles, setSortedArticles] = useState(articles);

  useEffect(() => {
    let sortedArray;
    switch (sortMethod) {
      case "ascending_order":
        sortedArray = articles
          .map((rec) => {
            return { rec, key: rec.attributes.publishedAt };
          })
          .sort((a, b) => {
            return a.key < b.key ? -1 : 1;
          })
          .map((obj) => {
            return obj.rec;
          });
        break;
      case "descending_order":
        sortedArray = articles
          .map((rec) => {
            return { rec, key: rec.attributes.publishedAt };
          })
          .sort((a, b) => {
            return a.key > b.key ? -1 : 1;
          })
          .map((obj) => {
            return obj.rec;
          });
        break;
    }

    setSortedArticles(sortedArray);
  }, [sortMethod, articles]);
  return (
    <>
      <Select
        onChange={(event) => {
          setSortMethod(event.target.value);
        }}
      >
        <option value="descending_order" selected>
          新着順
        </option>
        <option value="ascending_order">日付順</option>
      </Select>
      <List>
        {sortedArticles.map((article) => {
          return (
            <Item key={`article_${article.attributes.slug}`}>
              <CardComponet article={article} />
            </Item>
          );
        })}
      </List>
    </>
  );
};

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;
const Item = styled.div`
  color: black;
  margin: 20px 5px;
  float: left;
  width: calc(50% - 10px);
  height: 100%;
  ${MobaileSiteStyle`
    float: none;
    width: 100%;
  `}
`;
const Select = styled.select`
  position: relative;
  height: 3.5em;
  width: 15em;
  color: black;
  text-indent: 1.5em;
  border: none;
  border-radius: 10px;
  background: #ffffff;
  margin-bottom: 20px;
  :hover {
    background-color: #ffffff;
    color: black;
  }
`;
export default Articles;
