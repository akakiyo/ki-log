import NextImage from "next/image";

const Image = ({ image }) => {
  if (!image.data) {
    return <div>ç»ćăȘă</div>;
  }
  const { url, alternativeText } = image.data.attributes;

  return (
    <NextImage
      width="300px"
      height="200px"
      src={url}
      alt={alternativeText || ""}
    />
  );
};

export default Image;
