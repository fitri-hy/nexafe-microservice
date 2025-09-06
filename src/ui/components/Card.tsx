import { ReactNode } from "react";
import clsx from "clsx";
import { useThemeContext } from "../../ix/stores/ThemeProvider";
import { colors } from "../tokens/colors";
import { spacing } from "../tokens/spacing";
import { typography } from "../tokens/typography";

type Props = { title: string; children: ReactNode; className?: string };

export default function Card({ title, children, className }: Props) {
  const { darkMode } = useThemeContext();
  const theme = darkMode ? colors.dark : colors.light;

  return (
    <div className={clsx(theme.card, spacing.md, "rounded-md shadow-md bg-white dark:bg-slate-800", className)}>
      <h2 className={clsx(typography.heading, "text-xl mb-2")}>{title}</h2>
      {children}
    </div>
  );
}
