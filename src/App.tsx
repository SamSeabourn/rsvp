import React , { useState, useEffect }  from 'react';
import './App.css';
import Background from './Components/Background';
import MainImage from './Components/MainImage'
import PortraitView from './Components/PortraitView';
import LandscapeView from './Components/LandscapeView';
import ConfirmationPage from './Components/ConfitmationPage';

function App() {
  const [isPortrait, setIsPortrait] = useState<boolean>(false)
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false)

  const checkPortrait = () => {
    setIsPortrait(window.innerHeight > window.innerWidth)
  }

  useEffect(()=>{
    checkPortrait()
    window.addEventListener('resize', checkPortrait);
  },[])

  return (
    <Background>
      <div style={{ display: isConfirmed ? "none" : "block" }}>
        {isPortrait ? <PortraitView setIsConfirmed={setIsConfirmed}/> : <LandscapeView setIsConfirmed={setIsConfirmed}/>}
      </div>
      <div style={{ display: !isConfirmed ? "none" : "block" }}>
        <ConfirmationPage/>
      </div>
    </Background>
  );
}

export default App;
