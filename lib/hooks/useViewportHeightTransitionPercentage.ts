import { useLayoutEffect, useEffect, useState } from "react";

const useViewportHeightTransitionPercentage = () => {
  const [viewportHeightPercentage, setViewportHeightPercentage] =
    useState<number>(0);

  const canUseDOM: boolean = !!(
    typeof window !== "undefined" &&
    typeof window.document !== "undefined" &&
    typeof window.document.createElement !== "undefined"
  );

  const useIsomorphicLayoutEffect = canUseDOM ? useLayoutEffect : useEffect;

  useIsomorphicLayoutEffect(() => {
    const contentHeight = window.document.documentElement.scrollHeight;
    const viewPortHeight = window.innerHeight;
    setViewportHeightPercentage(viewPortHeight / contentHeight);
  }, []);

  return viewportHeightPercentage;
};

export default useViewportHeightTransitionPercentage;
