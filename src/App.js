import React, { Component } from 'react';
import './App.css';


// Components
import Main from './components/MainComponent';
import Header from './components/Header'
import Footer from './components/Footer'

class App extends Component {

    render() {
        return (
            <div>
                <Header />
                <Directory campsites={this.state.campsites} onClick={campsiteId => this.onCampsiteSelect(campsiteId)} />
                <CampsiteInfo campsite={this.state.campsites.filter(campsite => campsite.id === this.state.selectedCampsite)[0]} />
                <Footer />
            </div>
        );
    }
}

export default App;
