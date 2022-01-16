import { useState, useEffect } from "react";
import {
  IDesktopPlatform,
  IPlatform,
  IUseDetectPlatform,
} from "./use-detect-platform-types";

const DEFAULT_PLATFORM_WIDTHS: IDesktopPlatform = {
  maxMobile: 480,
};

export const useDetectPlatform: IUseDetectPlatform = (
  platformWidths: IDesktopPlatform = DEFAULT_PLATFORM_WIDTHS,
) => {
  const [platform, setPlatform] = useState<IPlatform>("mobile");
  const { maxIpad, maxMobile } = platformWidths;

  useEffect(() => {
    setPlatform(calculateDimensions());

    window.addEventListener("resize", () => {
      setPlatform(calculateDimensions());
    });
  }, []);

  const calculateDimensions = () => {
    const windowWidth = document.children[0].clientWidth;
    const hasMobileDimensions = windowWidth < maxMobile;
    const hasIpadDimensions =
      maxIpad && !hasMobileDimensions && windowWidth < maxIpad;

    if (hasMobileDimensions) {
      return "mobile";
    } else if (hasIpadDimensions) {
      return "ipad";
    } else {
      return "desktop";
    }
  };

  return {
    platform,
  };
};
