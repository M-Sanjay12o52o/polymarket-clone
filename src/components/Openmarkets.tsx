"use client";

import { markets } from "@/data/markets";
import { MarketItem } from "@/types/markets";
import { ElementType, useState } from "react";
import {
  TrendingUp,
  Clock,
  Trophy,
  Vote,
  Bitcoin,
  Smartphone,
  Film,
  Globe,
  DollarSign,
  User,
  Calendar,
  MessageSquare,
} from "lucide-react";
import { CategorySection } from "./CategorySection";
import { MarketCard } from "./MarketCard";
import { CategoryKey } from "@/types/categorytype";

const categoryColors = {
  trending: "bg-gradient-to-r from-pink-500 to-rose-500",
  new: "bg-gradient-to-r from-green-500 to-emerald-500",
  sports: "bg-gradient-to-r from-orange-500 to-amber-500",
  politics: "bg-gradient-to-r from-blue-500 to-indigo-500",
  crypto: "bg-gradient-to-r from-yellow-500 to-orange-500",
  tech: "bg-gradient-to-r from-purple-500 to-violet-500",
  culture: "bg-gradient-to-r from-red-500 to-pink-500",
  world: "bg-gradient-to-r from-cyan-500 to-blue-500",
  economy: "bg-gradient-to-r from-green-600 to-teal-500",
  trump: "bg-gradient-to-r from-red-600 to-orange-600",
  elections: "bg-gradient-to-r from-indigo-600 to-purple-600",
  mentions: "bg-gradient-to-r from-gray-600 to-slate-600",
};

const Openmarkets = ({}) => {
  const [activeTab, setActiveTab] = useState<"all" | CategoryKey>("all");

  const categoryIcons: Record<CategoryKey, ElementType> = {
    trending: TrendingUp,
    new: Clock,
    sports: Trophy,
    politics: Vote,
    crypto: Bitcoin,
    tech: Smartphone,
    culture: Film,
    world: Globe,
    economy: DollarSign,
    trump: User,
    elections: Calendar,
    mentions: MessageSquare,
  };

  const tabs = [
    { id: "all", label: "All Markets" },
    { id: "trending", label: "Trending" },
    { id: "new", label: "New" },
    { id: "politics", label: "Politics" },
    { id: "crypto", label: "Crypto" },
    { id: "sports", label: "Sports" },
    { id: "tech", label: "Tech" },
  ];

  const getAllMarkets = () => {
    return Object.values(markets).flat();
  };

  const getActiveMarkets = () => {
    if (activeTab === "all") return getAllMarkets();
    return markets[activeTab] || [];
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Open Markets
            </h1>
            <p className="text-gray-600">
              Bet on your beliefs across politics, crypto, sports, and more
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="flex gap-1 overflow-x-auto pb-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as "all" | CategoryKey)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? "bg-blue-100 text-blue-700 border border-blue-200"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === "all" ? (
          // Show all categories when "All Markets" is selected
          <>
            {/* {Object.entries(markets).map(([categoryKey, categoryMarkets]) => {
              const Icon = categoryIcons[categoryKey];
              const color = categoryColors[categoryKey];
              return (
                <CategorySection
                  key={categoryKey}
                  title={categoryKey}
                  markets={categoryMarkets}
                  icon={Icon}
                  color={color}
                />
              );
            })} */}
            {(Object.entries(markets) as [CategoryKey, MarketItem[]][]).map(
              ([categoryKey, categoryMarkets]) => {
                const Icon = categoryIcons[categoryKey];
                const color = categoryColors[categoryKey];
                return (
                  <CategorySection
                    key={categoryKey}
                    title={categoryKey}
                    markets={categoryMarkets}
                    icon={Icon}
                    color={color}
                  />
                );
              }
            )}
          </>
        ) : (
          // Show specific category
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getActiveMarkets().map((market) => (
              <MarketCard key={market.id} market={market} showCategory={true} />
            ))}
          </div>
        )}

        {getActiveMarkets().length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <TrendingUp size={48} className="mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No markets found
            </h3>
            <p className="text-gray-600">Try selecting a different category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Openmarkets;
