import { useState, useEffect } from "react";
import { useMediaQuery } from "./useMediaQuerry";

type MediaQueryType = "mobile" | "tablet" | "desktop";

export function useMediaQuerrySSR() {
  const [mounted, setMounted] = useState(false);

  const isMobile = useMediaQuery("(min-width: 200px) and (max-width: 830px)"); // Iphone 14
  const isTablet = useMediaQuery("(min-width: 834px) and (max-width: 1194px)"); // Ipad Pro 11
  const isDesktop = useMediaQuery("(min-width: 1200px)"); // Desktop

  const mediaQuery = getMediaQuery(isMobile, isTablet, isDesktop);

  useEffect(() => {
    setMounted(true);
  }, []);

  return { mediaQuery, mounted };
}

function getMediaQuery(
  isMobile: boolean,
  isTablet: boolean,
  isDesktop: boolean
): MediaQueryType {
  if (isMobile) return "mobile";
  if (isTablet) return "tablet";
  if (isDesktop) return "desktop";
  return "desktop";
}
