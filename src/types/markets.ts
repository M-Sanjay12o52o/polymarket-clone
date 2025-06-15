export type MarketItem = {
  id: string;
  question: string;
  category: string;
  volume: string;
  yesPrice: number;
  noPrice: number;
};

export type Markets = {
  [category: string]: MarketItem[];
};

export interface MarketsData {
  trending: MarketItem[];
  new: MarketItem[];
  sports: MarketItem[];
  politics: MarketItem[];
  crypto: MarketItem[];
  tech: MarketItem[];
  culture: MarketItem[];
  world: MarketItem[];
  economy: MarketItem[];
  trump: MarketItem[];
  elections: MarketItem[];
  mentions: MarketItem[];
}
