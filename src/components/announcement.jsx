import styled from "styled-components"

const Container = styled.div`
    height:30px;
    background-color:teal;
    color:white;
    text-align:center;
    font-size:14px;
    font-weight:500;
`

const Announcement = () => {
  return (
    <Container>
      Latest collection available at affordable price
    </Container>
  )
}

export default Announcement