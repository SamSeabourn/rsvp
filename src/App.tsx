import React , { useState, useEffect }  from 'react';
import './App.css';
import Background from './Components/Background';
import MainImage from './Components/MainImage'
import PortraitView from './Components/PortraitView';
import LandscapeView from './Components/LandscapeView';


function App() {
  const [isPortrait, setIsPortrait] = useState<boolean>(false)

  const checkPortrait = () => {
    setIsPortrait(window.innerHeight > window.innerWidth)
  }

  useEffect(()=>{
    checkPortrait()
    window.addEventListener('resize', checkPortrait);
  },[])

  return (
    <Background>
      { isPortrait? <PortraitView/> : <LandscapeView/> }
    </Background>
  );
}

export default App;
