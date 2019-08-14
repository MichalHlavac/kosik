import React,{useContext} from 'react';
import products from './Data';
import{ SCContext,TContext} from './SCContext';

export default ()=>{
    const [total,setTotal]=useContext(TContext);
    const oldTotal=total;
    const[items, setItem]=useContext(SCContext)
    const productList = products.map(product =>{
        const addItem =()=>items.some(item=>item.name===product.name )?
            (null):
            (setItem(items.concat({"name":product.name,"price":product.price,"quantity":1}))& setTotal(oldTotal+product.price));
        return(
            <li key={product.name}>
                <h3>{product.name}</h3>
                <p>{product.price}Kč</p>
                <button onClick={addItem}>Přidat</button>
            </li>)});
    return(
        <div>
            <h2>Zboží</h2>
            <ul>
                {productList}
            </ul>
        </div>
    );
};