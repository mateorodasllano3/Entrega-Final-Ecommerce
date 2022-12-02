import { isAsyncThunkAction } from '@reduxjs/toolkit';
import React, { useEffect, useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useDispatch, useSelector } from 'react-redux';
import { checkoutCartThunk, getCartThunk } from '../store/slices/cart.slice';
import { Button } from 'react-bootstrap';

const Cart = ({handleClose, show}) => {

    const dispatch = useDispatch()
    const cart = useSelector(state =>state.cart)

    useEffect(()=>{
        dispatch(getCartThunk())
    },[])


    return (
        <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='Container-Cart'>
          {cart.map(cartproduct =>(
            <div key={cartproduct.id} className='Product-Cart'>
                {cartproduct.brand} <br />
                {cartproduct.title} <br />
                <b>Quantity:</b>  <input type="number" value={cartproduct.productsInCart.quantity}/>
            </div>
          ))}
          <div className='Button-Cart'>
          <Button onClick={()=> dispatch(checkoutCartThunk())}>CheckOut</Button>
          <p> <b>Total</b> $10.000</p>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    );
};

export default Cart;