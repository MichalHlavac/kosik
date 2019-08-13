import React from 'react';
import ItemList from './ItemList';
import ShoppingCart from './shoppingCart'
import {SCProvider} from './SCContext';

function App() {
  return (
   <div>
     <SCProvider>
      <ItemList/>
      <hr/>
      <ShoppingCart/>
     </SCProvider>
   </div>
  );
}

export default App;
