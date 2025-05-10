import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../Header';
import './App.css';
import CharactersPage from '../CharactersPage'
import LocationsPage from '../LocationsPage'
import VehiclesPage from '../VehiclesPage'
import ErrorBoundary from '../ErrorBoundary'

export default class App extends React.Component {

    render() {
        return (
            <Router>
                <div className="container">
                    <ErrorBoundary>
                        <Header/>
                        <Routes>
                            <Route path="/" element={<CharactersPage/>} />
                            <Route path="/people" element={<CharactersPage/>} />
                            <Route path="/planets" element={<LocationsPage/>} />
                            <Route path="/starships" element={<VehiclesPage/>} />
                        </Routes>
                    </ErrorBoundary>
                </div>
            </Router>
        );
    }
};
