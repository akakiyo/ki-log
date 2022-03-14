import styled from "styled-components";
import Link from "next/link";
import { TwitterIcon } from "react-share";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <Container>
      <SNSButton>
        <Link href={`https://twitter.com/akakiyo2000`}>
          <a target="_blank">
            <TwitterIcon size={30} round />
          </a>
        </Link>
        <Link href={`https://github.com/akakiyo`}>
          <a target="_blank">
            <FaGithub size={30} />
          </a>
        </Link>
      </SNSButton>
      <Right>© 2022 ki-log </Right>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  height: 100px;
  background-color: #000000;
  color: #67c5ff;
`;
const Right = styled.div`
  text-align: center;
`;
const SNSButton = styled.div`
  margin-left: 10%;
  text-align: left;
  a {
    margin-left: 3px;
  }
`;

export default Footer;
