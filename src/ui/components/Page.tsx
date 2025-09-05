import { ReactNode, useEffect } from "react";

interface PageProps {
  title: string;
  children: ReactNode;
}

export default function Page({ title, children }: PageProps) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return <>{children}</>;
}
