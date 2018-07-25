import React from 'react';

export default function GifDisplay(props){
  if(props.action===''){
    return(
      <div>
      </div>
    );
  }
  if(props.action === 'clapHappy'){
    return(
      <div>
        <iframe id='clap' src="https://giphy.com/embed/97C8ATlp05AoE" width="180" height="144" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
        <p><a href="https://giphy.com/gifs/slow-clap-clapping-gif-97C8ATlp05AoE">via GIPHY</a></p>
      </div>);
  }
  if(props.action === 'shoutHappy'){
    return(
      <div>
        <iframe id='shout'src="https://giphy.com/embed/TdfyKrN7HGTIY" width="280" height="175" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
        <p><a href="https://giphy.com/gifs/happy-spongebob-squarepants-patrick-TdfyKrN7HGTIY">via GIPHY</a></p>
      </div>
    );}
  if(props.action === 'jumpHappy'){
    return(
      <div>
        <iframe id='jump'src="https://giphy.com/embed/GdLU30LovMpig" width="180" height="160" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
        <p><a href="https://giphy.com/gifs/gay-cop-parade-GdLU30LovMpig">via GIPHY</a></p>
      </div>
    );}
  if(props.action === 'crySad'){
    return(
      <div>
        <iframe id='cry'src="https://giphy.com/embed/SsjyaYH2gkNCE" width="180" height="160" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
        <p><a href="https://giphy.com/gifs/SsjyaYH2gkNCE">via GIPHY</a></p>
      </div>
    );}
  if(props.action === 'frownSad'){
    return(
      <div>
        <iframe id='frown'src="https://giphy.com/embed/9Y5BbDSkSTiY8" width="180" height="136" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
        <p><a href="https://giphy.com/gifs/sad-baby-upset-9Y5BbDSkSTiY8">via GIPHY</a></p>
      </div>
    );}
  if(props.action === 'nappySad'){
    return(
      <div>
        <iframe id='nap' src="https://giphy.com/embed/ikTTV7LQ8mGIw" width="180" height="180" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
        <p><a href="https://giphy.com/gifs/nap-partners-ikTTV7LQ8mGIw">via GIPHY</a></p>
      </div>
    );}
  if(props.action === 'tantrumAngry'){
    return(
      <div>
        <iframe id='throw' src="https://giphy.com/embed/3o7btNRTJ700Vzmn5e" width="180" height="192" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
        <p><a href="https://giphy.com/gifs/reactionseditor-reaction-3o7btNRTJ700Vzmn5e">via GIPHY</a></p>
      </div>
    );}
  if(props.action === 'yellAngry'){
    return(
      <div>
        <iframe id='scream' src="https://giphy.com/embed/11tTNkNy1SdXGg" width="180" height="167" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
        <p><a href="https://giphy.com/gifs/disneypixar-disney-pixar-11tTNkNy1SdXGg">via GIPHY</a></p>
      </div>
    );}
  if(props.action === 'slamAngry'){
    return(
      <div>
        <iframe id='slam' src="https://giphy.com/embed/KRxcgvd5fLiWk" width="180" height="124" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
        <p><a href="https://giphy.com/gifs/tonyawards-theatre-tony-awards-the-tonys-KRxcgvd5fLiWk">via GIPHY</a></p>
      </div>
    );}
}