import { useThemeContext } from "../../ix/stores/ThemeProvider";
import clsx from "clsx";

type Props = {
  label: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "success" | "danger" | "warning" | "info";
};

export default function Button({ label, onClick, className, variant = "primary" }: Props) {
  const { darkMode, primary, success, danger, warning, info, secondary, accent } = useThemeContext();

  const variants: Record<string, string> = {
    primary: clsx(primary, "hover:opacity-90"),
    secondary: clsx(secondary.background, secondary.text, "hover:opacity-90"),
    success: clsx(success, "hover:opacity-90"),
    danger: clsx(danger, "hover:opacity-90"),
    warning: clsx(warning, "hover:opacity-90"),
    info: clsx(info, "hover:opacity-90"),
  };

  const base = "px-4 py-2 rounded-md font-semibold hover:transition hover:duration-200";

  return (
    <button onClick={onClick} className={clsx(base, variants[variant], className)}>
      {label}
    </button>
  );
}
