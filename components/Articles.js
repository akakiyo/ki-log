import { useState, useEffect } from "react";
import CardComponet from "./Card.js";
import styled from "styled-components";

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
  }, [sortMethod]);
  return (
    <>
      <Select
        onChange={(event) => {
          setSortMethod(event.target.value);
        }}
      >
        <option value="ascending_order">日付順</option>
        <option value="descending_order" selected>
          新着順
        </option>
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
  margin: 5px;
  float: left;
  width: calc(50% - 10px);
`;
const Select = styled.select`
  position: relative;
  height: 3.5em;
  width: 15em;
  color: black;
  text-indent: 1.5em;
  :hover {
    background-color: #ffffff;
    color: black;
  }
`;
export default Articles;
