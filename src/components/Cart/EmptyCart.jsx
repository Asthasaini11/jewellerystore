import React from 'react'


const EmptyCart = () => {

    return (

        <div >
            <h1 className='text-title text-center mx-auto col-10 p-2'>Your cart is currently empty</h1>
            <div style={{
                display: 'flex', justifyContent: 'center'
                , alignItems: 'center',


            }}>
                <img src="https://media.istockphoto.com/vectors/empty-shopping-bag-icon-cute-disappointed-shopping-bag-flat-thin-line-vector-id841884438?k=20&m=841884438&s=612x612&w=0&h=yi6txQa52uAXEaKRLuijrmzYAT8GQrrv8NhHSD7lMOE=" alt="empty cart" />

            </div>

        </div>

    )
}
// const Image = styled.img`
//     ="https://media.istockphoto.com/vectors/empty-shopping-bag-icon-cute-disappointed-shopping-bag-flat-thin-line-vector-id841884438?k=20&m=841884438&s=612x612&w=0&h=yi6txQa52uAXEaKRLuijrmzYAT8GQrrv8NhHSD7lMOE=";
// `

export default EmptyCart