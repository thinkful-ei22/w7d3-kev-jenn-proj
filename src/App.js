import React from 'react';
import './App.css';
import EmotionSelect from './components/EmotionSelect';
import ActionDropdown from './components/ActionDropdowns';
import GifDisplay from './components/GifDisplay';
import ResetButton from './components/Reset';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      emotion: '',
      action: ''
    };
  }
  render(){
    return (
      <div className='wrapper'>
        <h1>
          If you're....
        </h1>
        <EmotionSelect 
          handleEmotion={emotion => this.setState({emotion})}
          />
        <ActionDropdown 
          emotion={this.state.emotion}
          handleAction={action => this.setState({action})}
        />
        <GifDisplay 
          action={this.state.action}
        />
        <ResetButton settings={this.state} handleReset={setting => {this.setState({emotion: setting, action: setting})}}/>
      </div>
    );
  }
}
