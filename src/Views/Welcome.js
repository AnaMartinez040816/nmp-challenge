import React, {useEffect} from 'react'
import axios from 'axios';
import ShortHeader from '../Components/ShortHeader';
import OnboardingText from '../Components/OnboardingText';
import StepsList from '../Components/StepsList';
import SmallFooter from '../Components/SmallFooter';

const Welcome = () => {
  

  return (  
    <div>
      <ShortHeader />
      <OnboardingText />
      <StepsList />
      <SmallFooter />
    </div>
  )
}

export default Welcome;