import { MarsIcon } from "../common";

export const NoResults = () => {
  return (
    <div className="w-full flex flex-col gap-3 justify-center items-center h-full min-h-[40dvh]">
      <MarsIcon width={150} height={150} />
      <h3 className="text-center">No se llegarón a encontrar resultados</h3>
    </div>
  );
};
