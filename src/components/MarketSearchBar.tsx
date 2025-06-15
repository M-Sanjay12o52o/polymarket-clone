import { Bookmark, Search, SlidersHorizontal } from "lucide-react";
import { Input } from "./ui/input";

export const Searchbar = () => {
  return (
    <div className="flex items-center justify-between gap-4 my-6 mx-4">
      <div className="relative w-full max-w-2xl">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          placeholder="Search markets..."
          className="border-slate-200 
            focus-visible:border-blue-500 
            focus-visible:ring-blue-500 
            pl-10 w-full
            h-10
            rounded-lg
            shadow-sm
            hover:border-slate-300
            transition-colors"
        />
      </div>
      <div className="flex items-center gap-3">
        <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
          <SlidersHorizontal className="h-5 w-5 text-gray-600" />
        </button>
        <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
          <Bookmark className="h-5 w-5 text-gray-600" />
        </button>
      </div>
    </div>
  );
};
