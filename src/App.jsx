import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import MainView from './components/MainView/MainView'
import MapLibrary from './components/MapLibrary/MapLibrary'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<MainView />} />
        <Route path='/map' element={<MapLibrary /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
