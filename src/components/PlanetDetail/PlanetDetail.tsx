import Image from "next/image";
import { MoveDown, ThermometerSun } from "lucide-react";

import { Planet } from "@/types";
import { LikeButton } from "../LikeButton";
import { BackButton } from "../common";

type PlanetDetailProps = {
  planet: Planet;
};

const PlanetDetail = ({ planet }: PlanetDetailProps) => {
  return (
    <>
      <div className="md:order-2">
        <BackButton to="/" className="md:!hidden flex" />
        <Image
          src={planet.images.png}
          alt={`Foto del planet ${planet.name}`}
          className="rounded-full overflow-hidden -mr-6 shadow-2xl shadow-black"
          quality={100}
          width={1000}
          height={1000}
        />
      </div>
      <section className="md:order-1">
        <BackButton to="/" className="!hidden md:!flex" />
        <div className="flex justify-between items-center">
          <h1>{planet.name}</h1>
          <LikeButton id={planet.id} />
        </div>
        <div className="flex flex-wrap gap-3 text-primary font-bold text-lg mb-3">
          <div className="flex gap-1 items-center" title="Temperatura">
            <ThermometerSun />
            <span>{planet.features.temperature}</span>
          </div>
          <div className="flex gap-1 items-center" title="Gravedad">
            <MoveDown />
            <span>{planet.features.gravity}</span>
          </div>
        </div>
        <p>{planet.resume}</p>
        <div className="flex gap-5 h-full mt-4">
          <div className="min-h-full h-h-full w-[2px] bg-primary"></div>
          <ul>
            <li className="mb-2">
              <span className="text-primary font-semibold">
                Periodo orbital:
              </span>{" "}
              {planet.features.orbitalPeriod}
            </li>
            <li className="mb-2">
              <span className="text-primary font-semibold">
                Velocidad orbital:
              </span>{" "}
              {planet.features.orbitalSpeed}
            </li>
            <li className="mb-2">
              <span className="text-primary font-semibold">
                Tiempo de rotación:
              </span>{" "}
              {planet.features.rotationDuration}
            </li>
            <li className="mb-2">
              <span className="text-primary font-semibold">
                Distancia del sol:
              </span>{" "}
              {planet.features.sunDistance}
            </li>
            <li className="mb-2">
              <span className="text-primary font-semibold">Satelites:</span>{" "}
              {planet.features.satellites.number}
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export { PlanetDetail };
