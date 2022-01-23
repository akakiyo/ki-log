import React from "react";
import CardComponet from "./Card.js";
import styled from "styled-components";

const Articles = ({ articles }) => {
  return (
    <List>
      {articles.map((article) => {
        return (
          <Item key={`article_${article.attributes.slug}`}>
            <CardComponet article={article} />
          </Item>
        );
      })}
    </List>
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

export default Articles;
