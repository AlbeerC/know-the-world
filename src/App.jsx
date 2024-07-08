import './App.css'
import CountryCardContainer from './components/CountryCardContainer/CountryCardContainer'
import MapLibrary from './components/MapLibrary/MapLibrary'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <MapLibrary />
      <CountryCardContainer />
    </>
  )
}

export default App
