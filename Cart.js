import React, { useState } from 'react';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import './Cart.css';
import { Button, Typography } from '@material-ui/core';

function Cart() {
    const isEmpty = false

    const [product, setProduct] = useState({
        name: 't-Shirt',
        size: 34,
        price: 200,
        color: 'white',
        another: 'etc',
    })

    return (
        <div className='Cart'>
            { 
                isEmpty &&
                <div className='empty'>
                    <AddShoppingCartIcon id='shop-icon'/>
                    <div className='text'>    
                        <Typography variant='h4' style={{fontWeight: '100px'}}>
                            YOUR CART IS CURRENTLY EMPTY
                        </Typography>
                        <div className='sub-text'>    
                            <Typography variant='subtitle1'>
                            Before proceed to checkout you must add some products to your shopping cart.
                            </Typography>
                            <Typography variant='subtitle1'>
                            You will find a lot of interesting products on our "Shop" page.
                            </Typography>
                        </div>

                        <Button variant='outlined' id='cart-button'>CONTINUE SHOPPING</Button>
                    </div>
                </div>
            }
            { 
                !isEmpty && 
                <div className='not-empty'>
                    <img id='prod' src='https://images-na.ssl-images-amazon.com/images/I/513favBlpgL._UX569_.jpg' alt={product.name}/>
                    <div className='details'>
                        <Typography variant='h4' id='head-details'>
                            PRODUCT DETAILS
                        </Typography>
                        <Typography variant='subtitle1'>
                            <li>
                                Size = {product.size}
                            </li>
                            <li>
                                Price = {product.price}$
                            </li>
                            <li>
                                Color = {product.color} 
                            </li>
                            <li>
                                Another One = {product.another}
                            </li>
                        </Typography>
                        <Button variant='outlined' id='cart-button'>Checkout</Button>
                    </div>
                </div>
            }
        </div>
    )
}

export default Cart
