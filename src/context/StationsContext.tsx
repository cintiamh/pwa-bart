import { createContext } from 'react';

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

// default value is empty array
export const StationsContext = createContext<Array<StationType>>([]);
