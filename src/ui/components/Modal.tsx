import { ReactNode, useEffect } from "react";
import clsx from "clsx";
import Button from "./Button";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
};

export default function Modal({ isOpen, onClose, title, children }: Props) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 transition-opacity"
      onClick={onClose}
    >
      <div
        className={clsx(
          "bg-white dark:bg-slate-800 rounded-lg w-full max-w-md p-6 shadow-lg relative transform transition-transform",
          "scale-100"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {title && <h2 className="text-xl font-bold mb-4">{title}</h2>}

        <Button
          label="✕"
		  variant="danger" 
          onClick={onClose}
          className="absolute top-3 right-3"
        />

        <div>{children}</div>
      </div>
    </div>
  );
}
