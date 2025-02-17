"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";

import { cn } from "@/lib";

type BackButtonProps = {
  to: string;
  className?: HTMLElement["className"];
};

export const BackButton = ({ to, className }: BackButtonProps) => {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push(to);
    }
  };
  return (
    <button
      type="button"
      onClick={handleBack}
      className={cn(
        "pb-3 flex justify-start mt-3 text-primary opacity-100 transition-all duration-700 translate-x-1 font-black items-center",
        className
      )}
    >
      <ChevronLeft />
      Volver
    </button>
  );
};
