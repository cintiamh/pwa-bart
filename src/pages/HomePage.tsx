import "../css/home-page.css";
import React, { useState } from "react";
import StationCard from "../components/StationCard";
import SearchBar from "../components/SearchBar";
import { StationType } from "../types";

type Props = {
  stations: StationType[];
};

export default function HomePage({ stations }: Props) {
  const [filter, setFilter] = useState("");

  const handleSearch = (searchStr: string) => {
    setFilter(searchStr);
  };

  const renderFilteredStations = () => {
    const filteredStations = stations.filter(
      (station) =>
        station.name.toLowerCase().indexOf(filter.toLocaleLowerCase()) >= 0
    );
    return filteredStations.map((station) => (
      <StationCard station={station} key={station.abbr} />
    ));
  };

  return (
    <>
      <SearchBar onEnterSearch={handleSearch} />
      <section className="HomePage">
        <h3>Stations</h3>
        {renderFilteredStations()}
      </section>
    </>
  );
}
