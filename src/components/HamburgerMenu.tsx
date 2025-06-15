"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { Switch } from "./ui/switch";
import { useState } from "react";
import { Label } from "./ui/label";

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);
  let closeTimeout: ReturnType<typeof setTimeout>;

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <div
          onMouseEnter={() => {
            clearTimeout(closeTimeout);
            setOpen(true);
          }}
          onMouseLeave={() => {
            closeTimeout = setTimeout(() => setOpen(false), 200);
          }}
          className="p-2 rounded-md hover:bg-gray-200 transition-colors cursor-pointer"
        >
          <Menu className="w-5 h-5 text-black" />
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        side="bottom"
        className="bg-gray-100 shadow-lg rounded-md p-2 w-48"
        onMouseEnter={() => {
          clearTimeout(closeTimeout);
          setOpen(true);
        }}
        onMouseLeave={() => {
          closeTimeout = setTimeout(() => setOpen(false), 200);
        }}
      >
        <DropdownMenuItem className="hover:bg-gray-200 rounded-md px-2 py-1">
          Sign Up
        </DropdownMenuItem>
        <DropdownMenuItem className="hover:bg-gray-200 rounded-md px-2 py-1">
          Log In
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="hover:bg-gray-200 rounded-md px-2 py-1">
          Election
        </DropdownMenuItem>
        <DropdownMenuItem className="hover:bg-gray-200 rounded-md px-2 py-1">
          Sports
        </DropdownMenuItem>
        <DropdownMenuItem className="hover:bg-gray-200 rounded-md px-2 py-1">
          Rewards
        </DropdownMenuItem>
        <DropdownMenuItem className="hover:bg-gray-200 rounded-md px-2 py-1">
          Documentation
        </DropdownMenuItem>
        <DropdownMenuItem className="hover:bg-gray-200 rounded-md px-2 py-1">
          Terms of Use
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          {/* TODO: This doesn't look right */}
          <div className="flex items-center justify-between w-full hover:bg-gray-200 rounded-md px-2 py-1">
            <Label htmlFor="airplane-mode">Dark Mode</Label>
            <Switch id="airplane-mode" />
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default HamburgerMenu;
