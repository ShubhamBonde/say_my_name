import NameForm from '../NameForm/NameForm'
import { useState } from 'react';
import './ImageContainer.css'



export default function AppContainer() {
  let [backgroundImg, setBackgroundImage] = useState("walter1.png");
   return (
    <>
      <div className='appContainer' style={{
        backgroundImage: `url(./images/${backgroundImg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '40% 60%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <h1 className='sayNameTitle'>SAY MY NAME</h1>
        <NameForm setBg={setBackgroundImage}/>
      </div>
    </>
   )
}