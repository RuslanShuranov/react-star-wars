import React from 'react';

import Header from '../Header';

import './App.css';
import Row from '../Row'
import ItemDetails from '../ItemDetails'
import SwapiService from '../../services/swapiService'
import Record from '../Record'
import PeoplePage from '../PeoplePage'
import RandomPlanet from '../RandomPlanet'

export default class App extends React.Component {

    swapiService = new SwapiService()

    render() {
        const {getPerson, getStarship, getPersonImage, getPlanetImage, getStarhsipImage} = this.swapiService

        const personDetails = (
            <ItemDetails itemId={11}
                         getData={getPerson}
                         getImageUrl={getPersonImage}>
                <Record label="Gender" field="gender"/>
                <Record label="Eye color" field="eyeColor"/>
            </ItemDetails>
        )

        const starshipDetails = (
            <ItemDetails itemId={12}
                         getData={getStarship}
                         getImageUrl={getStarhsipImage}>
                <Record field="model" label="Model"/>
                <Record field="length" label="Length"/>
                <Record field="costInCredits" label="Cost"/>
            </ItemDetails>
        )

        return (
            <div className="container">
                <Header/>
                <RandomPlanet/>
                <PeoplePage personDetails={personDetails}/>
            </div>
        );
    }
};