import Header from './components/Header'
import Search from './components/Search'
import LastReleases from './components/LastReleases'
import styled from 'styled-components'

const AppContainer = styled.div`
    width: 100vw; /* vw = 100% da tela */
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52 35%, #326589 100%);
`

function App() {
  return (
    <AppContainer>
      <Header />
      <Search />
      <LastReleases />
    </AppContainer>
  )
}

export default App
