import React from 'react';
import './EmotionSelect.css';

export default function EmotionSelect(props) {
  return (
    <div className='buttons'>
      <button className='happy emotion' value='happy' 
        onClick={e => props.handleEmotion(e.target.value)}>Happy</button>
      <button className='sad emotion' value='sad' 
        onClick={e => props.handleEmotion(e.target.value)}>Sad</button>
      <button className='angry emotion' value='angry' 
        onClick={e => props.handleEmotion(e.target.value)}>Angry</button>
    </div>
  );
}