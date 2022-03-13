import React from "react";
import Link from "next/link";
import Moment from "react-moment";
import styled from "styled-components";
import Image from "./Image.js";
import { getStrapiURL } from "../lib/api.js";
import TwitterShare from "./TwitterShare.js";
import { MobaileSiteStyle } from "./MediaQuery/styledMediaQuery";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea, CardActions } from "@mui/material";

const CardComponet = ({ article }) => {
  const title = article.attributes.title;
  const slug = article.attributes.slug;
  const image = article.attributes.image;
  const tags = article.attributes.tags.data;
  const publishedAt = article.attributes.publishedAt;
  return (
    <Wrapper>
      <ActionsArea>
        <Link href={`/article/${slug}`}>
          <a>
            <ImageArea>
              <Image image={image} />
            </ImageArea>
            <Content>
              <Title>{title}</Title>
              <Tags>
                {tags &&
                  Object.values(tags).map((tag) => {
                    return (
                      <TagButton key={tag.id}>{tag.attributes.word}</TagButton>
                    );
                  })}
              </Tags>
              <Moment format="YYYY年MM月DD日 HH:mm">{publishedAt}</Moment>
            </Content>
          </a>
        </Link>
      </ActionsArea>
      <ButtonsArea>
        <TwitterShare
          url={getStrapiURL(`/article/${slug}`)}
          title={title}
          text={"share"}
        />
      </ButtonsArea>
    </Wrapper>
  );
};

const Wrapper = styled(Card)`
  position: relative;
  height: 430px;
  border-radius: 20px;
`;
const ActionsArea = styled(CardActionArea)`
  height: 100%;
  width: 100%;
  margin-bottom: 0px;
`;
const ImageArea = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  top: 0;
  padding: 10px;
  text-align: center;

  ${MobaileSiteStyle`
    height:200px;
  `};
`;
const Content = styled(CardContent)`
  position: relative;
  height: 100%;
  width: 100%;
  background-color: #ffffff;
  color: #000000;
  font-size: 18px;
`;
const Title = styled.h1`
  font-size: 30px;
  //2行以上は省略
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
const Tags = styled.p`
  width: 100%;
  height: 30px;
`;
const ButtonsArea = styled(CardActions)`
  position: absolute;
  width: 100%;
  bottom: 0;
`;
const TagButton = styled.a`
  display: inline-block;
  padding: 0.3em 1em;
  margin-left: 5px;
  background: #67c5ff;
  border: solid 2px #67c5ff;
  border-radius: 20px;
  transition: 0.4s;
  color: white;
  text-decoration: none;
`;
export default CardComponet;
