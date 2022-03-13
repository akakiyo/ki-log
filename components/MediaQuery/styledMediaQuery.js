import { generateMedia } from "styled-media-query";
const customMedia = generateMedia({
  mobile: "599px",
  desktop: "1025px",
});
const MobaileSiteStyle = customMedia.lessThan("mobile");
const TabletSiteStyle = customMedia.between("mobile", "desktop");
const PcSiteStyle = customMedia.greaterThan("desktop");
module.exports = { MobaileSiteStyle, TabletSiteStyle, PcSiteStyle };
