import React, {Component} from 'react'

import ItemDetails from '../ItemDetails';
import ItemList from '../ItemList';
import ErrorIndicator from '../ErrorIndicator';
import SwapiService from '../../services/swapi-service';

import './PeoplePage.css'
import Row from '../Row'
import ErrorBoundary from '../ErrorBoundary'

export default class PeoplePage extends Component {

    swapiService = new SwapiService()

    state = {
        selectedItem: 4,
        hasError: false
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedItem: id
        })
    }

    render() {

        const {getPeople, getPersonImage} = this.swapiService

        const itemList = (
            <ItemList onPersonSelected={this.onPersonSelected}
                      getData={getPeople}
                      getImageUrl={getPersonImage}>

                {(i) => `${i.name} (${i.gender}, ${i.birthYear})`}
            </ItemList>


        )

        const itemDetails = (
            <ErrorBoundary>
                <ItemDetails itemId={this.state.selectedItem}/>
            </ErrorBoundary>
        )

        return (
            <Row left={itemList} right={itemDetails}/>
        );
    }
}