import React, { useState } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './DirectoryComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import { CAMPSITES } from '../shared/campsites';

import React from 'react'

const MainComponent = () => {
  const [campsites, setCampsites] = useState(CAMPSITES)
  const [selectedCampsite, setSelectedCampsite] = useState(null)


  const onCampsiteSelect = (campsiteId) => {
    setSelectedCampsite({selectedCampsite: campsiteId})
  }
  return (
    <div>
      <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">NuCamp</NavbarBrand>
          </div>
      </Navbar>
    </div>
  )
}

export default MainComponent