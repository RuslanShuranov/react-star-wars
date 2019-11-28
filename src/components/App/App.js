import React from 'react';

import Header from '../Header';

import './App.css';
import ItemDetails from '../ItemDetails'
import SwapiService from '../../services/swapiService'
import Record from '../Record'
import PeoplePage from '../PeoplePage'
import ErrorBoundary from '../ErrorBoundary'
import {PersonDetails, PersonList, PlanetDetails, PlanetList, StarshipDetails, StarshipList} from '../SwComponents'

export default class App extends React.Component {

    swapiService = new SwapiService()

    render() {
        return (
            <div className="container">
                <ErrorBoundary>
                    <Header/>
                    {/*<RandomPlanet/>*/}
                    <PersonList/>
                    <StarshipList/>
                    <PlanetList/>
                </ErrorBoundary>
            </div>
        );
    }
};