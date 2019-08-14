import React from 'react';
import ItemList from './ItemList';
import ShoppingCart from './shoppingCart'
import {SCProvider,TProvider} from './SCContext';

function App() {
  return (
   <div>
     <h1>Nákupní košík - testovací úloha</h1>
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