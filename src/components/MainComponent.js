import React, { useState } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './DirectoryComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import { CAMPSITES } from '../shared/campsites';


const MainComponent = () => {
  const [campsites, setCampsites] = useState(CAMPSITES)
  const [selectedCampsite, setSelectedCampsite] = useState(null)


  const onCampsiteSelect = (campsiteId) => {
    setSelectedCampsite({selectedCampsite: campsiteId})
  }
  console.log('hhelooo!', selectedCampsite)

  return (
    <div>
      <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">NuCamp</NavbarBrand>
          </div>
      </Navbar>
      <Directory campsites={campsites} onClick={(campsiteId) => onCampsiteSelect(campsiteId)} />
      <CampsiteInfo campsite={campsites.filter(campsite => campsite.id === selectedCampsite[0])} />
    </div>
  )
}

export default MainComponent
