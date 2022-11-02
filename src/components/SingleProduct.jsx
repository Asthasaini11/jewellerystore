import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ProductConsumer } from '../Context'
import { ShoppingCartOutlined } from '@material-ui/icons'
import PropTypes from 'prop-types'
import { propTypes } from 'react-bootstrap/esm/Image'

const ProductWrapper = styled.div`
    .card{
        border-color:transparent;
        transition:all 1s linear;

    }
    .card-footer{
        background:transparent;
        border-top:transparent;
        transition:all 1s linear;
    }
    &:hover{
        .card{
            border:0.04rem rgba(0,0,0,0.2);
            box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
        }
        .card-footer{
            background:rgba(247, 247,247);
        }
    }
        .img-container{
    position: relative;
    overflow: hidden;
}
    .card-img-top{
    transition:all 1s linear;
}
    .img-container:hover .card-img-top{
    transform: scale(1.2);
}
    .cart-btn{
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    color:teal;
    background-color:white;
    border: none;
    
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%)
    transition:all 1s linear;
}
    .img-container:hover .cart-btn{
    transform:translate(0, 0);
}

.cart-btn:hover{
    color:white;
    background-color:teal;
    cursor:pointer;
}
    
`
const SingleProduct = ({ id, title, img, price, inCart }) => {
    return (
        <ProductWrapper className='col-9 mx-auto col-md-6 col-lg-3'>
            <div className='card'>
                <ProductConsumer>
                    {(value) => (
                        <div className='img-container pd-5'
                            onClick={() => value.handleDetail(id)
                            }>
                            <Link to="/details">
                                <img src={img} alt="product image" className='card-img-top' />
                            </Link>
                            <button className='cart-btn'
                                onClick={() => {
                                    value.addToCart(id);
                                    value.openModel(id);
                                }}
                                disabled={inCart ? true : false}>
                                {inCart ? (<p className='text-Capitalize mb-0' disabled> in Cart</p>) : (<ShoppingCartOutlined />
                                )}
                            </button>


                        </div>
                    )}



                </ProductConsumer>

                {/* cart footer*/}
                <div className='card-footer d-flex justify-content-between'>
                    <p className='align-self-center mb-0'>
                        {title}
                    </p>
                    <h5 className='text-blue font-italic mb-0' style={{ color: 'teal', fontWeight: 'bold' }}>
                        <span className='mr-1'>Rs</span>
                        {price}
                    </h5>

                </div>
            </div>
        </ProductWrapper>
    )
}
SingleProduct.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inCart: PropTypes.bool.isRequired,

}

export default SingleProduct
