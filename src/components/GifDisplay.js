import React from 'react';
import './GifDisplay.css';

export default function GifDisplay(props){

  const actionOptions = [
    {
      name: 'clapHappy',
      id: 'clap',
      url:'https://giphy.com/embed/l3q2XhfQ8oCkm1Ts4',
      href:'https://giphy.com/gifs/oscars-academy-awards-oscars1990-l3q2XhfQ8oCkm1Ts4'
    },
    {
      name: 'shoutHappy',
      id: 'shout',
      url:'https://giphy.com/embed/TdfyKrN7HGTIY',
      href: 'https://giphy.com/gifs/happy-spongebob-squarepants-patrick-TdfyKrN7HGTIY'
    },
    {
      name: 'jumpHappy',
      id: 'jump',
      url:'https://giphy.com/embed/GdLU30LovMpig',
      href: 'https://giphy.com/gifs/gay-cop-parade-GdLU30LovMpig',
    },
    {
      name: 'crySad',
      id: 'cry',
      url:'https://giphy.com/embed/SsjyaYH2gkNCE',
      href: 'https://giphy.com/gifs/SsjyaYH2gkNCE'
    },
    {
      name: 'frownSad',
      id: 'frown',
      url:'https://giphy.com/embed/9Y5BbDSkSTiY8',
      href: 'https://giphy.com/gifs/sad-baby-upset-9Y5BbDSkSTiY8'
    },
    {
      name: 'nappySad',
      id: 'nap',
      url:'https://giphy.com/embed/ikTTV7LQ8mGIw',
      href: 'https://giphy.com/gifs/nap-partners-ikTTV7LQ8mGIw'
    },
    {
      name: 'tantrumAngry',
      id: 'throw',
      url:'https://giphy.com/embed/3o7btNRTJ700Vzmn5e',
      href: 'https://giphy.com/gifs/reactionseditor-reaction-3o7btNRTJ700Vzmn5e'
    },
    {
      name: 'yellAngry',
      id: 'scream',
      url:'https://giphy.com/embed/11tTNkNy1SdXGg',
      href: 'https://giphy.com/gifs/disneypixar-disney-pixar-11tTNkNy1SdXGg'
    },
    {
      name: 'slamAngry',
      id: 'slam',
      url:'https://giphy.com/embed/zKU3i9oHnusko',
      href: 'https://giphy.com/gifs/love-thread-ball-zKU3i9oHnusko'
    }
  ];

  let passedAction = actionOptions.find(action => action.name===props.action);

  function check(props) {
    if (props.action !== '') {
      return (
        <div className="gifHolder">
          <iframe
            id={passedAction.id}
            src={passedAction.url}
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
          />
          <p>
            <a href={passedAction.href}>via GIPHY</a>
          </p>
        </div>
      );
    } else {
      return null;
    }
  }
  return check(props);
}
    
    