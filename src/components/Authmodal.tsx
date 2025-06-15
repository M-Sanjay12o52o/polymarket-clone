import Image from "next/image";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useEffect, useRef } from "react";

export const Authmodal = ({ closeModal }: { closeModal: () => void }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !(modalRef.current as HTMLElement).contains(event.target as Node)
      ) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [closeModal]);

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div
        ref={modalRef}
        className="bg-white text-black w-[350px] p-6 rounded-2xl shadow-lg
      flex flex-col gap-4"
      >
        <h1 className="text-xl font-semibold text-center">
          Welcome to Polymarket Clone
        </h1>

        <Button className="flex items-center gap-2 justify-center">
          <Image
            src={"/google.svg"}
            alt="google image"
            width={20}
            height={20}
          />
          Continue with Google
        </Button>
        {/* TODO: Divider */}
        <div className="flex items-center gap-2">
          <hr className="flex-grow border-t" />
          <span className="text-xs text-muted-foreground">or</span>
          <hr className="flex-grow border-t" />
        </div>

        <span />
        <Input placeholder="Enter Email" />
        <Button>Continue</Button>

        {/* TODO: All the different crypto wallets option should go here */}
        <div className="flex justify-center gap-2 text-xs text-muted-foreground mt-2">
          <span>Terms</span>
          <span>.</span>
          <span>Privacy</span>
        </div>
      </div>
    </div>
  );
};
