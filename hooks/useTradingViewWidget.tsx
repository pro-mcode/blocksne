// "use client";

// import { useEffect, useRef } from "react";

// const useTradingViewWidget = (
//   scriptUrl: string,
//   config: Record<string, unknown>,
//   height = 600
// ) => {
//   const containerRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     // prevent duplicate widget injection
//     if (container.dataset.loaded === "true") return;

//     container.innerHTML = `
//       <div
//         class="tradingview-widget-container__widget"
//         style="width: 100%; height: ${height}px;"
//       ></div>
//     `;

//     const script = document.createElement("script");
//     script.src = scriptUrl;
//     script.async = true;
//     script.innerHTML = JSON.stringify(config);

//     container.appendChild(script);
//     container.dataset.loaded = "true";

//     return () => {
//       container.innerHTML = "";
//       delete container.dataset.loaded;
//     };
//   }, [scriptUrl, config, height]);

//   return containerRef; // RETURN REF DIRECTLY
// };

// export default useTradingViewWidget;

"use client";
import { useEffect, useRef } from "react";

const useTradingViewWidget = (
  scriptUrl: string,
  config: Record<string, unknown>,
  height = 600
) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    if (containerRef.current.dataset.loaded) return;
    containerRef.current.innerHTML = `<div class="tradingview-widget-container__widget" style="width: 100%; height: ${height}px;"></div>`;

    const script = document.createElement("script");
    script.src = scriptUrl;
    script.async = true;
    script.innerHTML = JSON.stringify(config);

    containerRef.current.appendChild(script);
    containerRef.current.dataset.loaded = "true";

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
        // eslint-disable-next-line react-hooks/exhaustive-deps
        delete containerRef.current.dataset.loaded;
      }
    };
  }, [scriptUrl, config, height]);

  return containerRef;
};
export default useTradingViewWidget;
