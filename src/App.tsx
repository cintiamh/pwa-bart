import './css/app.css';
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import StationPage from './pages/StationPage';
import { BART_API_STATIONS_URL } from './utils';
import { StationsContext } from './context/StationsContext';

export default function App() {
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
        <StationsContext.Provider value={stations}>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route path="/search">
                        <SearchPage />
                    </Route>
                    <Route path="/station/:abbr">
                        <StationPage />
                    </Route>
                </Switch>
            </Router>
        </StationsContext.Provider>
    );
}