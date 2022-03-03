import useMedia from "use-media";

const mediaQueries = {
  mobile: "(max-width: 519px)",
  tablet: "(min-width: 520px) and (max-width: 959px)",
  pc: "(min-width: 960px)",
};

const useMediaQuery = () => {
  const isMobileSite = useMedia(mediaQueries.mobile);
  const isTabletSite = useMedia(mediaQueries.tablet);
  const isPcSite = useMedia(mediaQueries.pc);
  return { isMobileSite, isTabletSite, isPcSite };
};
export default useMediaQuery;
