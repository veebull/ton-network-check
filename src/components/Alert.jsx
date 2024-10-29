import React from 'react';

export function Alert({ message, onClose }) {
  return (
    <div className='alert'>
      <p>{message}</p>
      <button onClick={onClose}>✕</button>
    </div>
  );
}
