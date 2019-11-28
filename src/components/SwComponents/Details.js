import React from 'react'
import SwapiService from '../../services/swapiService'
import Record from '../Record'
import ItemDetails from '../ItemDetails'

const swapiService = new SwapiService()

const {
    getPerson,
    getPlanet,
    getStarship,
    getPersonImage,
    getPlanetImage,
    getStarhsipImage,
} = swapiService

const PersonDetails = ({itemId}) => {
    return(
        <ItemDetails itemId={itemId}
                     getData={getPerson}
                     getImageUrl={getPersonImage}>
            <Record label="Gender" field="gender"/>
            <Record label="Eye color" field="eyeColor"/>
        </ItemDetails>
    )
}
const PlanetDetails = ({itemId}) => {
    return(
        <ItemDetails itemId={itemId}
                     getData={getPlanet}
                     getImageUrl={getPlanetImage}>
            <Record label="Name" field="name"/>
            <Record label="Population" field="population"/>
            <Record label="Rotation period" field="rotationPeriod"/>
        </ItemDetails>
    )
}
const StarshipDetails = ({itemId}) => {
    return(
        <ItemDetails itemId={itemId}
                     getData={getStarship}
                     getImageUrl={getStarhsipImage}>
            <Record field="model" label="Model"/>
            <Record field="length" label="Length"/>
            <Record field="costInCredits" label="Cost"/>
        </ItemDetails>
    )
}

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
}