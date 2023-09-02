import { useState, useEffect, useCallback } from "react";
import { IMedia, IMediaSettings } from "../interfaces/IMedia";

export const useMedia = (): IMediaSettings => {
  const [isWindowSize, setWindowSize] = useState<number>(window.innerWidth);

  const checkMQSize = (): "big" | "medium" | "small" | "mini" => {
    if (isWindowSize >= 1200) return "big";
    if (isWindowSize < 1200 && isWindowSize >= 960) return "medium";
    if (isWindowSize < 960 && isWindowSize >= 660) return "small";
    if (isWindowSize < 660) return "mini";
    return "big";
  };

  // Set MQ state
  const [isMQ, setIsMQ] = useState<"big" | "medium" | "small" | "mini">(
    checkMQSize()
  );
  const handleWindowResize = useCallback(() => {
    const size = window.innerWidth;
    setWindowSize(size);
    if (size >= 1200) return setIsMQ("big");
    if (size < 1200 && size >= 960) return setIsMQ("medium");
    if (size < 960 && size >= 660) return setIsMQ("small");
    if (size < 660) return setIsMQ("mini");
    return;
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [handleWindowResize]);

  const media: IMedia = {
    big: isMQ === "big",
    medium: isMQ === "medium",
    small: isMQ === "small",
    mini: isMQ === "mini",
  };

  const setMedia = (
    bigParam: number | string,
    mediumParam: number | string = bigParam,
    smallParam: number | string = mediumParam,
    minParam: number | string = smallParam
  ): string | number => {
    if (typeof bigParam === "undefined") {
      return "";
    }

    const result = media.big
      ? bigParam
      : media.medium
      ? mediumParam
      : media.small
      ? smallParam
      : minParam;

    return result;
  };

  const setMediaByStep = (param: number, step: number): number => {
    const result = media.big
      ? param
      : media.medium
      ? param - step
      : media.small
      ? param - step * 2
      : param - step * 3;

    return result;
  };

  return { windowSize: isWindowSize, isMedia: media, setMedia, setMediaByStep };
};
