import React from "react";
import { MarketItem } from "@/types/markets";

interface MarketCardProps {
  market: MarketItem;
  showCategory: boolean;
}

export const MarketCard = ({
  market,
  showCategory = true,
}: MarketCardProps) => {
  const yesPercentage = Math.round(market.yesPrice * 100);
  const noPercentage = Math.round(market.noPrice * 100);

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:border-gray-300 cursor-pointer">
      {showCategory && (
        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
            {market.category}
          </span>
        </div>
      )}

      <h3 className="text-lg font-semibold text-gray-900 mb-4 line-clamp-2 leading-relaxed">
        {market.question}
      </h3>

      <div className="flex items-center justify-between mb-4">
        <div className="text-sm text-gray-500">
          Volume:{" "}
          <span className="font-semibold text-gray-700">{market.volume}</span>
        </div>
      </div>

      <div className="flex gap-3">
        <button className="flex-1 bg-green-50 hover:bg-green-100 border border-green-200 rounded-lg p-3 transition-colors">
          <div className="text-center">
            <div className="text-sm font-medium text-green-700 mb-1">Yes</div>
            <div className="text-lg font-bold text-green-800">
              {yesPercentage}¢
            </div>
          </div>
        </button>

        <button className="flex-1 bg-red-50 hover:bg-red-100 border border-red-200 rounded-lg p-3 transition-colors">
          <div className="text-center">
            <div className="text-sm font-medium text-red-700 mb-1">No</div>
            <div className="text-lg font-bold text-red-800">
              {noPercentage}¢
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};
