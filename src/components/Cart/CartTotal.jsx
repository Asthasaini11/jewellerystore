import React from 'react'
import { Link } from 'react-router-dom'
import PaypalButton from './PaypalButton';


const CartTotal = ({ value, history }) => {
    const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
    return (
        <React.Fragment>


            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-left">

                        <h3 style={{ color: 'teal', fontWeight: 'bold', padding: '1rem' }}>ORDER SUMMERY</h3>
                        <h5>
                            <span className='text-title'>
                                Subtotal :
                            </span>
                            <strong> Rs {cartSubTotal}</strong>
                        </h5>

                        <h5>
                            <span className='text-title'>
                                Shipping Charge :
                            </span>
                            <strong> Rs {cartTax}</strong>
                        </h5>
                        <h5>
                            <span className='text-title'>
                                Total:
                            </span>
                            <strong> Rs {cartTotal}</strong>
                        </h5>
                        {/* <PaypalButton total={cartTotal} clearCart={clearCart} history={history} /> */}


                        <Link to="/">
                            <button className='btn btn-outline-danger text-uppercase mb-3 px-5'
                                type='button' onClick={() => clearCart()}>clear cart</button>
                        </Link>
                    </div>
                </div>
            </div>
        </React.Fragment >
    )
}

export default CartTotal