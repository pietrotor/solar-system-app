import { cn } from "@/lib";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

type BackButtonProps = {
  to: string;
  className?: HTMLElement["className"];
};

export const BackButton = ({ to, className }: BackButtonProps) => {
  return (
    <Link
      href={to}
      className={cn(
        "pb-3 flex justify-start mt-3 text-primary opacity-100 transition-all duration-700 translate-x-1 font-black items-center",
        className
      )}
    >
      <ChevronLeft />
      Volver
    </Link>
  );
};
