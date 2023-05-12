import React, { useEffect, useRef,useState } from 'react';


type UnlockerProps = {
    unlock: ()=>void
}



const Unlocker = (props:UnlockerProps)=>{

    const  PASS_PHRASE= 'morgane'

    const [password,setPassword ]= useState('')

    const handleClick = () =>{ 
        if (password === PASS_PHRASE ){
            props.unlock()
        }
    }

    return (
        <div>
            <div>Tape le mot de passe:</div>
            <input type="text" value={ password } onChange={(e)=>{setPassword(e.target.value)}}/>
             <button onClick={handleClick}> enter</button>
        </div>
    )
}


export default Unlocker;