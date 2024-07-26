import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import MainView from './components/MainView/MainView'
import MapLibrary from './components/MapLibrary/MapLibrary'
import CountryListContainer from './components/CountryListContainer/CountryListContainer'
import NotFound from './components/NotFound/NotFound'
import QuizView from './components/QuizView/QuizView'
import QuizLogic from './components/QuizLogic/QuizLogic'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<MainView />} />
        <Route path='/map' element={<MapLibrary /> } />
        <Route path='/countries' element={<CountryListContainer /> } />
        <Route path='/start-quiz' element={<QuizView /> } />
        <Route path='/quiz' element={<QuizLogic /> } />
        <Route path='*' element={<NotFound /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
