import styled from "styled-components";
import React from "react";
import Link from "next/link";
import Menu from "./Menu.js";
import Logo from "../../../public/Logo.svg";
const Header = ({ categories, tags }) => {
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
`;

export default Header;
