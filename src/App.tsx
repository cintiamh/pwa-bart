import './css/app.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomePage from './pages/HomePage';


export default function () {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <HomePage />
                </Route>
            </Switch>
        </Router>
    );
}