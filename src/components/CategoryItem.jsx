import styled from "styled-components";

const Container = styled.div`
    flex:1;
    margin:7px;
    height:55vh;
    position:relative;
`
const Info = styled.div`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    
`

function CategoryItem({ item }) {
  return (
    <div>
      <Container>

        <img src={item.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />


        <Info>
          {/* <h1 style={{ marginBottom:'20px',fontWeight:'bold' }}>{item.title}</h1> */}
          <button style={{
            border: 'none',
            padding: '10px',
            fontWeight: '600',
            backgroundColor: 'white',
            width: '200px',
            textAlign: 'center',
            color: 'gray',
            cursor: 'pointer'
          }}>{item.title}</button>


        </Info>

      </Container>
    </div >

  )
}

export default CategoryItem