import './css/app.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import StationPage from './pages/StationPage';

export default function () {
    return (
        <Router>
            <Switch>
                <Route path="/search">
                    <SearchPage />
                </Route>
                <Route path="/station/:abbr">
                    <StationPage />
                </Route>
                <Route path="/">
                    <HomePage />
                </Route>
            </Switch>
        </Router>
    );
}