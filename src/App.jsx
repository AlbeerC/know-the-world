import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import MainView from './components/MainView/MainView'
import MapLibrary from './components/MapLibrary/MapLibrary'
import CountryListContainer from './components/CountryListContainer/CountryListContainer'
import NotFound from './components/NotFound/NotFound'
function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<MainView />} />
        <Route path='/map' element={<MapLibrary /> } />
        <Route path='/countries' element={<CountryListContainer /> } />
        <Route path='*' element={<NotFound /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
