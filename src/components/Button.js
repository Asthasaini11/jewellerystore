import styled from "styled-components"
export const ButtonContainer = styled.button`
color:${props => props.cart ? "white" : "teal"};
  text-transform:capitalize;
  font-size:1.4rem;
  background:${props => props.cart ? "palevioletred" : "transparent"};
  border:0.05rem solid ;
  border-color:${props => props.cart ? "palevioletred" : "teal"};
  
  border-radius:0.5rem;
  padding:0.2rem 0.5rem;
  cursor:pointer;
  margin:0.2rem 0.5rem 0.2rem 0;
  transition:all 0.5s ease-in-out;
  &:hover{
    background-color: ${props => props.cart ? "palevioletred" : "teal"};
    color:white;
  }
  &:focus{
  outline:none;
}

`
