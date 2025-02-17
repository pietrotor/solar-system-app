import { cn } from "@/lib";
import React from "react";

type PageContainerProps = {
  children: React.ReactNode;
  className?: HTMLElement["className"];
};

export const PageContainer: React.FC<PageContainerProps> = ({
  children,
  className,
}) => {
  return (
    <main className={cn("w-full mx-auto max-w-7xl px-3", className)}>
      {children}
    </main>
  );
};
