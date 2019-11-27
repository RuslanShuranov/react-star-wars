import React from 'react';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import PeoplePage from '../PeoplePage/PeoplePage';

import './App.css';

export default class App extends React.Component {

    render() {
        return (
            <div className="container">
                <Header/>
                <RandomPlanet/>
                <PeoplePage/>
            </div>
        );
    }
};