import Image from "next/image";
import Link from "next/link";
import { ChevronRight, MoveDown, ThermometerSun } from "lucide-react";

import { PlanetAnimation } from "./PlanetAnimation";
import { LikeButton } from "../LikeButton";

type PlanetProps = {
  id: string;
  name: string;
  resume: string;
  photo: string;
  temperature: string;
  gravity: string;
};

const Planet = ({
  name,
  photo,
  resume,
  id,
  temperature,
  gravity,
}: PlanetProps) => {
  return (
    <PlanetAnimation id={id}>
      <Link href={`/planets/${name.toLocaleLowerCase()}`}>
        <div className="relative w-full flex justify-end">
          <Image
            src={photo}
            alt={`Imagen del planet ${name}`}
            className="w-60 -mb-32 rounded-full overflow-hidden -mr-2 md:-mr-6 shadow-2xl shadow-black object-cover"
            quality={100}
            width={1000}
            height={1000}
          />
        </div>
        <article className="w-full pt-32 rounded-xl bg-[#042133]/60 group text-white hover:cursor-pointer p-4">
          <div className="flex justify-between items-center">
            <h3 className="uppercase font-black  text-4xl">{name}</h3>

            <LikeButton id={id} />
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-primary">
            <div className="flex gap-1 items-center" title="Temperatura">
              <ThermometerSun />
              <span>{temperature}</span>
            </div>
            <div className="flex gap-1 items-center" title="Gravedad">
              <MoveDown />
              <span>{gravity}</span>
            </div>
          </div>
          <p className="line-clamp-2 text-lg font-medium">{resume}</p>
          <div
            className="flex justify-end mt-3 text-primary group-hover:opacity-100 opacity-0 transition-all duration-700 group-hover:translate-x-1 font-black items-center"
            title={`Ver detalles de ${name}`}
          >
            <span>Ver más</span>
            <ChevronRight size={28} />
          </div>
        </article>
      </Link>
    </PlanetAnimation>
  );
};

export { Planet };
