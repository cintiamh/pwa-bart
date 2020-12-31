import "../css/home-page.css";
import React from "react";
import StationCard from "../components/StationCard";
import SearchBar from "../components/SearchBar";
import { StationType } from "../types";

type Props = {
  stations: StationType[];
};

export default function HomePage({ stations }: Props) {
  console.log("HOME");
  return (
    <>
      <SearchBar />
      <section className="HomePage">
        <h3>Stations</h3>
        {stations.map((station) => (
          <StationCard station={station} key={station.abbr} />
        ))}
      </section>
    </>
  );
}
