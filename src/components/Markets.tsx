import { ChevronDownIcon, TrendingUp } from "lucide-react";
import { Button } from "./ui/button";
import { marketsname } from "@/data/marketsname";

export default function Markets() {
  return (
    <div className="w-full p-4">
      <div className="overflow-x-auto whitespace-nowrap">
        <div className="flex items-center gap-4 px-2">
          <div className="text-gray-700 flex items-center">
            <TrendingUp />
            <span className="ml-2">Trending</span>
          </div>
          {marketsname.map((tab) => (
            <div className="cursor-pointer" key={tab}>
              {tab}
            </div>
          ))}
          <div>
            <Button variant="secondary" size="icon" className="size-8">
              <ChevronDownIcon />
            </Button>
            More
          </div>
        </div>
      </div>
    </div>
  );
}
