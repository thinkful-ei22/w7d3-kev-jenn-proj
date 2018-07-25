import React from 'react';
import ActionDropdown from './ActionDropdowns';

export default function EmotionSelect(props) {
  return (
    <div className='buttons'>
      <button className='happy' value='happy' onClick={e => props.handleEmotion(e.target.value)}>Happy</button>
      <button className='sad' value='sad' onClick={e => props.handleEmotion(e.target.value)}>Sad</button>
      <button className='angry' value='angry' onClick={e => props.handleEmotion(e.target.value)}>Angry</button>
    </div>
  );
}