import React, { useState } from 'react';
import Directory from './DirectoryComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import { CAMPSITES } from '../shared/campsites';
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import { Switch, Route, Redirect } from 'react-router-dom';

const MainComponent = () => {
  const [campsites, setCampsites] = useState(CAMPSITES)
  const [selectedCampsite, setSelectedCampsite] = useState(null)


  const onCampsiteSelect = (campsiteId) => {
    setSelectedCampsite({selectedCampsite: campsiteId})
  }

  return (
    <div>
      <Header/>
      <Switch>
          <Route path='/home' component={<Home/>} />
          <Route exact path='/directory' render={() => <Directory campsites={campsites} />} />
          <Redirect to='/home'/>
        {/* <CampsiteInfo campsite={campsites.filter(campsite => campsite.id === selectedCampsite[0])} /> */}
      </Switch>
      <Footer/>
    </div>
  )
}

export default MainComponent
