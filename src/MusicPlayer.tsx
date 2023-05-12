import React, { useEffect, useRef,useState } from 'react';


const MusicPlayer = () => {

  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] =  useState(false);

  const [isMuted, setIsMuted] = useState(false);


  const audioCtx = new AudioContext();
  const audioBufferNode = audioCtx.createBufferSource()
  const gainNode = audioCtx.createGain()
  
  gainNode.connect(audioCtx.destination);

  fetch('./assets/song.mp3')
  .then(response => response.arrayBuffer())
  .then(arrayBuffer => audioCtx.decodeAudioData(arrayBuffer))
  .then(audioBuffer => {
    audioBufferNode.buffer = audioBuffer;
    console.log(audioBuffer)
    setIsLoaded(true)
    audioBufferNode.connect(gainNode);
   // Démarre la lecture à l'instant 0
  })
  .catch(error => console.error('Erreur lors du chargement du fichier audio:', error));


  useEffect(() => {
  
  }, []);

  const startSong = () =>{


    const now = new Date();

    const minutes = now.getMinutes() % 4
    const seconds = now.getSeconds() 
    const milisecond = new Date().getMilliseconds() 

    audioBufferNode.start(0,minutes * 60 + seconds + milisecond/1000 );
  }

  const launchSong = () => {
      startSong()
  };

  const handleToggleMute= () => {
    if (isMuted){
      gainNode.gain.setValueAtTime(2,audioCtx.currentTime)
      setIsMuted(false)
    }else {
      console.log('muted')
      gainNode.gain.setValueAtTime(0,audioCtx.currentTime)
      setIsMuted(true)
    }
  };


  return (
    <div>
      { isLoaded && <button onClick={launchSong}>{'lancer un song'}</button> }
      { isLoaded && <button onClick={handleToggleMute}>{isMuted ? "UNMUTE" : "MUTE"}</button> }
    </div>
  );
};

export default MusicPlayer;