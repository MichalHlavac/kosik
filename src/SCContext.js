import React, { useState } from 'react';

const SCContext = React.createContext([{}, () => {}]);

const SCProvider = (props) => {
  const [items, setItem] = useState([]);
  return (
    <SCContext.Provider value={[items, setItem]}>
      {props.children}
    </SCContext.Provider>
  );
}

export { SCContext, SCProvider };