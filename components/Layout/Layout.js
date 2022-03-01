import Header from "./Header/Header.js";
import Body from "./Body/Body.js";
import Footer from "./Footer/Footer.js";
import Seo from "./seo.js";

const Layout = ({ children, seo, tags, page }) => {
  return (
    <>
      <Header tags={tags}>
        <Seo seo={seo} />
      </Header>
      <Body page={page}>{children}</Body>
      <Footer />
    </>
  );
};
export default Layout;
