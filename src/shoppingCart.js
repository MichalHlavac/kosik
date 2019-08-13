import React,{useContext,useState} from 'react';
import {SCContext} from './SCContext';

export default ()=>{
    const[items, setItem]=useContext(SCContext);
    const [totalP,setTotalP]=useState(0)
    const shopingCart = items.map(item =>{
        const cloneItems= [...items];
        const ID = items.indexOf(item);
        const newItems =(newValue)=>{cloneItems.splice(ID,1,{"name":item.name,"price":item.price,"quantity":newValue})
                return(cloneItems)};
        const updateItem = e=>setItem(newItems(e.target.value));
        const deleteItem = ()=>setItem(items.filter(i=>i.name!==item.name));
        const rowPrice= item.price*item.quantity;
        return(<div key={item.name}>
                <h2>{item.name}</h2>
                <p>{item.price}Kč</p>
                <p>{item.quantity}Ks</p>
                <p>{rowPrice}Kč</p>
                <input type="number" value={item.quantity} min="1" max="100" onChange={updateItem}/>
                <button onClick={deleteItem}>X</button>
                </div>)});
    return(<div>
            {shopingCart}
            <p>celkem{" "}{totalP}Kč</p>
        </div>);
}