"use client";

import React, { ChangeEvent } from "react";

import { cn } from "@/lib";
import { Search, X } from "lucide-react";
import { Button } from "../Button";

type SearchbarProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "onChange"
> & {
  value: string;
  onChange: (value: string, event?: ChangeEvent<HTMLInputElement>) => void;
  onSearch?: (value: string) => void;
  onClear?: () => void;
};

const Searchbar = ({
  value,
  onChange,
  className,
  onSearch,
  onClear,
  ...props
}: SearchbarProps) => {
  return (
    <div className="flex justify-start gap-2">
      <div className={cn("relative max-w-md w-full")}>
        <div
          className={cn(
            "absolute inset-y-0 start-0 flex items-center justify-center text-muted-foreground/80 peer-disabled:opacity-50 ps-3"
          )}
        >
          <Search width={22} height={22} />
        </div>
        <input
          value={value}
          onChange={(event) => onChange(event.target.value, event)}
          className={cn(
            "flex w-full rounded-md border border-white bg-transparent px-4 py-[8.5px] text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-white disabled:cursor-not-allowed disabled:opacity-50 md:text-sm peer ps-9 pe-9",
            className
          )}
          {...props}
        />
        {value && (
          <div
            className={cn(
              "absolute inset-y-0 end-0 flex items-center justify-center text-muted-foreground/80 peer-disabled:opacity-50 pe-0"
            )}
          >
            <Button
              onClick={() => {
                if (onClear) onClear();
                else {
                  onChange("");
                  onSearch?.("");
                }
              }}
              variant={"icon"}
              size={"icon"}
            >
              <X width={20} height={20} />
            </Button>
          </div>
        )}
      </div>
      {onSearch && <Button onClick={() => onSearch(value)}>Buscar</Button>}
    </div>
  );
};

export { Searchbar };
