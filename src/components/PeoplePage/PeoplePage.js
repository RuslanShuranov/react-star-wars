import React, {Component} from 'react'

import ItemDetails from '../ItemDetails';
import ItemList from '../ItemList';
import SwapiService from '../../services/swapiService';

import './PeoplePage.css'
import Row from '../Row'
import ErrorBoundary from '../ErrorBoundary'

export default class PeoplePage extends Component {
    swapiService = new SwapiService();

    state = {
        selectedPerson: 11
    };

    onPersonSelected = (selectedPerson) => {
        this.setState({selectedPerson});
    };

    render() {
        const {getPeople} = this.swapiService
        const itemList = (
            <ItemList
                onItemSelected={this.onPersonSelected}>
            </ItemList>
        );

        const personDetails = (
            <ErrorBoundary>
                <ItemDetails itemId={this.state.selectedPerson}/>
            </ErrorBoundary>
        );

        return (
            <Row left={itemList} right={personDetails}/>
        );
    }
}