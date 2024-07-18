import { Link } from 'react-router-dom'
import './MainView.css'

function MainView () {

    return (
        <main>
            <div className="options">
                <Link to='/map'>Mapa interactivo</Link>
                <Link>Quiz</Link>
                <Link to='/countries'>Aprender</Link>
            </div>
        </main>
    )
}

export default MainView