import React, { useEffect, useState } from 'react';
import { BART_API_STATIONS_URL } from '../utils';
import StationCard from '../components/StationCard';
import SearchBar from '../components/SearchBar';

export default function () {
    const [stations, setStations] = useState([]);

    useEffect(() => {
        fetch(BART_API_STATIONS_URL)
            .then(response => response.json())
            .then(data => {
                const stationsArr = data?.root?.stations?.station || [];
                setStations(stationsArr.map((station: any) => {
                    return {
                        ...station,
                        gtfs_latitude: parseFloat(station.gtfs_latitude),
                        gtfs_longitude: parseFloat(station.gtfs_longitude),
                        zipcode: parseInt(station.zipcode)
                    }
                }));
            });
    }, []);

    return (
        <>
            <SearchBar />
            <section>
                {stations.map(
                    station => <StationCard station={station} key={station.abbr} />
                )}
            </section>
        </>
    );
};