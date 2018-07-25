import React from 'react';

export default function ResetEmotion (props){
    if(props.settings.emotion !== ''){
    return(
        <div>
            <button className='Reset' value='Reset' onClick={() => {props.handleReset('')}}>Reset</button>
        </div>
    );
    }
    else{
        return (<div></div>);
    }
}

