import React from 'react'
import { ProductConsumer } from '../Context'
import { Link } from 'react-router-dom'
import { ButtonContainer } from './Button'

const Details = () => {
    return (
        <ProductConsumer>
            {(value) => {
                const { id, company, img, info, price, title, inCart } = value.detailProduct;
                return (
                    <div className="container py-5" >
                        {/* title */}
                        <div className="row">
                            <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                <h1>{title}</h1>
                            </div>
                        </div>
                        {/* end of title */}
                        {/*product info */}
                        <div className="row">
                            <div className="col-10 mx-auto col-md-6 my-3" >
                                <img src={img} className="img-fluid" alt="product" />
                            </div>
                            {/* product text*/}
                            <div className="col-10 mx-auto col-md-6 my-3 text-capitalize" >
                                <h4 className='text-title text-uppercase text-muted mt-3 mb-2'> Made By:<span className='text-uppercase'>
                                    {company}
                                </span></h4>

                                <h4 style={{ color: 'teal' }}>
                                    <strong>
                                        price: <span>Rs</span>
                                        {price}
                                    </strong>
                                </h4>

                                <p className='text-capitalize mt-3 mb-0 ' style={{ fontWeight: 'bold' }}>
                                    Product Detail:
                                </p>
                                <p className='text-muted lead'>{info}</p>

                                {/* buttons*/}
                                <Link to='/'>
                                    <ButtonContainer>
                                        Continue Shopping
                                    </ButtonContainer>
                                </Link>

                                <ButtonContainer cart
                                    disabled={inCart ? true : false}
                                    onClick={() => {
                                        value.addToCart(id);
                                        value.openModel(id);
                                    }}>
                                    {inCart ? 'in Cart' : 'add to cart'}
                                </ButtonContainer>
                            </div>
                        </div>
                    </div>
                )
            }}
        </ProductConsumer>
    )
}

export default Details