import Input from '../Input'
import styled from 'styled-components'
import { useState } from 'react'
import { books } from './searchDatas'

const SearchContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 100%);
    color: #ffffff;
    text-align: center;
    padding: 85px 0;
    height: 470px;
    width: 100%;
`

const Title = styled.h2`
    color: #ffffff;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const Subtitle = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

const Result = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   margin-bottom: 20px;
   cursor: pointer;
   p {
       width: 200px;
   }
   img {
       width: 100px;
   }
   &:hover {
       border: 1px solid white;
   }
`

function Search() {
    const [searchedBooks, setSearchedBooks] = useState([])

    return (
        <SearchContainer>
            <Title>Já sabe por onde começar?</Title>
            <Subtitle>Encontre seu livro em nossa estante.</Subtitle>
            <Input 
                placeholder="Escreva sua próxima leitura" 
                onBlur={event => {
                    const digitedText = event.target.value
                    const resultSearch = books.filter( book => book.name.includes(digitedText) )
                    setSearchedBooks(resultSearch)
                }}
            />
            { searchedBooks.map( book => (
                <Result>
                    <img src={book.src} alt={book.name} />
                    <p>{book.name}</p>
                </Result>
            ) ) }
        </SearchContainer>
    )
}

export default Search