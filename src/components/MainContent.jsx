import React from 'react'
import '../styles/components/maincontent.sass'

import AboutContainer from './AboutContainer'
import TecnologiesContainer from './TecnologiesContainer'

const MainContent = () => {
  return (
    <main id='main-content'>
      <AboutContainer />
      <TecnologiesContainer />
    </main>
  )
}

export default MainContent