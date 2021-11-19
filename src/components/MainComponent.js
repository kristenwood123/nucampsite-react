import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import { CAMPSITES } from '../shared/campsites';
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import Contact from './Contact'
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES
        };
    }

  render() {
      const HomePage = () => {
            return (
                <Home />
            );
        };

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/directory' render={() => <Directory campsites={this.state.campsites} />} />
                    <Route exact path='/contactus' component={Contact} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
        }
      }

export default Main



  // const onCampsiteSelect = (campsiteId) => {
  //   setSelectedCampsite({selectedCampsite: campsiteId})
  // }

  // const HomePage = () => {
  //           return (
  //               <Home />
  //           );
  //       }
  // return (
  //   <div>
  //     <Header/>
  //     <Switch>
  //         <Route path='/home' component={HomePage} />
  //         <Route exact path='/directory' render={() => <Directory campsites={campsites} />} />
  //         <Redirect to='/home'/>
  //       <CampsiteInfo campsite={campsites.filter(campsite => campsite.id === selectedCampsite[0])} />
  //     </Switch>
  //     <Footer/>
  //   </div>