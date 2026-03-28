import React from 'react';
import './game.css';

export function Game(){
    const [questions, setQuestions] = React.useState();
    const [error, setError] = React.useState(null);
    const [score, setScore] = React.useState(0);
    const [curIndex, setCurIndex] = React.useState(0);
    const [question, setQuestion] = React.useState('');
    const [selectedAnswer, setSelectedAnswer] = React.useState(false);
    const [answerCorrect, setAnswerCorrect] = React.useState(null);

    React.useEffect(() => {
        if (questions) setQuestion(questions[curIndex]);
    }, [questions, curIndex])

    React.useEffect(() => { // React hook for getting data from Open Trivia DB.
        const urlParams = new URLSearchParams(window.location.search);
        const difficulty = urlParams.get('difficulty');
        const category = urlParams.get('category');
        fetch(`https://opentdb.com/api.php?amount=5&category=${category}&difficulty=${difficulty}&encode=url3986`)
            .then((response) => response.json())
            .then((data) => {
                if(data.response_code == 0)
                {
                    const decoded = data.results.map((q) => ({
                        ...q,
                        question: decodeURIComponent(q.question),
                        incorrect_answers: q.incorrect_answers.map(decodeURIComponent),
                        correct_answer: decodeURIComponent(q.correct_answer),
                        answers: [...q.incorrect_answers.map(decodeURIComponent), decodeURIComponent(q.correct_answer)]
                            .sort(() => Math.random() - 0.5)
                    }));
                    setQuestions(decoded);
                }
                else
                {
                    setError('Failed to load questions. Please try again.');
                }
            })
            .catch((err) => setError('Network error. Please check your connection.'));
    }, []);

    function handleQuestionAnswered(correct)
    {
        setSelectedAnswer(true);
        setAnswerCorrect(correct);
        if (correct) setScore(i => i + 100);
    }

    function handleContinue()
    {
        setCurIndex(i => i+1);
        if (curIndex === questions.length)
        {
            
        }
        setSelectedAnswer(false);
    }

    return(
        <div>
            <p id="Score">Score: {score}</p>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {!questions &&
            <p>It appears the questions have not loaded. Please wait or refresh the page.</p>
            }
            {questions && question && (
                <div id="main-div">
                    <p>{question.question}</p>
                    <div id="button-holder">
                        {
                            question.answers.map((answer) => (
                                <button className="btn btn-primary" key={answer} onClick={() => 
                                handleQuestionAnswered(question.correct_answer === answer)
                                }>
                                {answer}
                                </button>
                            ))
                        }
                    </div>
                    <button className="btn btn-dark" onClick={handleContinue} disabled={!selectedAnswer}>
                        Continue
                    </button>
                    {selectedAnswer && answerCorrect && <p>Correct!</p>}
                    {selectedAnswer && !answerCorrect && <p>Incorrect!</p>}
                </div>
            )}
        </div>
    )
}