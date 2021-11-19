import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import { CAMPSITES } from '../shared/campsites';
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import Contact from './Contact'
import { Switch, Route, Redirect } from 'react-router-dom';
import { COMMENTS } from '../shared/comments';
import { PARTNERS } from '../shared/partners';
import { PROMOTIONS } from '../shared/promotions';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES,
            comments: COMMENTS,
            partners: PARTNERS,
            promotions: PROMOTIONS
        };
    }

  render() {
      const HomePage = () => {
            return (
                <Home 
                    campsite={this.state.campsites.filter(campsite => campsite.featured)[0]}
                    promotion={this.state.promotions.filter(promotion => promotion.featured)[0]}
                    partner={this.state.partners.filter(partner => partner.featured)[0]}
                />
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