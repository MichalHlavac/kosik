import React,{useContext} from 'react';
import {SCContext,TContext} from './SCContext';


export default ()=>{
    const[items, setItem]=useContext(SCContext);
    const [total,setTotal]=useContext(TContext);
    const shopingCart = items.map((item,I) =>{
        const cloneItems= [...items];
        const oldTotal = Number(total);
        const rowPrice=item.price*item.quantity;
        const Price =item.price;
        const newItems =(newValue)=>{cloneItems.splice(I,1,{"name":item.name,"price":item.price,"quantity":newValue})
                return(cloneItems)};
        const updateItem = e=>setItem(newItems(e.target.value))& setTotal(oldTotal-rowPrice+(e.target.value*Price));
        const deleteItem = ()=>setItem(items.filter(i=>i.name!==item.name))& setTotal(oldTotal-rowPrice);
        
        return(<div key={item.name}>
                <h3>{item.name}</h3>
                <p>{item.price}Kč/mj</p>
                <p>{item.quantity}Ks</p>
                <p>{rowPrice}Kč</p>
                <input type="number" value={item.quantity} min="1" max="100" onChange={updateItem}/>
                <button onClick={deleteItem}>X</button>
                </div>)});
    return(
        <div>
            <h2>Košík</h2>
            {shopingCart}
            <h3>celkem{" "}{total}Kč</h3>
        </div>);
}