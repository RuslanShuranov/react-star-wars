import React from 'react'
import SwapiService from '../../services/swapiService'
import {withData} from '../HocHelper/WithData'
import ItemList from '../ItemList'

const swapiService = new SwapiService()

const {getPeople, getPlanets, getStarships} = swapiService

const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    }
}

const listWithChildren = withChildFunction(
    ItemList, ({name}) => <span>{name}</span>
)

const PersonList = withData(listWithChildren, getPeople)
const PlanetList = withData(listWithChildren, getPlanets)
const StarshipList = withData(listWithChildren, getStarships)

export {
    PersonList,
    PlanetList,
    StarshipList
}