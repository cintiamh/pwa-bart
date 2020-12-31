import "./css/app.css";
import React, { useEffect, useState, Suspense, lazy } from "react";
import HomePage from "./pages/HomePage";
import { BART_API_STATIONS_URL } from "./utils";
import { StationType } from "./types";

export default function App() {
  const [stations, setStations] = useState<Array<StationType>>([]);

  useEffect(() => {
    fetch(BART_API_STATIONS_URL)
      .then((response) => response.json())
      .then((data) => {
        const stationsArr = data?.root?.stations?.station || [];
        setStations(
          stationsArr.map((station: any) => {
            return {
              ...station,
              gtfs_latitude: parseFloat(station.gtfs_latitude),
              gtfs_longitude: parseFloat(station.gtfs_longitude),
              zipcode: parseInt(station.zipcode),
            };
          })
        );
      });
  }, []);

  return <HomePage stations={stations} />;
}
