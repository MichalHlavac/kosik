import React,{useContext} from 'react';
import products from './Data';
import{ SCContext} from './SCContext';

export default ()=>{
    const[items, setItem]=useContext(SCContext)
    const productList = products.map(product =>{
        const addItem =()=>items.some(item=>item.name===product.name )?
            (null):
            (setItem(items.concat({"name":product.name,"price":product.price,"quantity":1})));
        return(
            <li key={product.name}>
                <h2>{product.name}</h2>
                <p>{product.price}Kč</p>
                <button onClick={addItem}>Přidat</button>
            </li>)});
    return(
        <ul>
            {productList}
            
        </ul>
    );

}
