import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { actions } from 'react-redux-form'

// Components
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import Contact from './Contact'
import Directory from './DirectoryComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import About from './About'

import { addComment, fetchCampsites, fetchPartners, postFeedback } from '../redux/ActionCreators'

const mapStateToProps = state => {
    return {
        campsites: state.campsites,
        comments: state.comments,
        partners: state.partners,
        promotions: state.promotions,
    }
}

const mapDispatchToProps = {
    addComment: (campsiteId, rating, author, text) => (addComment(campsiteId, rating, author, text)),
    fetchCampsites: () => fetchCampsites(),
    fetchPartners: () => fetchPartners(),
    resetFeedbackForm: () => (actions.reset('feedbackForm')),
    postFeedback: (text) => (postFeedback(text))
};

class Main extends Component {
    
    componentDidMount() {
        this.props.fetchCampsites();
        this.props.fetchPartners();
    }

  render() {
      const HomePage = () => {
            return (
                
                <Home 
                    campsite={this.props.campsites.campsites.filter(campsite => campsite.featured)[0]}
                    campsitesLoading={this.props.campsites.isLoading}
                    campsitesErrMess={this.props.campsites.errMess}
                    promotion={this.props.promotions.promotions.filter(promotion => promotion.featured)[0]}
                    partner={this.props.partners.partners.filter(partner => partner.featured)[0]}
                    partnersLoading={this.props.partners.isLoading}
                    partnersErrMess={this.props.partners.errMess}
                />
            );
        };

        const CampsiteWithId = ({match}) => {
            return (
                <CampsiteInfo 
                    campsite={this.props.campsites.campsites.filter(campsite => campsite.id === +match.params.campsiteId)[0]}
                    isLoading={this.props.campsites.isLoading}
                    errMess={this.props.campsites.errMess}
                    comments={this.props.comments.filter(comment => comment.campsiteId === +match.params.campsiteId)}
                    commentsErrMess={this.props.campsites.errMess}
                    addComment={this.props.addComment}
                />
            );
        };    

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/directory' render={() => <Directory campsites={this.props.campsites} />} />
                    <Route exact path='/aboutus' render={() => <About partners={this.props.partners} />} />
                    <Route exact path='/contactus' render={() => <Contact postFeedback={this.props.postFeedback} />} />
                    <Route path='/directory/:campsiteId' component={CampsiteWithId} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
        }
      }

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));