import React, {Component} from 'react'

import PersonDetails from '../PersonDetails';
import ItemList from '../ItemList';
import ErrorIndicator from '../ErrorIndicator';
import SwapiService from '../../services/swapi-service';

import './PeoplePage.css'
import Row from '../Row'
import ErrorBoundary from '../ErrorBoundary'

export default class PeoplePage extends Component {

    swapiService = new SwapiService()

    state = {
        selectedPerson: 4,
        hasError: false
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    }

    render() {

        const itemList = (
            <ItemList onPersonSelected={this.onPersonSelected}
                      getData={this.swapiService.getPeople}>

                {(i) => `${i.name} (${i.gender}, ${i.birthYear})`}
            </ItemList>


        )

        const personDetails = (
            <ErrorBoundary>
                <PersonDetails personId={this.state.selectedPerson}/>
            </ErrorBoundary>
        )

        return (
            <Row left={itemList} right={personDetails}/>
        );
    }
}