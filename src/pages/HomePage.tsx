import "../css/home-page.css";
import React, { useState } from "react";
import StationCard from "../components/StationCard";
import SearchBar from "../components/SearchBar";
import { StationType } from "../types";
import StationModal from "../components/StationModal";

type Props = {
  stations: StationType[];
};

export default function HomePage({ stations }: Props) {
  const [filter, setFilter] = useState("");
  const [selectedStation, setSelectedStation] = useState<StationType | null>(
    null
  );

  const handleCloseModal = () => {
    setSelectedStation(null);
  };

  const handleSearch = (searchStr: string) => {
    setFilter(searchStr);
  };

  const handleSelectStation = (station: StationType) => {
    setSelectedStation(station);
  };

  const renderFilteredStations = () => {
    const filteredStations = stations.filter(
      (station) =>
        station.name.toLowerCase().indexOf(filter.toLocaleLowerCase()) >= 0
    );
    return filteredStations.map((station) => (
      <StationCard
        onClick={handleSelectStation}
        station={station}
        key={station.abbr}
      />
    ));
  };

  return (
    <>
      <SearchBar onEnterSearch={handleSearch} />
      <section className="HomePage">
        <h3>Stations</h3>
        {renderFilteredStations()}
      </section>
      <StationModal onClose={handleCloseModal} station={selectedStation} />
    </>
  );
}
