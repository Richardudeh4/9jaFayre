import React from 'react'
import BackgroundHeading from './components/BackgroundHeading'
import FayreMain from './components/FayreMain';
import FayreSecondMain from './components/FayreSecondMain';
import Faq from './components/Faq';
import GetStarted from './components/GetStarted';
import Subscribe from './components/Subscribe';
const page = () => {
  return (
  <div className=''>
    <div className=''>
        <BackgroundHeading/>
        <FayreMain/>
        <FayreSecondMain/>
        <Faq/>
        <GetStarted/>
        <Subscribe/>
    </div>
    </div>
  )
}

export default page