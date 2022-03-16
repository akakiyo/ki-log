import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import styled from "styled-components";
const CodeBlock = ({ inline, className, children, ...props }) => {
  const match = /language-(\w+)/.exec(className || "");
  // console.log("match", match);
  // console.log("className", className);
  // console.log("children", children);
  // console.log("props", props);
  const fileName = match?.["input"].split(":")[1];
  console.log(fileName);

  return !inline && match ? (
    <>
      <FileNameWrapper>&nbsp;{fileName}</FileNameWrapper>
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
  width: fit-content;
  margin: 0 0 0 0.5vw;
  color: #ffffff;
  border-bottom: #ffffff 1px solid;
  z-index: 100;
`;

export default CodeBlock;
