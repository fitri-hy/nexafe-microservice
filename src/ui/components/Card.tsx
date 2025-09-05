import { ReactNode } from "react";

type Props = { title: string; children: ReactNode };

export default function Card({ title, children }: Props) {
  return (
    <div className="p-4 rounded bg-white dark:bg-slate-800 border border-neutral-200/60 dark:border-slate-700/50">
      <h2 className="font-bold text-2xl mb-1 overflow-hidden line-clamp-1">{title}</h2>
      {children}
    </div>
  );
}
