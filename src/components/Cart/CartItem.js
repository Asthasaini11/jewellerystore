import React from 'react'
import { Delete } from '@material-ui/icons';

import '../../App.css'
const CartItem = ({ item, value }) => {
    const { id, title, img, price, total, count } = item;
    const { increment, decrement, removeItem } = value;
    return (
        <div>
            <div className="row my-2 text-capitalize text-center">
                <div className="col-10 mx-auto col-lg-2">
                    <img src={img} style={{ width: '10rem', height: '10rem' }} className="img-fluid" alt="product" />
                </div>


                <div className="col-10 mx-auto col-lg-2">
                    <span style={{ color: 'teal', fontWeight: 'bold' }} className="d-lg-none">Product :</span>
                    {title}
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <span className="d-lg-none">Price :</span>
                    {price}
                </div>

                <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                    <div className="d-flex justify-content-center">
                        <div>

                            <span className="btn btn-black mx-1" style={{ fontWeight: 'bold' }}
                                onClick={() => decrement(id)}>-</span>

                            <span className="btn btn-black mx-1" style={{ fontWeight: 'bold' }}>{count}</span>

                            <span className="btn btn-black mx-1" style={{ fontWeight: 'bold' }}
                                onClick={() => increment(id)}>+</span>
                        </div>
                    </div>
                </div>
                {/* */}

                <div className="col-10 mx-auto col-lg-2">
                    <div className="cart-icon" onClick={() => removeItem(id)}>
                        <Delete />
                    </div>
                </div>

                <div className="col-10 mx-auto col-lg-2">
                    <strong> item total : Rs {total}</strong>

                </div>
            </div>
        </div>
    )
}



export default CartItem