import React, { useState } from 'react'
import SingleProduct from './SingleProduct'
import Title from './Title';
import { ProductConsumer } from '../Context';
const ProductList = () => {
    // const [products, setProducts] = useState([storeProducts]);
    // console.log(products);
    return (
        <>
            <div className="py-5">
                <div className="container">
                    <Title name='Best' title='Sellers'></Title>
                    <div className="row">
                        <ProductConsumer>
                            {value => {
                                return value.products.map(product => {
                                    return <SingleProduct key={product.id} {...product} />
                                })
                            }}
                        </ProductConsumer>
                    </div>
                </div>
                {/* <h1>kjhi</h1> */}
            </div>

        </>

    )
}

export default ProductList