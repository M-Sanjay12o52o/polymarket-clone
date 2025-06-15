import Openmarkets from "@/components/Openmarkets";
import { Searchbar } from "@/components/MarketSearchBar";

export default function Home() {
  return (
    <div>
      <Searchbar />
      <div className="bg-gray-400 min-h-screen flex items-center justify-center">
        <Openmarkets />
      </div>
    </div>
  );
}
