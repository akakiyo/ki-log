import { generateMedia } from "styled-media-query";
const customMedia = generateMedia({
  mobile: "519px",
  desktop: "960px",
});
const MobaileSiteStyle = customMedia.lessThan("mobile");
const TabletSiteStyle = customMedia.between("mobile", "desktop");
const PcSiteStyle = customMedia.greaterThan("desktop");
module.exports = { MobaileSiteStyle, TabletSiteStyle, PcSiteStyle };
