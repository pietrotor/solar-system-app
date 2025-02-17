"use client";

import { Heart } from "lucide-react";

import { Button } from "@/components";
import { cn } from "@/lib";
import { useLikePlanetsStore } from "@/store";

type LikeButtonProps = {
  id: string;
};

const LikeButton = ({ id }: LikeButtonProps) => {
  const { isLiked, toggleLike, hasHydrated } = useLikePlanetsStore();

  if (!hasHydrated) return;

  return (
    <Button
      variant={"icon"}
      size={"icon"}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleLike(id);
      }}
      title="Agregar a favoritos"
    >
      <Heart
        className={cn(
          "stroke-primary",
          isLiked(id) ? "fill-primary" : "fill-transparent"
        )}
      />
    </Button>
  );
};

export { LikeButton };
