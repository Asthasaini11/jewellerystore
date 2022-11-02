
import { Carousel } from "react-bootstrap"

import styled from "styled-components"
import media from "../responsive"


const Container = styled.div`
    width:100%;
    height:100vh;
    display:flex;
     ${media.phone`
       display:none;
        
  `}
    
`

const Slider = () => {

  return (
    <Container>
      {/* <Arrow direction='left' onClick={()=>handleClick("left")}>
        <KeyboardArrowLeft/>
      </Arrow>
      <Wrapper>
      <Slide bg="f5fafd">
        <ImgContainer>
          <Image src=""></Image>
        </ImgContainer>
        <InfoContainer>
          <Title>Summer sale </Title>
          <Disc> Dont compromise with the style, get it now</Disc>
          <Button> shop now</Button>
        </InfoContainer>
      </Slide>
      <Slide bg="fcf1ed">
        <ImgContainer>
          <Image src=""></Image>
        </ImgContainer>
        <InfoContainer>
          <Title>Summer sale </Title>
          <Disc> Dont compromise with the style, get it now</Disc>
          <Button> shop now</Button>
        </InfoContainer>
      </Slide>
      <Slide bg="fbfof4">
        <ImgContainer>
          <Image src=""></Image>
        </ImgContainer>
        <InfoContainer>
          <Title>Summer sale </Title>
          <Disc> Dont compromise with the style, get it now</Disc>
          <Button> shop now</Button>
        </InfoContainer>
      </Slide>
      </Wrapper>
      <Arrow direction='right' onClick={()=>handleClick("right")}>
        <KeyboardArrowRight/>
      </Arrow> */}
      <Carousel controls={false} style={{ width: '100%', marginTop: '20px' }}>
        <Carousel.Item style={{ height: '115vh' }}>
          <img
            className="d-block w-100 "
            src="https://everstylish.com/pub/media/wysiwyg/slider/1.jpg"
            alt="First slide"
            style={{ height: '80%' }}

          />

        </Carousel.Item>
        <Carousel.Item style={{ height: '115vh' }}>
          <img
            className="d-block w-100 "
            src="https://everstylish.com/pub/media/wysiwyg/slider/2.jpg"
            alt="Second slide"
            style={{ height: '80%' }}
          />

        </Carousel.Item>
        <Carousel.Item style={{ height: '115vh' }}>
          <img
            className="d-block w-100"
            src="https://everstylish.com/pub/media/wysiwyg/slider/3.jpg"
            alt="Third slide"
            style={{ height: '80%' }}
          />
        </Carousel.Item>
      </Carousel>
    </Container>
  )
}

export default Slider