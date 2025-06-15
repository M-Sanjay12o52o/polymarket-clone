import { MarketItem } from "@/types/markets";
import { MarketCard } from "./MarketCard";
import { ElementType } from "react";

interface CategorySectionProps {
  title: string;
  markets: MarketItem[];
  icon: ElementType;
  color: string;
}

export const CategorySection = ({
  title,
  markets: categoryMarkets,
  icon: Icon,
  color,
}: CategorySectionProps) => {
  if (!categoryMarkets || categoryMarkets.length === 0) return null;

  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <div className={`p-2 rounded-lg ${color} text-white`}>
          <Icon size={20} />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 capitalize">{title}</h2>
        <span className="text-gray-500 text-sm">
          ({categoryMarkets.length})
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoryMarkets.map((market: MarketItem) => (
          <MarketCard
            key={market.id}
            market={market}
            showCategory={title === "trending"}
          />
        ))}
      </div>
    </div>
  );
};
