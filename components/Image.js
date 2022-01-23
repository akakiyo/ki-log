import { getStrapiMedia } from "../lib/media.js";
// import NextImage from "next/image";

const Image = ({ image, style }) => {
  if (!image.data) {
    return <div>画像なし</div>;
  }
  const { url, alternativeText, width, height } = image.data.attributes;
  // const loader = () => {
  //   return getStrapiMedia(url);
  // };

  return (
    <img
      // loader={loader}
      // layout="responsive"
      // width={width}
      // height={height}
      width="500px"
      height="400px"
      objectFit="contain"
      src={getStrapiMedia(url)}
      alt={alternativeText || ""}
    />
  );
};

export default Image;
