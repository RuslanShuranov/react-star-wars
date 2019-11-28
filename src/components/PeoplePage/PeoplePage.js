import React, {Component} from 'react'

import ItemDetails from '../ItemDetails';
import ItemList from '../ItemList';
import ErrorIndicator from '../ErrorIndicator';
import SwapiService from '../../services/swapiService';

import './PeoplePage.css'
import Row from '../Row'
import ErrorBoundary from '../ErrorBoundary'

export default class PeoplePage extends Component {

    swapiService = new SwapiService()

    state = {
        selectedItem: null,
        hasError: false
    }

    onItemSelected = (id) => {
        this.setState({
            selectedItem: id
        })
    }

    render() {

        const {getPeople, getPerson, getPersonImage} = this.swapiService

        const itemList = (
            <ErrorBoundary>
                <ItemList onItemSelected={this.onItemSelected}
                          getData={getPeople}>

                    {(i) => `${i.name} (${i.gender}, ${i.birthYear})`}
                </ItemList>
            </ErrorBoundary>


        )

        const itemDetails = (
            <ErrorBoundary>
                <ItemDetails getData={getPerson}
                             itemId={this.state.selectedItem}
                             getImageUrl={getPersonImage}/>
            </ErrorBoundary>
        )

        return (
            <Row left={itemList} right={itemDetails}/>
        );
    }
}