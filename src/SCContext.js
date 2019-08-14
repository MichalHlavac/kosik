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
const TContext = React.createContext([{}, () => {}]);

const TProvider = (props) => {
  const [total, setTotal] = useState(0);
  return (
    <TContext.Provider value={[total, setTotal]}>
      {props.children}
    </TContext.Provider>
  );
}

export { SCContext, SCProvider,TContext,TProvider};