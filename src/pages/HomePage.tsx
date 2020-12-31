import '../css/home-page.css';
import React from 'react';
import StationCard from '../components/StationCard';
import SearchBar from '../components/SearchBar';
import { StationsContext } from '../context/StationsContext';

export default function () {
    return (
        <StationsContext.Consumer>
            {
                stations => (
                    <>
                        <SearchBar />
                        <section className="HomePage">
                            <h3>Stations</h3>
                            {stations.map(
                                station => <StationCard station={station} key={station.abbr} />
                            )}
                        </section>
                    </>
                )
            }
        </StationsContext.Consumer>
    );
};