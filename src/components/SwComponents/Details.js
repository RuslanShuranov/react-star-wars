import React from 'react'
import StarWarsDBService from '../../services/starWarsDBService'
import Record from '../Record'
import ItemDetails from '../ItemDetails'

const swapiService = new StarWarsDBService()

const {
    getPerson,
    getPlanet,
    getStarship
} = swapiService

const PersonDetails = ({itemId}) => {
    return(
        <ItemDetails itemId={itemId}
                     getData={getPerson}>
            <Record label="Description" field="description"/>
        </ItemDetails>
    )
}
const PlanetDetails = ({itemId}) => {
    return(
        <ItemDetails itemId={itemId}
                     getData={getPlanet}>
            <Record label="Description" field="description"/>
        </ItemDetails>
    )
}
const StarshipDetails = ({itemId}) => {
    return(
        <ItemDetails itemId={itemId}
                     getData={getStarship}>
            <Record label="Description" field="description"/>
        </ItemDetails>
    )
}

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
}
