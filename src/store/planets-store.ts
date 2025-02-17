import { create } from "zustand";
import { persist } from "zustand/middleware";

interface LikeStore {
  likedItems: string[];
  toggleLike: (id: string) => void;
  isLiked: (id: string) => boolean;
  hasHydrated: boolean;
  setHasHydrated: (value: boolean) => void;
}

export const useLikePlanetsStore = create<LikeStore>()(
  persist(
    (set, get) => ({
      likedItems: [],
      hasHydrated: false,
      setHasHydrated: (value) => set({ hasHydrated: value }),
      toggleLike: (id) => {
        set((state) => {
          const isAlreadyLiked = state.likedItems.includes(id);
          return {
            likedItems: isAlreadyLiked
              ? state.likedItems.filter((itemId) => itemId !== id)
              : [...state.likedItems, id],
          };
        });
      },

      isLiked: (id) => get().likedItems.includes(id),
    }),
    {
      name: "planets-liked-storage",
      onRehydrateStorage: () => (state) => {
        if (state) state.setHasHydrated(true); // ✅ Ahora sí podemos actualizar `hasHydrated`
      },
    }
  )
);
