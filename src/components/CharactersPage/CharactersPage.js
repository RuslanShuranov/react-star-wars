import React, {Component} from 'react'

import Row from '../Row'
import ErrorBoundary from '../ErrorBoundary'
import { PersonList, PersonDetails } from '../SwComponents'

export default class CharactersPage extends Component {
    state = {
        selectedPerson: null
    };

    onPersonSelected = (selectedPerson) => {
        this.setState({selectedPerson});
    };

    render() {
        const itemList = (
            <PersonList
                onItemSelected={this.onPersonSelected}
            />
        );

        const personDetails = (
            <ErrorBoundary>
                <PersonDetails itemId={this.state.selectedPerson}/>
            </ErrorBoundary>
        );

        return (
            <>
                <h4>Characters:</h4>
                <Row left={itemList} right={personDetails}/>
            </>
        );
    }
}
