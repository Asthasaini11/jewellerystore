import React from 'react'
import Title from '../Title';
import CartColumns from './CartColumns'
import EmptyCart from './EmptyCart';
import { ProductConsumer } from '../../Context'
import CartList from './CartList';
import CartItem from './CartItem';
import CartTotal from './CartTotal';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const history = useNavigate();
    return (
        <section>
            <ProductConsumer>
                {(value) => {
                    const { cart } = value;
                    if (cart.length > 0) {
                        return (
                            <React.Fragment>
                                <Title name="your" title="cart"></Title>

                                <CartColumns />
                                <CartList value={value} />
                                <CartTotal value={value} history={history} />

                            </React.Fragment>
                        );
                    }
                    else {
                        return (<EmptyCart />)
                    }
                }}

            </ProductConsumer>


        </section>
    )
}

export default Cart