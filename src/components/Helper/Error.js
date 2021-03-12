import React from 'react';

function Error({ error }) {
  return (
    <p style={{ color: '#EB2D2D', marginBottom: '20px', fonSixe: '14px' }}>
      {error}
    </p>
  );
}

export default Error;
