import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";
// import { mobile } from "../responsive";
import media from '../responsive'


const Container = styled.div`
    display:flex;
    padding:20px;
    justify-content:space-between;
      
      ${media.phone`
        padding:20px;
        margin-left:3.5rem;
        flex-direction:column;
        
        width:100%;
        max-width:400px;
        height:auto;
        
        
        
  `}
`

const Categories = () => {
  return (
    <div>
      <h2 style={{ textAlign: 'center', fontWeight: 'bold', marginTop: '2rem', padding: '1rem', color: 'darkBlue' }}> CATEGORIES</h2>
      <Container>

        {categories.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </Container>
    </div>

  )
}

export default Categories