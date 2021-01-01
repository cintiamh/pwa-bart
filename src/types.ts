export type StationType = {
  name: string;
  abbr: string;
  gtfs_latitude: number;
  gtfs_longitude: number;
  address: string;
  city: string;
  county: string;
  state: string;
  zipcode: number;
};

export type EstimateType = {
  bikeflag: boolean;
  color: string;
  delay: boolean;
  direction: string;
  hexcolor: string;
  length: number;
  minutes: number;
  platform: string;
  time?: Date;
};

export type EtdType = {
  abbreviation: string;
  destination: string;
  estimate: EstimateType[];
  limited: boolean;
};

export type DeparturesType = {
  abbr: string;
  etd: EtdType[];
  name: string;
};
