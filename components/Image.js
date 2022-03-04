import { getStrapiMedia } from "../lib/media.js";
// import NextImage from "next/image";
import NextImage from "next/image";

const Image = ({ image, style }) => {
  if (!image.data) {
    return <div>画像なし</div>;
  }
  const { url, alternativeText, width, height } = image.data.attributes;

  return (
    <NextImage
      // width={"500px"}
      // height={"400px"}
      width="300px"
      height="200px"
      src={url}
      alt={alternativeText || ""}
    />

    // <img
    //   width="500px"
    //   height="400px"
    //   objectFit="contain"
    //   src={url}
    //   alt={alternativeText || ""}
    // />
  );
};

export default Image;
