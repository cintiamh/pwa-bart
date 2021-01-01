import "../css/station-card.css";
import React from "react";

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

type Props = {
  onClick?: (station: StationType) => void;
  station: StationType;
};

export default function ({ onClick, station }: Props) {
  const handleClickCard = () => {
    if (onClick) {
      onClick(station);
    }
  };

  return (
    <article className="StationCard">
      <a onClick={handleClickCard}>
        <header>
          <h2>{station.name}</h2>
        </header>
        <p>
          {station.address}, {station.city}
        </p>
      </a>
    </article>
  );
}
