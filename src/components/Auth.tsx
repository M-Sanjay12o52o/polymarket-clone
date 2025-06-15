"use client";

import Logo from "./Logo";
import HamburgerMenu from "./HamburgerMenu";
import { Button } from "./ui/button";
import { useState } from "react";
import { Authmodal } from "./Authmodal";

export default function Auth() {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      <div className="flex items-center justify-between px-4 h-16 w-full bg-gray-500">
        {showModal && <Authmodal closeModal={() => setShowModal(false)} />}
        <div className="pl-4">
          <Logo />
        </div>
        <div className="flex items-center gap-4">
          <Button
            className="text-blue-500 font-bold outline-none"
            onClick={() => setShowModal(true)}
          >
            Log In
          </Button>
          <Button
            className="bg-blue-600 text-white rounded-md font-bold"
            onClick={() => setShowModal(true)}
          >
            Sign Up
          </Button>
          <HamburgerMenu />
        </div>
      </div>
    </>
  );
}
