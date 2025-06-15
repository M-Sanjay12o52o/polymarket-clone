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
        className="bg-white text-black w-[350px] p-6 rounded-2xl shadow-lg flex flex-col gap-4"
      >
        {/* Modal content here */}
      </div>
    </div>
  );
};
