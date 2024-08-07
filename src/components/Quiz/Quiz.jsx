import { useState, useEffect } from 'react'
import './Quiz.css'

function Quiz ( {indexQuestion, data, submitAnswer, options, corrects, startAgain} ) {

    const [selectedOption, setSelectedOption] = useState(null)
    const letters = ["A", "B", "C", "D"]
    
    useEffect(() => {
        setSelectedOption(null)
    }, [indexQuestion])

    const handleOptionClick = (selectedOption) => {
        setSelectedOption(selectedOption)
    }

    return (
        <main className="main-quiz">
            <section className="quiz">
                {
                indexQuestion > 10 ? 
                    <div className='results'>
                        <h2>Resultados del quiz:</h2>
                        <p>Respuestas correctas: <span className='green'>{corrects}</span></p>
                        <p>Respuetas incorrectas: <span className='red'>{10 - corrects}</span></p>
                        <button onClick={startAgain}>Empezar de nuevo</button>
                    </div> 
                : 
                    <div>
                        <h3>{data[indexQuestion].question}</h3>
                        <div className="options">
                            {
                                options.map((option, index) => (
                                    <div className="option" key={option}>
                                        <button className={`option-pointer ${selectedOption === option ? 'selected' : ''}`} 
                                            onClick={() => handleOptionClick(option)}>
                                            <p>{letters[index]}</p>
                                            <p>{option}</p>
                                        </button>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="bottom">
                            <span>{indexQuestion}/10</span>
                            <button onClick={() => submitAnswer(selectedOption)}>Confirmar</button>
                        </div>
                    </div>
                }
            </section>
        </main>
    )
}

export default Quiz