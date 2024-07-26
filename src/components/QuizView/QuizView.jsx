import './QuizView.css'
import { Link } from 'react-router-dom'

function QuizView () {
    
    return (
        <main className='main-quiz-view'>
            <section className="quiz-view">
                <h2>Bienvenido al quiz</h2>
                <p>Consta de 20 preguntas sobre distintas áreas de geografía. Al finalizar, podrás ver tu puntaje.</p>
                <Link to='/quiz'>Empezar quiz</Link>
            </section>
        </main>

    )
}

export default QuizView