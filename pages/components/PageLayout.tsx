import { ReactNode } from "react";

interface ILayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: ILayoutProps) {
  return (
    <main className="max-w-lg mx-auto mt-20">
      <section>{children}</section>
    </main>
  );
}
