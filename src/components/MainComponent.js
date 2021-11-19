import React, { useState } from 'react';
import Directory from './DirectoryComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import { CAMPSITES } from '../shared/campsites';
import Header from './Header'
import Footer from './Footer'

const MainComponent = () => {
  const [campsites, setCampsites] = useState(CAMPSITES)
  const [selectedCampsite, setSelectedCampsite] = useState(null)


  const onCampsiteSelect = (campsiteId) => {
    setSelectedCampsite({selectedCampsite: campsiteId})
  }
  console.log('hhelooo!', selectedCampsite)

  return (
    <div>
      <Header/>
      <Directory campsites={campsites} onClick={(campsiteId) => onCampsiteSelect(campsiteId)} />
      {/* <CampsiteInfo campsite={campsites.filter(campsite => campsite.id === selectedCampsite[0])} /> */}
      <Footer/>
    </div>
  )
}

export default MainComponent
