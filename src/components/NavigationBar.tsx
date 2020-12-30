import '../css/navigation-bar.css';
import React from 'react';
import SearchIcon from './SearchIcon';
import {
  Link
} from "react-router-dom";

export default function () {
    return (
        <header className="NavigationBar">
            <span className="HeaderLogo"><Link to="/">PWA Bart</Link></span>
            <nav>
                <ul className="NavigationMenuItems">
                    <li><Link to="/search"><SearchIcon /></Link></li>
                    <li>Advisory</li>
                </ul>
            </nav>
        </header>
    );
}