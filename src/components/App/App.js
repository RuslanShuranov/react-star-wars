import React from 'react';

import Header from '../Header';

import './App.css';
import Row from '../Row'
import ItemDetails from '../ItemDetails'
import SwapiService from '../../services/swapi-service'
import {Record} from '../ItemDetails/ItemDetails'

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
                <Record label="Model" field="model"/>
                <Record label="Length" field="length"/>
                <Record label="Cost" field="costInCredits"/>
            </ItemDetails>
        )

        return (
            <div className="container">
                <Header/>
                {/*<RandomPlanet/>*/}
                {/*<PeoplePage/>*/}
                <Row left={personDetails} right={starshipDetails}/>
            </div>
        );
    }
};