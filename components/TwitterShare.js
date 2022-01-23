import styled from "styled-components";
import { TwitterShareButton, TwitterIcon } from "react-share";
const TwitterShare = ({ url, title, text }) => {
  return (
    <TwitterShareButton url={url} title={title}>
      <TwitterShareText>
        <TwitterIcon size={15} round />
        {text}
      </TwitterShareText>
    </TwitterShareButton>
  );
};

const TwitterShareText = styled.div`
  width: 100%;
  height: 100%;
  color: #1da1f2;
  border: solid 2px;
  border-radius: 5px;
`;
export default TwitterShare;
