import "../css/station-page.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import { StationType } from "../types";
import StationDepartures from "../components/StationDepartures";

type StationRouteProp = {
  abbr: string;
};

type Props = {
  stations: StationType[];
};

export default function StationPage({ stations }: Props) {
  const { abbr } = useParams<StationRouteProp>();
  const [station, setStation] = useState<StationType | null>(null);

  useEffect(() => {
    const selectedStation = stations.find((st) => st.abbr === abbr);
    if (selectedStation) {
      setStation(selectedStation);
    }
  }, []);

  const renderHeader = () => {
    if (!station) {
      return null;
    }
    return (
      <header className="StationPageHeader">
        <div className="StationPageHeader-control">
          <BackButton />
        </div>
        <div className="StationPageHeader-content">
          <h1>{station.name}</h1>
          <p>
            {station.address}, {station.city}
          </p>
        </div>
      </header>
    );
  };

  const renderDepartures = () => {
    if (!station) {
      return null;
    }
    return <StationDepartures station={station} />;
  };

  return (
    <>
      {renderHeader()}
      {renderDepartures()}
    </>
  );
}
