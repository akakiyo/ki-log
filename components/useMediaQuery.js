import useMedia from "use-media";

const mediaQueries = {
  mobile: "(max-width: 599px)",
  tablet: "(min-width: 600px) and (max-width: 1024px)",
  pc: "(min-width: 1025px)",
};

const useMediaQuery = () => {
  const isMobileSite = useMedia(mediaQueries.mobile);
  const isTabletSite = useMedia(mediaQueries.tablet);
  const isPcSite = useMedia(mediaQueries.pc);
  return { isMobileSite, isTabletSite, isPcSite };
};
export default useMediaQuery;
