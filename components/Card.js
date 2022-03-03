import React from "react";
import Link from "next/link";
import Moment from "react-moment";
import styled from "styled-components";
import Image from "./Image.js";
import { getStrapiURL } from "../lib/api.js";
import TwitterShare from "./TwitterShare.js";
import useMediaQuery from "./useMediaQuery.js";
import { MobaileSiteStyle } from "./styledMediaQuery";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea, CardActions } from "@mui/material";

const omit = (text) => (len) => (ellipsis) =>
  text.length >= len ? text.slice(0, len - ellipsis.length) + ellipsis : text;

const CardComponet = ({ article }) => {
  const title = article.attributes.title;
  const slug = article.attributes.slug;
  const image = article.attributes.image;
  const tags = article.attributes.tags.data;
  const publishedAt = article.attributes.publishedAt;
  const { isMobileSite, isTabletSite, isPcSite } = useMediaQuery();
  return (
    <Container>
      <ActionsArea>
        <Link href={`/article/${slug}`}>
          <a>
            <ImageArea>
              <Image image={image} />
            </ImageArea>
            <Content>
              <Title>
                {isMobileSite && omit(title)(30)("...")}
                {isTabletSite && omit(title)(45)("...")}
                {isPcSite && omit(title)(50)("...")}
              </Title>
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
    </Container>
  );
};

const Container = styled(Card)`
  /* max-height: 700; */
  position: relative;
  height: 600px;
  border-radius: 20px;
  ${MobaileSiteStyle`
    height:460px;
  `};
`;
const ActionsArea = styled(CardActionArea)`
  height: 100%;
  width: 100%;
  margin-bottom: 0px;
`;
const ImageArea = styled.div`
  text-align: center;
  position: relative;
  background-color: #ffffff;
  top: 0;
  width: 100%;
  height: 350px;
  padding: 20px;

  ${MobaileSiteStyle`
    height:200px;
  `};
`;
const Content = styled(CardContent)`
  position: relative;
  font-size: 18px;
  color: #000000;
  height: 100%;
  width: 100%;
  background-color: #ffffff;
`;
const Title = styled.h1`
  font-size: 30px;
  text-overflow: ellipsis;
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
  text-decoration: none;
  background: #67c5ff;
  color: white;
  border: solid 2px #67c5ff;
  border-radius: 20px;
  transition: 0.4s;
  margin-left: 5px;
`;
export default CardComponet;
