import React from 'react';
import './App.css';
import EmotionSelect from './components/EmotionSelect';
import ActionDropdown from './components/ActionDropdowns';
import GifDisplay from './components/GifDisplay';

export default function App(props) {
  return (
    <div>
      <EmotionSelect />
      <ActionDropdown />
      <GifDisplay />
    </div>
  );
}
