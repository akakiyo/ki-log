import { getStrapiMedia } from "../lib/media.js";
// import NextImage from "next/image";

const Image = ({ image, style }) => {
  if (!image.data) {
    return <div>画像なし</div>;
  }
  const { url, alternativeText, width, height } = image.data.attributes;

  return (
    <img
      width="500px"
      height="400px"
      objectFit="contain"
      src={url}
      alt={alternativeText || ""}
    />
  );
};

export default Image;
