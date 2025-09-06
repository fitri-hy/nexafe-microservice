import { InputHTMLAttributes } from "react";
import clsx from "clsx";
import { useThemeContext } from "../../ix/stores/ThemeProvider";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export default function Input({ label, className, ...rest }: Props) {
  const { darkMode } = useThemeContext();
  return (
    <div className="flex flex-col">
      {label && <label className="mb-1 font-semibold">{label}</label>}
      <input
        className={clsx(
          "rounded-md px-4 py-2 border focus:outline-none focus:outline-none transition",
          darkMode ? "bg-slate-800 border-slate-700 text-white" : "bg-white border-gray-300 text-black",
          className
        )}
        {...rest}
      />
    </div>
  );
}
