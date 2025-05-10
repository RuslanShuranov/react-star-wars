import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
    return (
        <div className="header d-flex">
            <h3>
                <Link to="/">Star DB</Link>
            </h3>
            <ul className="d-flex">
                <li>
                    <Link to="/people">Characters</Link>
                </li>
                <li>
                    <Link to="/planets">Locations</Link>
                </li>
                <li>
                    <Link to="/starships">Vehicles</Link>
                </li>
            </ul>
        </div>
    );
};

export default Header
