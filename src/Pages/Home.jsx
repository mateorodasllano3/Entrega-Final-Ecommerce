import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsThunk, FilterProductsCategory, FilterTittleThunk } from '../store/slices/products.slice';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'boxicons'
const Home = () => {

    const dispatch = useDispatch()

    const products = useSelector(state => state.products.data?.products)

    const [categoryList, setCategoryList] = useState([])

    const[inputSearch, setInputSearch]= useState("")

    useEffect(() => {
        axios.get("https://e-commerce-api.academlo.tech/api/v1/products/categories")
            .then(res => setCategoryList(res.data.data.categories))
    }, [])

    //console.log(categoryList)


    useEffect(() => {
        dispatch(getProductsThunk)
    }, [])
    return (
        <div className='Container-Home'>
            <section className='Section-Home'>
            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="What are you looking for..."
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    value={inputSearch}
                    onChange={e => setInputSearch(e.target.value)}
                />
                <Button variant="primary" 
                onClick={()=>dispatch(FilterTittleThunk(inputSearch))}>
                <box-icon name='search'></box-icon>
                </Button>
            </InputGroup>
            <article className='Article-Lists-Products'>
           {products?.map((product) => (
                <li key={product.id} className="Product">
                    <div className='Product-Img'>
                    <img src={product.productImgs[0]} alt="" />
                    </div>
                    <div className='Product-Title'>
                    <Link to={`/product/${product.id}`} className="Link-Title">{product.title}</Link>
                    <p> Price: <br /> <span>${product.price} </span> </p>
                    <Button variant="primary" className='Button-Cart-Home'><box-icon name='cart-add'></box-icon></Button>
                    </div>
                </li>
            ))}
            </article>
            </section>
            <article className='Category-Home'>
                <h2>Category</h2>
                <hr />
             {categoryList.map((category) => (
                <Button
                    key={category.name}
                    onClick={() => dispatch(FilterProductsCategory(category.id))}>
                    {category.name}
                </Button>
            ))}
            </article>
        </div>
    );
};

// john@gmail.com
// john1234

export default Home;