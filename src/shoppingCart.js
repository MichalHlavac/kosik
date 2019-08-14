import React,{useContext,useState} from 'react';
import {SCContext} from './SCContext';

export default ()=>{
    const[items, setItem]=useContext(SCContext);
    const [total,setTotal]=useContext(TContext);
    const shopingCart = items.map(item =>{
        const cloneItems= [...items];
        const oldTotal = total;
        const ID = items.indexOf(item);
        const newItems =(newValue)=>{cloneItems.splice(ID,1,{"name":item.name,"price":item.price,"quantity":newValue})
                return(cloneItems)};
        const updateItem = e=>setItem(newItems(e.target.value)&setTotal(oldTotal-rowPrice+(item.price*e.target.value)));
        const deleteItem = ()=>setItem(items.filter(i=>i.name!==item.name)& setTotal(oldTotal-rowPrice));
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
            <p>celkem{" "}{total}Kč</p>
        </div>);
}
