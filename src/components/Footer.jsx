import { Email, Facebook, Instagram, LocalPhone, LocationOn, Pinterest, Twitter } from '@material-ui/icons'
import React from 'react'
import media from '../responsive'
import styled from 'styled-components'

const Conatiner = styled.div`
    display:flex;
    padding:0.5rem  2rem;
     ${media.phone`
        flex-direction:column;
        align-items:center;
        text-align:center;
  `}
`

const Left = styled.div`
    flex:1;
    display:flex;
    flex-direction: column;
    padding:20px;
`
const Logo = styled.h1`
color:teal;
`

const Desc = styled.p`
margin:20px 0px;
`
const SocialContainer = styled.div`
display:flex;

`
const SocialIcon = styled.div`
width:40px;
height:40px;
border-radius:50%;
color:white;
background-color :#${props => props.color};
display:flex;
align-items:center;
justify-content:center;
margin: 0.7rem;
`

const Title = styled.h3`
`

const Right = styled.div`
    flex:1;
    padding:20px;
`
const ContactItem = styled.div`


`


const Footer = () => {
    return (
        <Conatiner>
            <Left>
                <Logo> JEWEL STORE</Logo>
                <Desc> Fashion is not necessarily about labels. its not about brands.it's about something else that comes from within you
                    .it is the armor to survive the reality of everyday life.</Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram />
                    </SocialIcon>

                    <SocialIcon color="55ACEE">
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>
            </Left>


            <Right>
                <Title> Contact</Title>
                <ContactItem> <LocationOn />
                    B-107, Vishkarma Colony, M.B.Road,New Delhi- 110044,India
                    <ContactItem>
                    </ContactItem>
                    <LocalPhone />
                    + 91 247 24 247 XX
                </ContactItem>
                <ContactItem>
                    <Email />
                    contact at asthasara@gmail.com
                </ContactItem>
            </Right>
        </Conatiner>
    )
}

export default Footer