import React from 'react';
import './App.css';
import EmotionSelect from './components/EmotionSelect';
import ActionDropdown from './components/ActionDropdowns';

export default function App(props) {
  return (
    <div>
      <EmotionSelect />
      <ActionDropdown />
    </div>
  );
}
