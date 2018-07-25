import React from 'react';
import './App.css';
import EmotionSelect from './components/EmotionSelect';
import ActionDropdown from './components/ActionDropdowns';
import GifDisplay from './components/GifDisplay';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      emotion: ''
    };
  }
  render(){
  return (
    <div>
      <EmotionSelect handleEmotion={emotion => this.setState({emotion})}/>
      <ActionDropdown emotion={this.state.emotion}/>
      <GifDisplay />
    </div>
  );
}
}
