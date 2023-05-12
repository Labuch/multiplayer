import React, { useState } from 'react';

import './App.css';
import Countdown from './Countdown';
import Timer from './Timer';
import MusicPlayer from './MusicPlayer';
import Unlocker from './Unlocker';

function App() {

 const [isPlaying, setPlaying] = useState(false)
 const [isBroadcasting, setBroadcasting ] = useState(false)


 const unlock = ()=>{

  console.log( 'tu es debloqué')
  setPlaying(true)
 } 

  return (
    <div className="App">
        { 
        <> 
        <Timer/>
        <MusicPlayer/>
        <Countdown/>
        </> }
        <Unlocker unlock={unlock}/>
    </div>
  );
}

export default App;
