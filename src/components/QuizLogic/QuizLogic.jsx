import { useEffect, useState } from "react"
import Quiz from '../Quiz/Quiz'
import Loading from '../Loading/Loading'

function QuizLogic () {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [indexQuestion, setIndexQuestion] = useState(1)
    const [corrects, setCorrects] = useState(0)
    const [shuffledOptions, setShuffledOptions] = useState([]) 

    useEffect(() => {
        fetch(("/data/questions.json"))
            .then((response) => response.json())
            .then((data) => {
                const shuffledQuestions = shuffleQuestions(data)
                setData(shuffledQuestions)
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false))
    }, [])

    useEffect(() => {
        if (data[indexQuestion]?.options) {
          setShuffledOptions(shuffleOptions(data[indexQuestion].options));
        }
      }, [data, indexQuestion])

    const shuffleQuestions = (questions) => {
        return questions.sort(() => Math.random() - 0.5)
    }

    const shuffleOptions = (options) => {
        return options.sort(() => Math.random() - 0.5)
    }

    const getNextQuestion = () => {
        if (indexQuestion <= 10) {
            setIndexQuestion(indexQuestion + 1)
        }
    }

    const isCorrect = (selectedOption, correctAnswer) => {
        return selectedOption === correctAnswer
    }

    const submitAnswer = (selectedOption) => {
        if (selectedOption !== null) {
            if (isCorrect(selectedOption, data[indexQuestion].correct_answer)) {
                setCorrects((prev) => prev + 1)
            }
            getNextQuestion()
        }
    }

    const startAgain = () => {
        setIndexQuestion(1)
    }

    if (loading) return <Loading />
    
    return (
        <Quiz 
            data={data} 
            isCorrect={isCorrect} 
            indexQuestion={indexQuestion} 
            submitAnswer={submitAnswer}
            options={shuffledOptions}
            corrects={corrects}
            startAgain={startAgain}
        />
    )
}

export default QuizLogic