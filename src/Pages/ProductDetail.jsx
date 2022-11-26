import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductsThunk } from '../store/slices/products.slice';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
const Product = () => {
    
    const {id} = useParams()
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getProductsThunk)
    },[])

    const productsList = useSelector(state => state?.products.data?.products)
    const product = productsList?.find(productItem => productItem.id === Number (id))
    const categoryproducts = productsList?.filter(productItem => productItem.category.id === product.category.id)
    console.log(product)
    //console.log(categoryproducts)
    return ( 
        <>
        <div className='Container-ProductDetail'>
            <div className='ProductDetail-Img'>
                <img src={product?.productImgs[0]} alt="" />
                <div className='ProductDetail-Img-Other'>
                <img src={product?.productImgs[1]} alt="" />
                <img src={product?.productImgs[2]} alt="" />
                </div>
            </div>
            <div className='ProductDetail-Title'>
                <h4>{product?.title}</h4>
                <p>{product?.description} </p>
                <p> <span>Price</span>  <b> ${product?.price} </b> </p>
                <Button>Add to cart <box-icon name='cart-alt' type='solid' color='#ffffff' ></box-icon></Button>
            </div>
            </div>
            <div className='ProductDetail-Similar'>
            <h2>Discover Similar Items</h2>
            <section className='Article-Lists-Products'>
            {categoryproducts?.map((product)=>(
                <li className='ProductDetail-Box'>
                <br />
                <img src={product.productImgs?.[0]} alt="" />
                <Link to={`/product/${product.id}`} className="Link-Title">{product.title}</Link>
                    <p> Price: <br /> <span>${product.price} </span> </p>
                    <Button variant="primary" className='Button-Cart-Home'><box-icon name='cart-add'></box-icon></Button>
                </li>

            ))}
            </section>
           
        </div>
        </>
    );
};

export default Product;