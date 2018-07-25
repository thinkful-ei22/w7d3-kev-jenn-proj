import React from 'react';

export default function ActionDropdown (props){
  

  if(props.emotion === ''){
    return(
      <div></div>
    );
  }
  if(props.emotion === 'happy'){
    return(
      <div className='ActionDropdown'>
        <h2>
          ...and you know it...
        </h2>
        <select className='happyAct' onChange={e => {props.handleAction(e.target.value);}}>
          <option value='0'>Select an Action!</option> 
          <option value='clapHappy'>Clap Your Hands!</option>
          <option value='shoutHappy'>Shout Hooray!</option>
          <option value='jumpHappy'>Jump for Joy!</option>
        </select>
      </div>
    );
  }
  if(props.emotion === 'sad'){
    return(
      <div className='ActionDropdown' onChange={e => {props.handleAction(e.target.value);}}>
        <h2>
          ...and you know it...
        </h2>
        <select className='sadAct'>
          <option value='0'>Select an Action!</option>  
          <option value='crySad'>Cry Boo-Hoo</option>
          <option value='frownSad'>Show a Frown</option>
          <option value='nappySad'>Take a Nap</option>
        </select>
      </div>
    );
  }
  if(props.emotion === 'angry'){
    return(
      <div className='ActionDropdown' onChange={e => {props.handleAction(e.target.value);}}>
        <h2>
          ...and you know it...
        </h2>
        <select className='angryAct'> 
          <option value='0'>Select an Action!</option> 
          <option value='tantrumAngry'>Throw Your Stuff!!</option>
          <option value='yellAngry'>Scream and SHOUT!!</option>
          <option value='slamAngry'>Slam the Door!!</option>
        </select>
      </div>
    );
  }
}