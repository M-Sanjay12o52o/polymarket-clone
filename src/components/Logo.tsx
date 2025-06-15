import { Mountain } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex flex-row justify-between items-center">
      <Mountain className="text-white mr-1" />
      <h1 className="text-white text-2xl">Polymarket</h1>
    </div>
  );
}
