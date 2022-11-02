import React from 'react'
import { useLocation } from 'react-router-dom'
import styled from "styled-components";
import media from '../responsive'


const Container = styled.div`
     
      ${media.phone`
        padding:20px;  
        flex-direction:column;
        width:10%;
        max-width:400px;
        height:auto;
        display:flex;
        align-items:center;
        justify-content:center;
    
  `}
`


const Default = () => {
    const location = useLocation();
    return (
        // <div className="container">
        //     <div className="row">


        <div className="col-10 mx-auto text-center   text-title text-uppercase pt-5">
            <div
                style={{
                    display: 'flex', justifyContent: 'center'
                    , alignItems: 'center',


                }}>
                <img src="https://media.istockphoto.com/vectors/design-template-404-error-page-concept-vector-illustration-vector-id1251262272?k=20&m=1251262272&s=612x612&w=0&h=_YwlmBE5ZBZAkdF9ZMyEdfUzaAhAUl6M8zuq6lJZOBM=" alt="error 404" />


            </div>

            <h2 style={{ color: 'red', fontWeight: 'bold', padding: '1rem' }}>error 404</h2>
            <h3 style={{ color: 'teal', fontWeight: 'bold', padding: '0.5rem' }}>page not found</h3>

            <h4 style={{ color: 'teal' }}> the requested url <span className='text-danger'>
                {location.pathname}</span>{" "}was not found</h4>


        </div>
        //     </div>
        // </div>
    )
}

export default Default