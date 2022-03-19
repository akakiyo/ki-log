import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import styled from "styled-components";
const CodeBlock = ({ inline, className, children, ...props }) => {
  const match = /language-(\w+)/.exec(className || "");
  const fileName = match?.["input"].split(":")[1];

  return !inline && match ? (
    <>
      <FileNameWrapper>{fileName}</FileNameWrapper>
      <br />
      <SyntaxHighlighter style={dark} language={match[1]}>
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    </>
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  );
};

const FileNameWrapper = styled.p`
  position: absolute;
  color: black;
  z-index: 100;
`;

export default CodeBlock;
