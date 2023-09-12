import { books } from './dataLastReleases'
import { Title } from '../Title'
import CardRecommends from '../CardRecommends'
import imgBookRecommended from '../../images/livro2.png'
import styled from 'styled-components'

const LastReleasesContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NewBooksContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function LastReleases() {
    return (
        <LastReleasesContainer>
            <Title 
                color="#EB9B00" 
                fontSize="36px" 
            >
                ÚLTIMOS LANÇAMENTOS
            </Title>
            <NewBooksContainer>
                { books.map( book => (
                    <img src={book.src} alt={book.name} key={book.id} />
                ))}
            </NewBooksContainer>
            <CardRecommends 
                title = "Talvez você se interesse por"
                subtitle = "Angular 11"
                description= "Contruindo uma aplicação com a plataforma Google"
                img = {imgBookRecommended}
            />
        </LastReleasesContainer>
    )
}

export default LastReleases