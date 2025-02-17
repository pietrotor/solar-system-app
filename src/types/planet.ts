export interface Planet {
  id: string;
  name: string;
  type: string;
  resume: string;
  introduction: string;
  images: {
    svg: string;
    png: string;
  };
  searchTags: string[];
  features: PlanetFeatures;
  geography: string;
}

export interface PlanetFeatures {
  orbitalPeriod: string[];
  orbitalSpeed: string;
  rotationDuration: string;
  radius: string;
  Diameter: string;
  sunDistance: string;
  oneWayLightToTheSun: string;
  satellites: {
    number: number;
    names: string[];
  };
  temperature: string;
  gravity: string;
}
