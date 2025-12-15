// "use client";

// import useTradingViewWidget from "@/hooks/useTradingViewWidget";
// import React, { memo } from "react";

// interface TradingViewWidgetProps {
//   title: string;
//   scriptUrl: string;
//   config: Record<string, unknown>;
//   height?: number;
//   className?: string;
// }

// const TradingViewWidget = ({
//   title,
//   scriptUrl,
//   config,
//   height = 600,
//   className = "",
// }: TradingViewWidgetProps) => {
//   const containerRef = useTradingViewWidget(scriptUrl, config, height);

//   return (
//     <div
//       ref={containerRef}
//       className={`tradingview-widget-container ${className}`}
//       style={{ height: "100%", width: "100%" }}
//     >
//       <div
//         className="tradingview-widget-container__widget"
//         style={{ height: "calc(100% - 32px)", width: "100%" }}
//       />
//       <div className="tradingview-widget-copyright">
//         <a
//           href="https://www.tradingview.com/symbols/BTCUSDT.P/?exchange=BYBIT"
//           rel="noopener nofollow"
//           target="_blank"
//         >
//           <span className="blue-text">{title}</span>
//         </a>
//         <span className="trademark"> by TradingView</span>
//       </div>
//     </div>
//   );
// };

// export default memo(TradingViewWidget);

"use client";

import React, { memo } from "react";
import useTradingViewWidget from "@/hooks/useTradingViewWidget";
import { cn } from "@/lib/utils";

interface TradingViewWidgetProps {
  title?: string;
  scriptUrl: string;
  config: Record<string, unknown>;
  height?: number;
  className?: string;
}

const TradingViewWidget = ({
  title,
  scriptUrl,
  config,
  height = 600,
  className,
}: TradingViewWidgetProps) => {
  const containerRef = useTradingViewWidget(scriptUrl, config, height);

  return (
    <div className="w-full">
      {title && (
        <h3 className="font-semibold text-2xl text-gray-100 my-5">{title}</h3>
      )}
      <div
        className={cn("tradingview-widget-container", className)}
        ref={containerRef}
      >
        <div
          className="tradingview-widget-container__widget"
          style={{ height, width: "100%" }}
        />
      </div>
    </div>
  );
};

export default memo(TradingViewWidget);
