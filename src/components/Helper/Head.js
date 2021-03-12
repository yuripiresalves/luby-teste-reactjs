import React from 'react';

function Head({ title }) {
  React.useEffect(() => {
    document.title = title + ' | Luby Teste';
  }, [title]);

  return <></>;
}

export default Head;
