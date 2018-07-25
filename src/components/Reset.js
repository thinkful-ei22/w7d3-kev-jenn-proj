import React from 'react';
import './Reset.css';

export default function ResetEmotion (props){
  if(props.settings.emotion !== ''){
    return(
      <div>
        <button className='Reset' value='Reset' onClick={() => {props.handleReset('');}}>Reset</button>
      </div>
    );
  }
  else{
    return (<div></div>);
  }
}

