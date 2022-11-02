import React from 'react'

const CartColumns = () => {
    return (
        <div className='container-fluid text-center d-none d-lg-block'>
            <div className="row">

                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Product</p>
                </div>

                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Product Name</p>
                </div>

                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Price</p>
                </div>

                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">quantity</p>
                </div>

                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">remove item</p>
                </div>

                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">total</p>
                </div>
            </div>
        </div>
    )
}

export default CartColumns