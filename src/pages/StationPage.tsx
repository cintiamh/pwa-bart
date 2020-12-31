import "../css/station-page.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StationsContext, StationType } from "../context/StationsContext";
import BackButton from "../components/BackButton";

type StationRouteProp = {
  abbr: string;
};

type StationPageBodyProps = {
  abbr: string;
  stations: StationType[];
};

function StationPageBody({ abbr, stations }: StationPageBodyProps) {
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

  return (
    <>
      {renderHeader()}
      <section className="StationPage"></section>
    </>
  );
}

export default function StationPage() {
  const { abbr } = useParams<StationRouteProp>();

  return (
    <StationsContext.Consumer>
      {(stations) => <StationPageBody abbr={abbr} stations={stations} />}
    </StationsContext.Consumer>
  );
}
