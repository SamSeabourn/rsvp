import React , { useState, useEffect }  from 'react';
import emailjs from 'emailjs-com';
import './App.css';
import Background from './Components/Background';
import PortraitView from './Components/PortraitView';
import LandscapeView from './Components/LandscapeView';
import ConfirmationPage from './Components/ConfitmationPage';
import RSVPAlready from './Components/RSVPAlready';

let keys = require('./keys.json');
emailjs.init(keys["emailJSUserId"]);


function App() {
  const [isPortrait, setIsPortrait] = useState<boolean>(false)
  const [isSendingConfirmation, setIsSendingConfirmation] = useState<boolean>(false)
  const [alreadySentRSVP, setAlreadyRecievedRSVP] = useState<boolean>(false)

  const cookieName ="rsvpd"

  const checkPortrait = () => {
      if (window.innerWidth < 500 ){
        setIsPortrait(true)
      } else {
        setIsPortrait(window.innerHeight > window.innerWidth)
      }
  }

  const createRSVPCookie = (confirmed: boolean) => {
    document.cookie = `${cookieName}=${confirmed}`;
  }

  const hasRSVPd = () => {
    const hasRSVPd = (document.cookie.split('; ').find((c) => c.startsWith(cookieName))?.split('=')[1] === 'true')
    return hasRSVPd
  }

  const handleSubmit = (e: any) => {
    setIsSendingConfirmation(true)
    e.preventDefault();
    emailjs.sendForm('gmail', keys["templateId"], e.target, keys["emailJSUserId"])
      .then((result) => {
          createRSVPCookie(true)
        }, (error) => {
        createRSVPCookie(false)
      })
  }

  useEffect(()=>{
    setAlreadyRecievedRSVP(hasRSVPd())
    checkPortrait()
    window.addEventListener('resize', checkPortrait);
  },[])

  return (
    <Background>
      <div style={{ display: alreadySentRSVP? "none" : "block" }}>
        <div  style={{ display: isSendingConfirmation ? "none" : "block" }}>
          <form id="confirmationForm" onSubmit={(e) => handleSubmit(e) }>
            {isPortrait ? <PortraitView/> : <LandscapeView/>}
          </form>
        </div>
        <div style={{ display: !isSendingConfirmation ? "none" : "block" }}>
          <ConfirmationPage/>
        </div>
      </div>
  
      <div style={{ display: !alreadySentRSVP ? "none" : "block" }}>
        <RSVPAlready/>
      </div>
    </Background>
  );
}

export default App