import styled from "styled-components";
import React from "react";
import Link from "next/link";
import Menu from "./Menu.js";
import Logo from "../../../public/Logo.svg";
import SmallLogo from "../../../public/SmallLogo.svg";
import useMediaQuery from "../../MediaQuery/useMediaQuery.js";
const Header = ({ categories, tags }) => {
  const { isMobileSite } = useMediaQuery();
  return (
    <Container>
      <Menu categories={categories} tags={tags} />
      <SiteName>
        <Link href="/">
          <a>{isMobileSite ? <SmallLogo /> : <Logo />}</a>
        </Link>
      </SiteName>
    </Container>
  );
};

const Container = styled.div`
  height: 100px;
  background-color: #000000;
  text-align: center;
`;
const SiteName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export default Header;
