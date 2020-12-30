import '../css/station-card.css';
import React from 'react';
import {
  Link
} from "react-router-dom";

export type StationType = {
    name: string,
    abbr: string,
    gtfs_latitude: number,
    gtfs_longitude: number,
    address: string,
    city: string,
    county: string,
    state: string,
    zipcode: number
};

type Props = {
    station: StationType
}

export default function ({ station }: Props) {
    return (
        <article className="StationCard">
            <Link to={`/station/${station.abbr}`}>
                <header>
                    <h2>{station.name}</h2>
                </header>
            <p>{station.address}, {station.city}</p>
            </Link>
        </article>
    )
}