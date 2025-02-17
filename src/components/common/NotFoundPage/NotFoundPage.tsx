import { MarsIcon } from "../icons";

type NotFoundPageProps = {
  text?: string;
};

export const NotFoundPage = ({
  text = "Página no encontrada",
}: NotFoundPageProps) => {
  return (
    <div className="w-full flex flex-col gap-3 justify-center items-center h-full min-h-[40dvh]">
      <MarsIcon width={150} height={150} />
      <h3>{text}</h3>
    </div>
  );
};
