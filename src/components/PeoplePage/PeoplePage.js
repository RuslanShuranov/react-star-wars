import React, {Component} from 'react'

import PersonDetails from '../PersonDetails';
import ItemList from '../ItemList';
import ErrorIndicator from '../ErrorIndicator';
import SwapiService from '../../services/swapi-service';

import './PeoplePage.css'
import Row from '../Row'

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

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true
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
            <PersonDetails personId={this.state.selectedPerson}/>
        )

        if (this.state.hasError) {
            return (<ErrorIndicator/>)
        }

        return (
            <Row left={itemList} right={personDetails}/>
        );
    }
}