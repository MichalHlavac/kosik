import React from 'react';
import ItemList from './ItemList';
import ShoppingCart from './shoppingCart'
import {SCProvider,TProvider} from './SCContext';

function App() {
  return (
   <div>
     <SCProvider>
     <TProvider>
      <ItemList/>
      <hr/>
      <ShoppingCart/>
     </TProvider>
     </SCProvider>
   </div>
  );
}

export default App;
