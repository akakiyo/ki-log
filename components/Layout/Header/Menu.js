import React from "react";
import Link from "next/link";
import { slide as SideMenu } from "react-burger-menu";
import styled from "styled-components";

const Menu = ({ tags }) => {
  return (
    <Container>
      <SideMenu width={250}>
        <div>タグ一覧</div>
        {tags.map((tag) => {
          return (
            <div key={tag.id}>
              <Link href={`/tag/${tag.attributes.slug}`}>
                <TagButton>
                  {tag.attributes.word}({tag.attributes.articles.data.length})
                </TagButton>
              </Link>
            </div>
          );
        })}
      </SideMenu>
    </Container>
  );
};
const Container = styled.div`
  //バーガーボタンのデザイン
  .bm-burger-bars {
    background: #67c5ff;
  }
  /* Position and sizing of burger button */
  .bm-burger-button {
    position: absolute;
    width: 36px;
    height: 30px;
    left: 36px;
    top: 36px;
  }

  /* Color/shape of burger icon bars on hover*/
  .bm-burger-bars-hover {
    background: #005b99;
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }

  /* Color/shape of close button cross */
  .bm-cross {
    background: #bdc3c7;
  }

  /*
  Sidebar wrapper styles
  Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
  */
  .bm-menu-wrap {
    position: fixed;
    height: 100%;
  }

  /* General sidebar styles */
  .bm-menu {
    background: white;
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }

  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #373a47;
  }

  /* Wrapper for item list */
  .bm-item-list {
    color: #b8b7ad;
    padding: 0.8em;
  }

  /* Individual item */
  .bm-item {
    display: inline-block;
    text-decoration: none;
    outline: none;
  }

  /* Styling of overlay */
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }
`;
const TagButton = styled.a`
  display: inline-block;
  padding: 0.3em 1em;
  text-decoration: none;
  color: #67c5ff;
  border: solid 2px #67c5ff;
  border-radius: 20px;
  transition: 0.4s;
  :hover {
    background: #67c5ff;
    color: white;
  }
`;

export default Menu;
