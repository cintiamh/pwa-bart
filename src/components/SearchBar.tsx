import '../css/search-bar.css';
import React from 'react';
import MenuButton from './MenuButton';
import {
  Link
} from "react-router-dom";

export default function () {
    return (
        <header className="SearchBar">
            <div className="SearchBar-wrapper">
                <MenuButton />
                <span className="SearchLink"><Link to="/search">Search station</Link></span>
            </div>
        </header>
    );
}

// TODO: Store 5 most recent searches to show in suggestions