import React, {Component} from 'react'

import Row from '../Row'
import ErrorBoundary from '../ErrorBoundary'
import {PlanetDetails, PlanetList} from '../SwComponents'

export default class LocationsPage extends Component {
    state = {
        selectedPlanet: null
    };

    onPlanetSelected = (selectedPlanet) => {
        this.setState({selectedPlanet});
    };

    render() {
        const itemList = (<PlanetList
                onItemSelected={this.onPlanetSelected}
            />);

        const planetDetails = (<ErrorBoundary>
                <PlanetDetails itemId={this.state.selectedPlanet}/>
            </ErrorBoundary>);

        return (<>
                <h4>Locations:</h4>
                <Row left={itemList} right={planetDetails}/>
            </>);
    }
}
