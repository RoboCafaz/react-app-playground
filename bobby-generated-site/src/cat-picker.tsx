import React, { useState } from 'react';
import { makeCatNoise } from './make-cat-noise';

/**
 * Collection of buttons that a user can click on to
 *   show the different types of noises the different
 *   cats make.
 */
export const CatPicker = () => {
  const [message, setMessage] = useState('Click a cat to make a cat noise.');
  return (
    <React.Fragment>
      {message}
      <br />
      {['mousse', 'molly', 'oscar'].map((cat) => (
        <button key={cat} onClick={() => setMessage(makeCatNoise(cat))}>
          {cat.toUpperCase()}
        </button>
      ))}
    </React.Fragment>
  );
};
