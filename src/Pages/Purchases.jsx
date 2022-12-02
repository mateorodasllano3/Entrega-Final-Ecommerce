import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPurchasesThunk } from '../store/slices/purchases.slice';
import { Link } from 'react-router-dom';

const Purchases = () => {
        const dispatch = useDispatch();

        const purchases = useSelector(state => state.purchases)

        useEffect(()=>{
            dispatch(getPurchasesThunk())
        }, [])
    
    return (
        <div className='Purchases-Container'>
           
            {
                purchases.map(purchase => (
                    <ul key={purchase.id} className="Purchases-Group">
                        {/* {purchase.cart.products[0]?.title} */}
                        {purchase.cart.products.map(product => ( 
                            <li key= {product.id}>
                                    <div className='Purchases-General'>
                                        <div className='Title-Purchases-User'>
                                <Link to={`/product/${product.id}`}>
                                <h4>{product.title}</h4>
                                </Link>
                                        </div>
                                        <div className='Info-Purchases-User'>
                                <p> <b>Purchase Date:</b> {product.createdAt}</p>
                                <p> <b>Price:</b> {product.price}</p>
                                <p> <b>Quantity:</b> {product.productsInCart.quantity}</p>
                                        </div>
                                </div>
                                <hr />
                            </li>
                        ))}
                        
                    </ul>
                ))
            }
        </div>
    );
};

export default Purchases;