import styled from "styled-components";
import React from "react";
import Link from "next/link";
import { useContext } from "react";
import { GlobalContext } from "../../../pages/_app.js";
import Menu from "./Menu.js";
import Logo from "../../../public/Logo.svg";
const Header = ({ categories, tags }) => {
  const { siteName } = useContext(GlobalContext);
  return (
    <Container>
      <Menu categories={categories} tags={tags} />
      <SiteName>
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
      </SiteName>
    </Container>
  );
};

const Container = styled.div`
  height: 100px;
  background-color: #000000;
`;
const SiteName = styled.div`
  text-align: center;
  font-size: 60px;
  color: #67c5ff;
`;

export default Header;
