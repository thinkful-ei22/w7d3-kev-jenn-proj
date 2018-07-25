import React from 'react';

export default function ActionDropdown (props){
    return (
        <div className='ActionDropdown'>
            <select className='happyAct'> 
                <option value='clapHappy'>Clap Your Hands!</option>
                <option value='shoutHappy'>Shout Hooray!</option>
                <option value='jumpHappy'>Jump for Joy!</option>
            </select>

            <select className='sadAct'> 
                <option value='crySad'>Cry Boo-Hoo</option>
                <option value='frownSad'>Show a Frown</option>
                <option value='nappySad'>Take a Nap</option>
            </select>

            <select className='angryAct'> 
                <option value='tantrumAngry'>Throw Your Stuff!!</option>
                <option value='yellAngry'>Scream and SHOUT!!</option>
                <option value='slamAngry'>Slam the Door!!</option>
            </select>
        </div>
    );
}