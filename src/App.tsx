import React , { useState, useEffect }  from 'react';
import emailjs from 'emailjs-com';
import './App.css';
import Background from './Components/Background';
import PortraitView from './Components/PortraitView';
import LandscapeView from './Components/LandscapeView';
import ConfirmationPage from './Components/ConfitmationPage';
import { keys } from './keys';

function App() {
  const [isPortrait, setIsPortrait] = useState<boolean>(false)
  const [isSendingConfirmation, setIsSendingConfirmation] = useState<boolean>(false)
  const cookieName ="rsvpd"

  const checkPortrait = () => {
    setIsPortrait(window.innerHeight > window.innerWidth)
  }



  const createRSVPCookie = (confirmed: boolean) => {
    document.cookie = `${cookieName}=${confirmed}`;
  }

  const checkExistingCookie = () => {
    if (document !== undefined) {
      const hasRSVPs = document.cookie.split('; ').find((c) => c.startsWith(cookieName))?.split('=')[1]
      console.log(hasRSVPs)
    }      
  }

  const handleSubmit = (e: any) => {
    setIsSendingConfirmation(true)
    e.preventDefault();
    emailjs.sendForm('gmail', keys.templateId, e.target, keys.emailJSUserId)
      .then((result) => {
          createRSVPCookie(true)
        }, (error) => {
        createRSVPCookie(true)
      })
  }


  useEffect(()=>{
    checkExistingCookie()
    checkPortrait()
    window.addEventListener('resize', checkPortrait);
  },[])

  return (
    <Background>
      <div  style={{ display: isSendingConfirmation ? "none" : "block" }}>
        <form id="confirmationForm" onSubmit={ handleSubmit }>
          {isPortrait ? <PortraitView/> : <LandscapeView/>}
        </form>
      </div>
      <div style={{ display: !isSendingConfirmation ? "none" : "block" }}>
        <ConfirmationPage/>
      </div>
    </Background>
  );
}

export default App