import "../css/home-page.css";
import React, { useState } from "react";
import StationCard from "../components/StationCard";
import SearchBar from "../components/SearchBar";
import { DeparturesType, EtdType, StationType } from "../types";
import StationModal from "../components/StationModal";
import { getStationDeparturesUrl } from "../utils";

type Props = {
  stations: StationType[];
};

export default function HomePage({ stations }: Props) {
  const [filter, setFilter] = useState("");
  const [selectedStation, setSelectedStation] = useState<StationType | null>(
    null
  );
  const [departures, setDepartures] = useState<DeparturesType | null>(null);

  const getTimeInFuture = (date: Date, min: number) => {
    return new Date(date.getTime() + min * 60 * 1000);
  };

  const handleCloseModal = () => {
    setSelectedStation(null);
  };

  const handleSearch = (searchStr: string) => {
    setFilter(searchStr);
  };

  const handleSelectStation = (station: StationType) => {
    setSelectedStation(station);
    const departuresUrl = getStationDeparturesUrl(station.abbr);
    fetch(departuresUrl)
      .then((response) => response.json())
      .then((data) => {
        const rawStation = data?.root?.station;
        const rawStationEtd =
          rawStation && rawStation.length > 0 ? rawStation[0] : null;
        if (rawStationEtd) {
          const stationEtd = {
            name: rawStationEtd.name,
            abbr: rawStationEtd.abbr,
            etd: [] as EtdType[],
          };
          if (rawStationEtd.etd && rawStationEtd.etd.length > 0) {
            stationEtd.etd = rawStationEtd.etd.map((e: any) => {
              const estimate =
                e.estimate && e.estimate.length > 0
                  ? e.estimate.map((estimate: any) => {
                      return {
                        ...estimate,
                        bikeflag: estimate.bikeflag === "1",
                        delay: estimate.delay === "1",
                        length: parseInt(estimate.length),
                        minutes: parseInt(estimate.minutes),
                        time: getTimeInFuture(
                          new Date(),
                          parseInt(estimate.minutes)
                        ),
                      };
                    })
                  : [];
              return {
                ...e,
                limited: e.limited === "1",
                estimate,
              };
            });
          }
          setDepartures(stationEtd);
        }
      });
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
      <StationModal
        departures={departures}
        onClose={handleCloseModal}
        station={selectedStation}
      />
    </>
  );
}
