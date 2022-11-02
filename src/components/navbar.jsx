import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import { Badge } from '@material-ui/core'
import { Link } from 'react-router-dom'
import React from 'react'
import styled from 'styled-components'
import { ButtonContainer } from './Button'



const Container = styled.div`
        height:60px;
        margin-bottom:20px;
        

`
const Wrapper = styled.div`
    padding: 10px 20px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    
`
const Left = styled.div`
  flex:1;
  display:flex;
  align-items:center;
`
const Language = styled.span`
  font-size: 14px;
  cursor:pointer;
`
const SearchContainer = styled.div`
  border:1px solid lightgray;
   display:flex;
  align-items:center;
  margin-left:25px;
  padding:5px;
`
const Input = styled.input`
  border:none;
`
const Centre = styled.div`
  flex:1;
  text-align:center;
`
const Logo = styled.h1`
font-weight:bold;
`
const Right = styled.div`
  flex:1;
  align-items:center;
  display:flex;
  justify-content:flex-end;
`
const MenuItem = styled.div`
  font-size:14px;
  cursor:pointer;
  margin-left:25px;
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>

        <Left>
          {/* <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search style={{ color: 'grey', fontSize: '16px' }} />
          </SearchContainer> */}
          <Link to="/">
            <img style={{ height: '40px', width: '40px' }} src="https://cdn-icons.flaticon.com/png/128/3674/premium/3674421.png?token=exp=1656135089~hmac=8aaf85c3553a91430de59e2b1bb29377" alt="store" />
          </Link>
          <MenuItem > <Link to="/" className='nav-link' style={{ color: 'black', fontWeight: 'bold' }}>Products</Link></MenuItem>
        </Left>

        <Centre><Logo>JEWEL STORE</Logo></Centre>

        <Right>

          {/* <MenuItem> */}
          <Link to="/cart" className='ml-auto'>
            <ButtonContainer>
              <span className='mr-2'>
                <ShoppingCartOutlined />
                My Cart
              </span>

            </ButtonContainer>
          </Link>
          {/* <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge> */}
          {/* </MenuItem> */}
        </Right>

      </Wrapper>

    </Container>
  )
}


export default Navbar