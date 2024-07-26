import { useState } from 'react'
import './Quiz.css'

function Quiz ( {isCorrect, indexQuestion, data, submitAnswer, options} ) {

    const [selectedOption, setSelectedOption] = useState(null)
    const letters = ["A", "B", "C", "D"]

    const handleOptionClick = (selectedOption) => {
        const correct = isCorrect(selectedOption, data[indexQuestion].correct_answer)
        setSelectedOption(selectedOption)
    }

    return (
        <main className="main-quiz">
            <section className="quiz">
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
                    <button onClick={submitAnswer}>Confirmar</button>
                </div>
            </section>
        </main>
    )
}

export default Quiz