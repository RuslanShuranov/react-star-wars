import React, {Component} from 'react'

import Row from '../Row'
import ErrorBoundary from '../ErrorBoundary'
import {StarshipDetails, StarshipList} from '../SwComponents'

export default class VehiclesPage extends Component {
    state = {
        selectedStarship: null
    };

    onStarshipSelected = (selectedStarship) => {
        this.setState({selectedStarship});
    };

    render() {
        const itemList = (<StarshipList
                onItemSelected={this.onStarshipSelected}
            />);

        const starshipDetails = (<ErrorBoundary>
                <StarshipDetails itemId={this.state.selectedStarship}/>
            </ErrorBoundary>);

        return (<>
                <h4>Vehicles:</h4>
                <Row left={itemList} right={starshipDetails}/>
            </>);
    }
}
