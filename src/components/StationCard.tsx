import React from 'react';

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
    console.log('station', station);
    return (
        <article>
            <header>
                <h2>{station.name}</h2>
            </header>
            <p>{ station.address}, { station.city }</p>
        </article>
    )
}