"use client";

import React from "react";
import { cn } from "@/lib";
import { ChevronDown } from "lucide-react";

type Option = {
  value: string;
  label: string;
};

type SelectProps = {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
};

const Select = ({ options, value, onChange, className }: SelectProps) => {
  return (
    <div className="relative w-full">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          "flex w-full appearance-none rounded-md border border-white bg-transparent px-4 py-[8.5px] text-base shadow-sm transition-colors focus-visible:outline-none focus-visible:border-white disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="text-black"
          >
            {option.label}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 end-0 flex items-center pe-3 pointer-events-none text-muted-foreground">
        <ChevronDown width={20} height={20} />
      </div>
    </div>
  );
};

export { Select };
